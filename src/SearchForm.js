import React from 'react'
import { useGlobalContext } from './context'


function SearchForm() {
  const { setFilterCountries } = useGlobalContext();
  return (
    <>
      <span className="material-icons-outlined" id='search-icon'>
        search
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search for a country..." onChange={(e) => setFilterCountries(e.target.value)} />
      </form>
    </>
  )
}

export default SearchForm