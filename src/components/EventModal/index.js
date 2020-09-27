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

const EventModal = ({ isOpen, hide }) => {
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
  } = useInput(new Date())

  const { value: toDate, bind: bindToDate, reset: resetToDate } = useInput(
    new Date()
  )

  const handleSubmit = evt => {
    evt.preventDefault()
    resetEventName()
    resetFromDate()
    resetToDate()
    console.log('eventName: ', eventName)
    console.log('fromDate', fromDate)
    console.log('toDate', toDate)
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
