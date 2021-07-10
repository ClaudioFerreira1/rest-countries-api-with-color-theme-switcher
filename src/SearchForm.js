import React from 'react'
import { useGlobalContext } from './context'


function SearchForm() {
  const { setQuery } = useGlobalContext();
  return (
    <>
      <span className="material-icons-outlined" id='search-icon'>
        search
      </span>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Search for a country..." onChange={(e) => {
          if (e.target.value !== '') {
            setQuery(`name/${e.target.value}`)
          } else {
            setQuery("all")
          }
        }} />
      </form>
    </>
  )
}

export default SearchForm