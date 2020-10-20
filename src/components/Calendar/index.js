import React, { useState } from 'react'
import PropTypes from 'prop-types'
import * as dateFns from 'date-fns'
import {
  CalendarGlobalStyle,
  CalendarContainer,
  CalendarHeaderContainer,
  CalendarMonthName,
  CalendarWeekDaysColumn,
  CalendarWeekDaysRow,
  CalendarDaysRow,
  CalendarDaysColumn,
  CalendarBody,
  NumberCell,
  BgCell,
  Events
} from './styles.js'
import { ChevronRight, ChevronLeft } from '@styled-icons/fa-solid'

const Calendar = ({ selectedDate, daySchedule, events }) => {
  const [currentDate, setCurrentDate] = useState(new Date())

  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1))
  }
  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate, 1))
  }

  const onDateClick = day => {
    daySchedule(day)
  }

  const header = () => {
    const dateFormat = 'MMMM yyyy'
    return (
      <CalendarHeaderContainer>
        <div onClick={prevMonth}>
          <ChevronLeft size="12" />
        </div>
        <CalendarMonthName>
          {dateFns.format(currentDate, dateFormat)}
        </CalendarMonthName>
        <div onClick={nextMonth}>
          <ChevronRight size="12" />
        </div>
      </CalendarHeaderContainer>
    )
  }

  const daysOfWeek = () => {
    const dateFormat = 'EEEE'
    const days = []
    const startDate = dateFns.startOfWeek(currentDate)
    for (let i = 0; i < 7; i++) {
      days.push(
        <CalendarWeekDaysColumn key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </CalendarWeekDaysColumn>
      )
    }
    return <CalendarWeekDaysRow>{days}</CalendarWeekDaysRow>
  }

  const cells = () => {
    const monthStart = dateFns.startOfMonth(currentDate)
    const monthEnd = dateFns.endOfMonth(monthStart)
    const startDate = dateFns.startOfWeek(monthStart)
    const endDate = dateFns.endOfWeek(monthEnd)
    const dateFormat = 'd'
    const rows = []
    let days = []
    let day = startDate
    let formattedDate = ''

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat)
        const cloneDay = day
        const isDisabled = !dateFns.isSameMonth(day, monthStart)
        const isSelected = dateFns.isSameDay(day, selectedDate)
        const dayEvents = events.filter(
          event =>
            dateFns.format(day, 'yyyy-MM-dd') >= event.from_date &&
            dateFns.format(day, 'yyyy-MM-dd') <= event.to_date
        )
        console.log('day events: ', dayEvents)

        days.push(
          <CalendarDaysColumn
            disabled={isDisabled}
            selected={isSelected}
            key={day}
            onClick={() => onDateClick(dateFns.toDate(cloneDay))}
          >
            {dayEvents.map((event, index) => {
              if (dateFns.format(day, 'yyyy-MM-dd') === event.from_date) {
                return <Events key={index}>{event.event_name}</Events>
              } else if (
                dateFns.format(day, 'yyyy-MM-dd') > event.from_date &&
                dateFns.format(day, 'yyyy-MM-dd') < event.to_date
              ) {
                return <Events key={index}>&nbsp;</Events>
              } else if (dateFns.format(day, 'yyyy-MM-dd') === event.to_date) {
                return <Events key={index}>&nbsp;</Events>
              }
            })}
            <NumberCell selected={isSelected}>{formattedDate}</NumberCell>
            <BgCell selected={isSelected}>{formattedDate}</BgCell>
          </CalendarDaysColumn>
        )
        day = dateFns.addDays(day, 1)
      }
      rows.push(<CalendarDaysRow key={day}>{days}</CalendarDaysRow>)
      days = []
    }
    return <CalendarBody>{rows}</CalendarBody>
  }

  return (
    <React.Fragment>
      <CalendarGlobalStyle />
      <CalendarContainer>
        <div>{header()}</div>
        <div>{daysOfWeek()}</div>
        <div>{cells()}</div>
      </CalendarContainer>
    </React.Fragment>
  )
}

Calendar.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  daySchedule: PropTypes.func,
  events: PropTypes.array
}

export default Calendar
