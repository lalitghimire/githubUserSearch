import React, { useState } from 'react'
import axios from 'axios'
import SearchForm from './components/SearchForm'
import RepoList from './components/RepoList'

const App = () => {
    const [searchName, setSearchName] = useState('')
    const [repo, setRepo] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    // event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault()
        axios
            .get(`https://api.github.com/users/${searchName}/repos`)
            .then((response) => {
                setRepo(response.data)
            })
            .catch((error) => {
                console.log('invalid username', error.message)
                setErrorMsg(`user not found`)
                setTimeout(() => {
                    setErrorMsg(null)
                }, 5000)
            })
    }

    //  display error message
    const errorDisplay = null ? !errorMsg : <div>{errorMsg}</div>

    // event handler for search box
    const handleSearch = (e) => {
        // console.log(e.target.value)
        setSearchName(e.target.value)
    }

    console.log(repo)
    return (
        <div>
            <h1>Github profile search</h1>
            <h3> Enter github username below</h3>
            <SearchForm
                handleSearch={handleSearch}
                handleSubmit={handleSubmit}
            />
            <h3>{errorDisplay}</h3>
            <RepoList repo={repo} />
        </div>
    )
}

export default App
