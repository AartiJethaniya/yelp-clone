import React from 'react'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import AddRestaurants from '../components/AddRestaurants'

export const Home = () => {
  return (
    <div>
      <Header/>
      <AddRestaurants/>
      <RestaurantList/>
    </div>
  )
}

