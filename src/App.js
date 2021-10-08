import axios from 'axios'
import React, { useState } from 'react'

const App = () => {
    const [searchName, setSearchName] = useState('')
    const [repo, setRepo] = useState([])
    const [errorMsg, setErrorMsg] = useState('')

    // event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log('button clicked')
        // console.log('search name is ', searchName)
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

    // const displayInfo = () => {
    //     if (repo.length === 0) {
    //         return null
    //     } else return repo.map((repo) => <p key={repo.id}>{repo.name}</p>)
    // }

    //  display error message
    const errorDisplay = null ? !errorMsg : <div>{errorMsg}</div>

    // display all the repos of the searched user
    const allRepos = null
        ? repo.length === 0
        : repo.map((repo) => (
              <ul key={repo.id}>
                  <li>
                      {repo.name}
                      <a
                          href={`${repo.svn_url}`}
                          rel=' noreferrer'
                          target='_blank'
                      >
                          {' '}
                          link{' '}
                      </a>
                  </li>
              </ul>
          ))
    // event handler for search box
    const handleSearch = (e) => {
        // console.log(e.target.value)
        setSearchName(e.target.value)
    }

    console.log(repo)
    return (
        <div
            style={{
                textAlign: 'center',
                color: 'purple',
            }}
        >
            <h1>Github profile search</h1>
            <form onSubmit={handleSubmit}>
                <h3> Enter github username below</h3>
                <input placeholder='username..' onChange={handleSearch} />
                <button type='submit'>search</button>
            </form>
            <h3>{errorDisplay}</h3>
            <div
                style={{
                    display: 'table',
                    margin: 'auto',
                    textAlign: 'left',
                }}
            >
                {allRepos}
            </div>
        </div>
    )
}

export default App
