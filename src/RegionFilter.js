import React from 'react'
import { useGlobalContext } from './context'

function RegionFilter() {
  const { setQuery } = useGlobalContext();
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <select id="form-select-region" onChange={(e) => { setQuery(e.target.value) }}>
          <option defaultValue value="all">Filter by Region</option>
          <option value="region/africa">Africa</option>
          <option value="region/americas">Americas</option>
          <option value="region/asia">Asia</option>
          <option value="region/europe">Europe</option>
          <option value="region/oceania">Oceania</option>
        </select>
        <span className="material-icons-outlined arrow-bottom">
          expand_more
        </span>
      </form>
    </>
  )
}

export default RegionFilter