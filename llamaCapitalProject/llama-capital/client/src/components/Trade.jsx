import React, { useEffect,useState } from 'react'
import CoinSlider from './CoinSlider'
import CoinInfo from './CoinInfo'
import Main from '../views/Main'
import CreateUser from '../views/CreateUser'
import Currency from '../views/Currency'


const Trade = () => {
  return (
    <div>
        <CoinSlider />
        <CreateUser />
    </div>
  )
}

export default Trade