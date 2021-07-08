function TopComponent() {
  return (
    <div id="top-component">

      <span class="material-icons-outlined" id='search-icon'>
        search
      </span>

      <form>
        <input type="text" placeholder="Search for a country..." />
      </form>

      <form>
        <select id="form-select-region">
          <option value="all">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
        <span class="material-icons-outlined arrow-bottom">
          expand_more
        </span>
      </form>

    </div>
  )
}


export default TopComponent