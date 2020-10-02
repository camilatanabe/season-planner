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
  const [events, setEvents] = useState([])
  const formattedDay = dateFns.format(selectedDate, 'dd')
  const formattedMonth = dateFns.format(selectedDate, 'MMMM')

  const openDaySchedule = day => {
    setSelectedDate(day)
    setIsOpenDrawer(true)
  }

  const ScheduleDrawer = () => {
    const eventsDay = []
    events
      .filter(
        event =>
          dateFns.format(selectedDate, 'yyyy-MM-dd') >= event.from_date &&
          dateFns.format(selectedDate, 'yyyy-MM-dd') <= event.to_date
      )
      .map(event => {
        return eventsDay.push(event)
      })

    return (
      <Drawer>
        <Day>{formattedDay}</Day>
        <Month>{formattedMonth}</Month>
        {eventsDay.length > 0 &&
          eventsDay.map((event, index) => (
            <div key={index}>{event.event_name}</div>
          ))}
      </Drawer>
    )
  }

  const onClickOpenEventModal = () => {
    setIsEventModalOpen(!isEventModalOpen)
  }

  const onSubmitEvent = eventData => {
    setEvents([...events, eventData])
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
