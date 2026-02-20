import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 w-full'>
        <Title align='left' title='Exclusive Ofers' subTitle='Take advantage of pur limited-time offers and special packages to enhance your stat and
        create unforgettable memories.' />
        <button className='group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12'>
            View All Offers
            <img src={assets.arrowIcon} alt="arrow-icon" className='group-hover:translate-x-1 transition-all' />
        </button>
      </div>

      <div>
        {exclusiveOffers.map((item) => (
            <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18
            rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage: `url(${item.image})`}}>
               <p className='px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full'>{item.priceOff}% OFF</p>
               <div>
                 <p>{item.title}</p>
                 <p>{item.description}</p>
                 <p>Expires{item.expiryDate}</p>
               </div>
               <button>
                View Offers
                <img className='invert group-hover:translate-x-1 transition-all' src={assets.arrowIcon} alt='arrow-icon' />
               </button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default ExclusiveOffers
