import React, { useState } from 'react'
import Title from '../../components/Title'

const AddRoom = () => {

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  })
  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'WiFi': false,
      'Free Breakfast': false,
      'Air Conditioning': false,
      'Pool Access': false,
      'Mini Bar': false,
      'Room Service': false,
    }
  })

  return (
    <div>
      <Title align='left' font='outfit' title='Add New Room' subTitle='Fill in the details to enhance your room listing' />
    </div>
  )
}

export default AddRoom
