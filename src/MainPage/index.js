import React, { useState } from 'react'
import Calendar from '../components/Calendar'
import * as dateFns from 'date-fns'
import { Container, Header, Drawer, Day, Month, AddButton } from './styles'
import { Add } from '@styled-icons/material'

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const formattedDay = dateFns.format(selectedDate, 'dd')
  const formattedMonth = dateFns.format(selectedDate, 'MMMM')

  const openDaySchedule = day => {
    setSelectedDate(day)
    setIsOpenDrawer(true)
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
    <div>
      <Header>
        <AddButton>
          <Add size="26" />
        </AddButton>
      </Header>
      <Container>
        <Calendar selectedDate={selectedDate} daySchedule={openDaySchedule} />
        {isOpenDrawer && ScheduleDrawer()}
      </Container>
    </div>
  )
}

export default MainPage
