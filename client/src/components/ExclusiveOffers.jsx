import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 w-full'>
        <Title align='left' title='Exclusive Ofers' subTitle='Take advantage of pur limited-time offers and special packages to enhance your stat and
        create unforgettable memories.' />
        <button>
            View All Offers
            <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-1 transition-all' />
        </button>
      </div>

      <div>

      </div>
    </div>
  )
}

export default ExclusiveOffers
