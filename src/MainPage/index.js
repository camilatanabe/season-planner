import React, { useState } from 'react'
import Calendar from '../components/Calendar'
import * as dateFns from 'date-fns'
import { Container, Drawer, Day, Month } from './styles'

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const formattedDay = dateFns.format(selectedDate, 'dd')
  const formattedMonth = dateFns.format(selectedDate, 'MMMM')

  const openDaySchedule = day => {
    setSelectedDate(day)
    setIsOpenDrawer(true)
    return console.log('aqui: ', day)
  }

  const ScheduleDrawer = () => {
    return (
      <Drawer>
        <Day>{formattedDay}</Day>
        <Month>{formattedMonth}</Month>
      </Drawer>
    )
  }

  return (
    <Container>
      <Calendar selectedDate={selectedDate} daySchedule={openDaySchedule} />
      {isOpenDrawer && ScheduleDrawer()}
    </Container>
  )
}

export default MainPage
