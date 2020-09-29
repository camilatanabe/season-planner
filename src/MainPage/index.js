import React, { useState } from 'react'
import Calendar from '../components/Calendar'
import EventModal from '../components/EventModal'
import * as dateFns from 'date-fns'
import { Container, Header, Drawer, Day, Month, AddButton } from './styles'
import { Add } from '@styled-icons/material'

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const [isEventModalOpen, setIsEventModalOpen] = useState(false)
  const [event, setEvent] = useState({})
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
        <div>{event.event_name}</div>
      </Drawer>
    )
  }

  const onClickOpenEventModal = () => {
    setIsEventModalOpen(!isEventModalOpen)
  }

  const onSubmitEvent = eventData => {
    setEvent(eventData)
  }

  return (
    <div>
      <Header>
        <AddButton onClick={onClickOpenEventModal}>
          <Add size="26" />
        </AddButton>
        <EventModal
          isOpen={isEventModalOpen}
          hide={onClickOpenEventModal}
          event={onSubmitEvent}
        />
      </Header>
      <Container>
        <Calendar selectedDate={selectedDate} daySchedule={openDaySchedule} />
        {isOpenDrawer && ScheduleDrawer()}
      </Container>
    </div>
  )
}

export default MainPage
