function RegionFilter() {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <select id="form-select-region" onChange={(e) => { console.log(e.target.value) }}>
          <option defaultValue value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        <span className="material-icons-outlined arrow-bottom">
          expand_more
        </span>
      </form>
    </>
  )
}

export default RegionFilter