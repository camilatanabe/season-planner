import React, { useState } from 'react'
import Calendar from '../components/Calendar'
import EventModal from '../components/EventModal'
import * as dateFns from 'date-fns'
import {
  Container,
  Header,
  Drawer,
  Day,
  Month,
  AddButton,
  EventsContainer,
  EventCard,
  EventText
} from './styles'
import { Add } from '@styled-icons/material'

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isEventModalOpen, setIsEventModalOpen] = useState(false)
  const [events, setEvents] = useState([])
  const [editEvent, setEditEvent] = useState({})
  const formattedDay = dateFns.format(selectedDate, 'dd')
  const formattedMonth = dateFns.format(selectedDate, 'MMMM')

  const openDaySchedule = day => {
    setSelectedDate(day)
    setIsDrawerOpen(true)
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
        <EventsContainer>
          {eventsDay.length > 0 &&
            eventsDay.map((event, index) => (
              <EventCard
                key={index}
                onClick={() => onClickEditEvent(event.id)}
                color={event.color}
              >
                <EventText>{event.title}</EventText>
              </EventCard>
            ))}
        </EventsContainer>
      </Drawer>
    )
  }

  const onClickOpenEventModal = () => {
    setIsEventModalOpen(!isEventModalOpen)
    setEditEvent({})
  }

  const onClickEditEvent = eventId => {
    setIsEventModalOpen(!isEventModalOpen)
    const foundIndex = events.find(x => x.id === eventId)
    setEditEvent(foundIndex)
  }

  const onClickDeleteEvent = eventId => {
    const newEventsArray = events.filter(x => x.id !== eventId)
    setIsEventModalOpen(!isEventModalOpen)

    return setEvents(newEventsArray)
  }

  const onSubmitEvent = eventData => {
    const foundIndex = events.findIndex(x => x.id === eventData.id)

    if (foundIndex > -1) {
      return (events[foundIndex] = eventData)
    } else {
      return setEvents([...events, eventData])
    }
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
          editEvent={editEvent}
          deleteEvent={onClickDeleteEvent}
        />
      </Header>
      <Container>
        <Calendar
          selectedDate={selectedDate}
          daySchedule={openDaySchedule}
          events={events}
        />
        {isDrawerOpen && ScheduleDrawer()}
      </Container>
    </div>
  )
}

export default MainPage
