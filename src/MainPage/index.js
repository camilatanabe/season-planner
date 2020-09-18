import React, { useState } from 'react'
import Calendar from '../components/Calendar'
import { Container, Drawer } from './styles'

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const openDaySchedule = day => {
    setSelectedDate(day)
    setIsOpenDrawer(true)
    return console.log('aqui: ', day)
  }

  return (
    <Container>
      <Calendar selectedDate={selectedDate} daySchedule={openDaySchedule} />
      {isOpenDrawer && <Drawer />}
    </Container>
  )
}

export default MainPage
