import React from 'react'
import useFetchData from './customHooks/useFetchData';


function App() {

  const [countries] = useFetchData('https://restcountries.com/v3.1/all')


  const [posts] = useFetchData('https://jsonplaceholder.typicode.com/posts')

  console.log(posts)






  // https://restcountries.com/v3.1/all

  return (
    <div>
      {/* {countries?.map((country, index) => {

        let currency;

        for (currency in country.currencies
        )
          console.log(currency)


        return (
          <h1> {country.currencies && country.currencies[currency].name} </h1>
        )
      })} */}
      {/* <div> Counter : 0</div>
      <button>Increment</button>
      <button>decrement</button> */}
    </div>
  )
}

export default App