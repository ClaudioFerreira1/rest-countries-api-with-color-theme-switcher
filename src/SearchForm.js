function SearchForm() {
  return (
    <>
      <span className="material-icons-outlined" id='search-icon'>
        search
      </span>

      <form>
        <input type="text" placeholder="Search for a country..." />
      </form>
    </>
  )
}

export default SearchForm