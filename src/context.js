import React, { useState, useContext, useEffect } from 'react'

export const API_ENDPOINT = "https://restcountries.com/v2/"

const AppContext = React.createContext();

const getStorageTheme = () => {
  let theme = "light-mode"
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('all')
  const [filterCountries, setFilterCountries] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [isLightMode, setLightMode] = useState(getStorageTheme())

  const toggleTheme = () => {
    if (isLightMode === "light-mode") {
      setLightMode("dark-mode")
    } else {
      setLightMode("light-mode")
    }
  }

  async function fetchCountries(url) {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 404) {
        setError(true)
      } else {
        setCountries(data);
        setAllCountries(data);
        setError(false);
      }
      setIsLoading(false)

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCountries(`${API_ENDPOINT}${query}`)
  }, [query])

  useEffect(() => {
    document.documentElement.className = isLightMode
    localStorage.setItem("theme", isLightMode)
  }, [isLightMode])

  return <AppContext.Provider value={{ isLoading, error, countries, query, setQuery, filterCountries, setFilterCountries, allCountries, isLightMode, toggleTheme }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }