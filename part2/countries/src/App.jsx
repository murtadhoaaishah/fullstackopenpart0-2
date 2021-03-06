import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [query, setQuery] = useState('')
  const [show, setShow] = useState({ display: false, country: {} })
  const [weather, setWeather] = useState('')


  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])
  console.log(countries);



  const api_key = process.env.REACT_APP_API_KEY
  // key = '6b68316c60771c61ace4c744ea0ebff9'

  // REACT_APP_API_KEY='6b68316c60771c61ace4c744ea0ebff9' npm start




  const fetchWeather = (country) => {
    console.log({ country })
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${country.name.common}&&appid=${api_key}`)
      .then(response => {
        setWeather(response.data)
      })
  }
  console.log({ weather });

  useEffect(() => {
    if (filteredCountries.length === 1)
      fetchWeather(filteredCountries[0])
  }, [query])


  const filteredCountries = query.trim()
    ? countries.filter(country => country.name.common.toLowerCase()
      .includes(query.trim().toLowerCase()))
    : []


  const output = filteredCountries.length === 1
    ? <div>
      <h1>{filteredCountries[0].name.common}</h1>
      <p>capital {filteredCountries[0].capital}</p>
      <p>area {filteredCountries[0].area}</p>
      <h3>npm start
        languages: {Object.entries(filteredCountries[0].languages)
          .map((languages, languageIndex) =>
            <li key={`language_${languageIndex}`}>{languages[1]}</li>)}
      </h3>
      <img src={filteredCountries[0].flags.png} alt={filteredCountries[0].name.common} />
      <h2>Weather in {filteredCountries[0].name.common}</h2>
      {weather && <div>
        <p>temperature -{weather.main.temp}</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
        <p>wind {weather.wind.speed}m/s</p>
      </div>}
    </div>

    : filteredCountries.length < 10
      ? filteredCountries.map((country, countryIndex) =>
        <li key={`country_${countryIndex}`}>{country.name.common}<button
          onClick={() => { setShow({ ...show, display: !show.display, country }); fetchWeather(country) }}>show</button></li>
      )
      : <p>Too many matches, specify another filter</p>



  return (
    <div>
      find countries <input value={query}
        onChange={e => setQuery(e.target.value)} />

      {show.display
        ? <div>
          <h1>{show.country.name.common}</h1>
          <p>capital {show.country.capital}</p>
          <p>area {show.country.area}</p>
          <h3>
            languages: {Object.entries(show.country.languages)
              .map((languages, languageIndex) =>
                <li key={`language_${languageIndex}`}>{languages[1]}</li>)}
          </h3>
          <img src={show.country.flags.png} alt={show.country.name.common} />
          <h1>Weather in {show.country.name.common}</h1>
          {weather && <div>
            <p>temperature -{weather.main.temp}</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
            <p>wind {weather.wind.speed}m/s</p>
          </div>}
        </div>

        : output}
    </div>
  )
}

export default App