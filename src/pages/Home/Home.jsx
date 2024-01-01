import React from 'react'
import Shops from './Shops/Shops'
import HomeBanner from '../../components/HomeBanner/HomeBanner'
import Offers from '../../components/Offers/Offers'

const Home = () => {
  return (
    <div className='max-w-[1536px] mx-auto px-6 mt-[124px]'>
        <HomeBanner/>
        <Shops/>
        <Offers/>
    </div>
  )
}

export default Home