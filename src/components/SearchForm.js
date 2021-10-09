import React from 'react'

// search form component
const SearchForm = ({ handleSubmit, handleSearch }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='username..' onChange={handleSearch} />
            <button type='submit'>search</button>
        </form>
    )
}

export default SearchForm
