import React, { useState } from 'react'
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
  BgCell
} from './styles.js'
import { ChevronRight, ChevronLeft } from '@styled-icons/fa-solid'

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const nextMonth = () => {
    setCurrentDate(dateFns.addMonths(currentDate, 1))
  }
  const prevMonth = () => {
    setCurrentDate(dateFns.subMonths(currentDate, 1))
  }

  const onDateClick = day => {
    setSelectedDate(day)
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
        console.log('cloneDay: ', cloneDay)
        days.push(
          <CalendarDaysColumn
            disabled={isDisabled}
            selected={isSelected}
            key={day}
            onClick={() => onDateClick(dateFns.toDate(cloneDay))}
          >
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
  console.log('entra aqui')
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

export default Calendar
