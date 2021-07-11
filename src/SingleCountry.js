import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'
import Error from './Error'
import NavBar from './Navbar'

function Country() {
  const { countryName } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState({});
  const [error, setError] = useState(false);

  async function fetchMovie(url) {
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
    fetchMovie(`${API_ENDPOINT}name/${countryName}`)
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
    const { name, topLevelDomain, capital, region, subregion, population, borders, currencies, languages, flag } = country[0]
    return (<>
      <NavBar />
      <h1>Countrie info</h1>
    </>)
  }
}

export default Country