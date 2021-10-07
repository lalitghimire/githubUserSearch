import React from 'react'

const App = () => {
    return (
        <div>
            <h1>Github profile search</h1>
            Enter github username
            <div>
                <input placeholder='username..' />
                <button>search</button>
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
