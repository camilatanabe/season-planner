import React, { useState } from 'react'
import Calendar from '../components/Calendar'

const MainPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  const openDaySchedule = day => {
    setSelectedDate(day)
    return console.log('aqui: ', day)
  }
  return <Calendar selectedDate={selectedDate} daySchedule={openDaySchedule} />
}

export default MainPage
