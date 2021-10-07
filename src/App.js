import React, { useState } from 'react'

const App = () => {
    const [searchName, setSearchName] = useState('')

    // event handler for button click
    const handleClick = () => {
        console.log('button is clicked')
        console.log(searchName)
    }

    // event handler for search box
    const handleSearch = (e) => {
        console.log(e.target.value)
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
            <div>
                <ul>
                    <li> repo1</li>
                </ul>
            </div>
        </div>
    )
}

export default App
