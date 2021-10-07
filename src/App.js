import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
    const [searchName, setSearchName] = useState('')
    const [repo, setRepo] = useState([])

    // event handler for button click
    const handleClick = () => {
        // console.log('button clicked')
        // console.log('search name is ', searchName)
        axios
            .get(`https://api.github.com/users/${searchName}/repos`)
            .then((response) => {
                setRepo(response)
            })
            .catch((error) => {
                console.log('invalid username', error.message)
            })
    }
    console.log('here is repodata', repo.data)
    const displayInfo = () => {
        if (repo.length === 0) {
            return null
        } else
            return repo.data.map((repo) => (
                <p key={repo.id}>
                    {repo.name} {'  '}
                    {repo.url}
                </p>
            ))
    }

    // event handler for search box
    const handleSearch = (e) => {
        // console.log(e.target.value)
        setSearchName(e.target.value)
    }

    return (
        <div>
            <h1>Github profile search</h1>
            Enter github username
            <div>
                <input placeholder='username..' onChange={handleSearch} />
                <button onClick={handleClick}>search</button>
            </div>
            <div>{displayInfo()}</div>
        </div>
    )
}

export default App
