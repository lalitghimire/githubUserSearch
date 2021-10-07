import React from 'react'

const App = () => {
    // event handlers
    const handleClick = () => {
        console.log('button is clicked')
    }

    const handleSearch = (e) => {
        console.log(e.target.value)
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
