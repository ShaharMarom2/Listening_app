const SearchBar = ({ handleSearch }) => {
    return(
        <input onInput={handleSearch} type="text" />
    )
}

export default SearchBar