import React, { useState } from 'react'

const AddRoom = () => {

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  })
  cont [inputs, setInputs] = useState({
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

    </div>
  )
}

export default AddRoom
