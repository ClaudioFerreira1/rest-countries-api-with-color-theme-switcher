import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
import ErrorPage from './Error'
import CountryNotFound from './CountryNotFound'

function Countries() {
  const { error, countries, isLoading, filterCountries } = useGlobalContext();

  if (isLoading) {
    return <div className="div-loading-countries">
      <div className="loading"></div>
    </div>
  } else if (error) {
    return <ErrorPage />
  } else if (countries.filter(countryF => countryF.name.toLowerCase().includes(filterCountries.toLowerCase())).length === 0) {
    return <CountryNotFound />
  } else {
    return <section className="countries-section">
      {countries.filter(countryF => countryF.name.toLowerCase().includes(filterCountries.toLowerCase())).map((country) => {
        return <Link to={`/country/${country.name.toLowerCase()}`} className="country-card" key={country.alpha3Code}>
          <img src={country.flag} alt={country.name} />
          <div className='div-title'>
            <h2>{country.name.toString().length > 19 ? `${country.name.substring(0, 19)}...` : country.name}</h2>
          </div>
          <div className='div-description'>
            <p><span>Population:</span> {country.population.toLocaleString()}</p>
            <p><span>Region:</span> {country.region}</p>
            <p><span>Capital:</span> {country.capital}</p>
          </div>
        </Link>
      })}
    </section>
  }

}


export default Countries