import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {
  Overlay,
  ModalWrapper,
  ModalContainer,
  ModalHeader,
  CloseButton,
  Input
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

  const handleSubmit = evt => {
    evt.preventDefault()
    resetEventName()
    console.log('eventName: ', eventName)
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
