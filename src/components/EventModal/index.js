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

const EventModal = ({ isOpen, hide, event }) => {
  const [id, setId] = useState(1)
  const useInput = initialValue => {
    const [value, setValue] = useState(initialValue)

    return {
      value,
      setValue,
      reset: () => setValue(initialValue),
      bind: {
        value,
        onChange: event => {
          setValue(event.target.value)
        }
      }
    }
  }

  const {
    value: eventTitle,
    bind: bindEventTitle,
    reset: resetEventTitle
  } = useInput('')

  const {
    value: fromDate,
    bind: bindFromDate,
    reset: resetFromDate
  } = useInput('')

  const { value: toDate, bind: bindToDate, reset: resetToDate } = useInput('')

  const {
    value: eventDescription,
    bind: bindEventDescription,
    reset: resetEventDescription
  } = useInput('')

  const isValid = () => {
    if (!eventTitle) {
      return false
    }
    if (!fromDate) {
      return false
    }
    if (!toDate) {
      return false
    }
    if (!eventDescription) {
      return false
    }
    return true
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    if (isValid()) {
      setId(id + 1)
      resetEventTitle()
      resetFromDate()
      resetToDate()
      resetEventDescription()
      hide()

      return event({
        event_id: id,
        event_name: eventTitle,
        from_date: fromDate,
        to_date: toDate,
        event_description: eventDescription
      })
    }
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
                  Event Title:
                  <Input {...bindEventTitle} />
                </label>
                <label>
                  From:
                  <DatePickerInput {...bindFromDate} />
                </label>
                <label>
                  To:
                  <DatePickerInput {...bindToDate} min={fromDate} />
                </label>
                <label>
                  Event Description:
                  <Input {...bindEventDescription} />
                </label>
                <input type="submit" value="Save" />
              </form>
            </ModalContainer>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null
}
export default EventModal
