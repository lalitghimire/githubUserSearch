import React from 'react'

const SearchForm = ({ handleSubmit, handleSearch }) => {
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='username..' onChange={handleSearch} />
            <button type='submit'>search</button>
        </form>
    )
}

export default SearchForm
