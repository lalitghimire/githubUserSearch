import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import RepoList from './components/RepoList';

const App = () => {
    const [searchName, setSearchName] = useState('');
    const [repo, setRepo] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    // event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        setisLoading(true);
        axios
            .get(`https://api.github.com/users/${searchName}/repos`)
            .then((response) => {
                setRepo(response.data);
                setIsSubmitted(true);
                setisLoading(false);
                setErrorMsg('');
            })

            .catch((error) => {
                setErrorMsg(`User not found. Check username`);
                setRepo([]);
                setisLoading(false);
                setIsSubmitted(false);
            });
        event.target.reset();
    };

    //  display error message
    const errorDisplay = !errorMsg ? null : <div>{errorMsg}</div>;
    // display loading message
    const loader = isLoading ? <div>...loading</div> : null;

    // event handler for search box
    const handleSearch = (e) => {
        // console.log(e.target.value)
        setSearchName(e.target.value);
    };

    console.log(repo);
    return (
        <div>
            <h1>Github repositories search</h1>
            <h3> Enter github username below</h3>
            <SearchForm handleSearch={handleSearch} handleSubmit={handleSubmit} />

            <h3>{errorDisplay}</h3>
            <h3>{loader}</h3>
            {isSubmitted && <RepoList repo={repo} />}
        </div>
    );
};

export default App;
