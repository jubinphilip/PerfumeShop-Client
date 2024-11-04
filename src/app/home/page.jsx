import React from 'react'
import Hero from '../components/Hero/Hero'
import Perfumes from '../components/Perfumes/perfumes'
import Filters from '../components/Filters/filters'
import './home.css'

function Home() {
  return (
    <div>
        <Hero/>
        <div className='collections'>
            <Filters/>
           <Perfumes/>
        </div>
    </div>
  )
}

export default Home
