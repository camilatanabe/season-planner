import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  Overlay,
  ModalWrapper,
  ModalContainer,
  ModalHeader,
  CloseButton,
  Input,
  DatePickerInput
} from './styles.js'
import { Close } from '@styled-icons/material'
import * as dateFns from 'date-fns'

const EventModal = ({ isOpen, hide, event }) => {
  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue)

    return {
      value,
      setValue,
      reset: () => setValue(''),
      bind: {
        value,
        onChange: event => {
          setValue(event.target.value)
        }
      }
    }
  }
  const {
    value: eventName,
    bind: bindEventName,
    reset: resetEventName
  } = useInput('')

  const {
    value: fromDate,
    bind: bindFromDate,
    reset: resetFromDate
  } = useInput(dateFns.format(new Date(), 'yyyy-MM-d'))

  const { value: toDate, bind: bindToDate, reset: resetToDate } = useInput(
    dateFns.format(new Date(), 'yyyy-MM-d')
  )

  const {
    value: eventDescription,
    bind: bindEventDescription,
    reset: resetEventDescription
  } = useInput('')

  const handleSubmit = evt => {
    evt.preventDefault()
    resetEventName()
    resetFromDate()
    resetToDate()
    resetEventDescription()

    return event({
      event_name: eventName,
      from_date: fromDate,
      to_date: toDate,
      event_description: eventDescription
    })
  }
  return isOpen
    ? ReactDOM.createPortal(
        <React.Fragment>
          <Overlay />
          <ModalWrapper>
            <ModalContainer>
              <ModalHeader>
                <CloseButton onClick={hide}>
                  <Close size="12" />
                </CloseButton>
              </ModalHeader>
              <form onSubmit={handleSubmit}>
                <label>
                  Event Name:
                  <Input {...bindEventName} />
                </label>
                <label>
                  From:
                  <DatePickerInput {...bindFromDate} />
                </label>
                <label>
                  To:
                  <DatePickerInput {...bindToDate} />
                </label>
                <label>
                  Event Description:
                  <Input {...bindEventDescription} />
                </label>
                <input type="submit" value="Submit" />
              </form>
            </ModalContainer>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null
}
export default EventModal
