import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div>
      <div>
        <Title align='left' title='Exclusive Ofers' subTitle='Take advantage of pur limited-time offers and special packages to enhance your stat and
        create unforgettable memories.' />
        <button>
            View All Offers
            <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-1 transition-all' />
        </button>
      </div>
    </div>
  )
}

export default ExclusiveOffers
