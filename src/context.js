import React, { useState, useContext, useEffect } from 'react'

export const API_ENDPOINT = "https://restcountries.eu/rest/v2/"

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('all')

  async function fetchCountries(url) {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 404) {
        setError(true)
        console.log("deu ruim")
        console.log(data)
      } else {
        setCountries(data);
        setError(false);
        console.log("deu bom")
        console.log(data)
      }
      setIsLoading(false)

    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchCountries(`${API_ENDPOINT}${query}`)
  }, [query])


  return <AppContext.Provider value={{ isLoading, error, countries, query, setQuery }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }