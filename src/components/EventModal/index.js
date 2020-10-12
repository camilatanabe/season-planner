import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  Overlay,
  ModalWrapper,
  ModalContainer,
  ModalHeader,
  CloseButton,
  DeleteButton,
  Input,
  DatePickerInput
} from './styles.js'
import { Close, Delete } from '@styled-icons/material'

const EventModal = ({ isOpen, hide, event, editEvent, deleteEvent }) => {
  const [id, setId] = useState(1)

  useEffect(() => {
    resetEventTitle()
    resetFromDate()
    resetToDate()
    resetEventDescription()
  }, [isOpen])

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
  } = useInput(editEvent.event_id ? editEvent.event_name : '')

  const {
    value: fromDate,
    bind: bindFromDate,
    reset: resetFromDate
  } = useInput(editEvent.event_id ? editEvent.from_date : '')

  const { value: toDate, bind: bindToDate, reset: resetToDate } = useInput(
    editEvent.event_id ? editEvent.to_date : ''
  )

  const {
    value: eventDescription,
    bind: bindEventDescription,
    reset: resetEventDescription
  } = useInput(editEvent.event_id ? editEvent.event_description : '')

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
    if (!editEvent.event_id && isValid()) {
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
    if (editEvent.event_id) {
      hide()

      return event({
        event_id: editEvent.event_id,
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
                {editEvent.event_id && (
                  <DeleteButton onClick={() => deleteEvent(editEvent.event_id)}>
                    <Delete size="26" />
                  </DeleteButton>
                )}
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
