import React from 'react'
import { Getstarted } from './components/view';
import "./App.css"
import CountryStateSelect from './CountryStateSelect';


const App = () => {
  return (
    <div className='App'>
      <div className='color__bg'>
        <Getstarted />
        {/* <CountryStateSelect/> */}
      </div>
    </div>
  )
}

export default App