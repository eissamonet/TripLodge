import React, { useState } from 'react'
import Title from '../../components/Title'
import { roomsDummyData } from '../../assets/assets'

const ListRoom = () => {

  const [rooms, setRooms] = useState(roomsDummyData)

  return (
    <div>
      <Title align='left' font='outfit' titel='Room listings' subTitle='View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best
      experience for users.' />
    </div>
  )
}

export default ListRoom
