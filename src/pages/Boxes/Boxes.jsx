import React from 'react'
import Card from '../../components/Card/Card'

const Boxes = () => {
  return (
    <div className='mb-[48px]' id='boxes'>
      <div className='my-[26px] mx-[24px]'>
        <h1 className='font-bold text-[32px] text-primary-text'>Boxes</h1>
      </div>
      <div className="flex flex-wrap gap-5 mx-[24px]">
        <Card/>
        <Card/>
        <Card/>
      </div>
    </div>
  )
}

export default Boxes