import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import { useGlobalContext } from './context'
import Error from './Error'
import NavBar from './Navbar'

function Country() {
  const { allCountries } = useGlobalContext();
  const { countryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState({});
  const [error, setError] = useState(false);
  const bordersCountryNames = [];

  async function fetchCountrie(url) {
    const response = await fetch(url)
    const data = await response.json()
    if (data.status === 404) {
      setError(true)
      setIsLoading(false)
    } else {
      setCountry(data)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCountrie(`${API_ENDPOINT}name/${countryName}`)
  }, [countryName])

  if (isLoading) {
    return (<>
      <NavBar />
      <div className="loading-div">
        <div className="loading"></div>
      </div>
    </>)
  } else if (error) {
    return <Error />
  } else {
    const { name, topLevelDomain, capital, region, subregion, population, borders, currencies, languages, flag, nativeName } = country[0]

    function getBorderNames(allCountriesArray, bordersOfCurrentCountry) {
      allCountriesArray.forEach((singleCountry) => {
        bordersOfCurrentCountry.forEach((singleBorder) => {
          if (singleCountry.alpha3Code === singleBorder) {
            bordersCountryNames.push(singleCountry.name);
          };
        });
      });
    };

    getBorderNames(allCountries, borders);

    return (<>
      <NavBar />
      <section className='single-country-main-section'>
        <Link to="/" className="btn-style">
          <span className="material-icons-outlined">
            arrow_back
          </span>
          Home
        </Link>
        <div className="main-div-section">
          <img src={flag} alt={`${name}-flag`} />
          <div className="country-description">
            <h1>{name}</h1>
            <div className="country-description-information">
              <div>
                <p><span>Native Name: </span>{nativeName}</p>
                <p><span>Population: </span>{population.toLocaleString()}</p>
                <p><span>Region: </span>{region === "" ? "-" : region}</p>
                <p><span>Subregion: </span>{subregion === "" ? "-" : subregion}</p>
                <p><span>Capital: </span>{capital === "" ? "-" : capital}</p>
              </div>
              <div>
                <p><span>Top Level Domain: </span>{topLevelDomain}</p>
                <p><span>Currencies: </span>{currencies.map((currency) => {
                  return currency.name
                }).join(", ")}</p>
                <p><span>Languages: </span>{languages.map((language) => {
                  return language.name
                }).join(", ")}</p>
              </div>
            </div>
            <div className="border-countries-div">
              <p><span>Border Countries:</span></p>
              <div className="border-countries-div-links">
                {borders.length === 0 ? "This country has no border countries because it is an island." : bordersCountryNames.map((singleBorder) => {
                  return <Link to={`/country/${singleBorder.toLowerCase()}`} className="border-countries-links" key={singleBorder} >{singleBorder}</Link>
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>)
  }
}

export default Country