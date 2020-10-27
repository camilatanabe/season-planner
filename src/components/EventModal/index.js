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
  DatePickerInput,
  ConfirmModalOverlay,
  ConfirmModalWrapper,
  ConfirmModalContainer,
  CloseIcon,
  DeleteIcon,
  ConfirmModalButtonContainer,
  ConfirmCancelButton,
  ConfirmDeleteButton,
  ConfirmCancelButtonText,
  ConfirmDeleteButtonText
} from './styles.js'

const EventModal = ({ isOpen, hide, event, editEvent, deleteEvent }) => {
  const [id, setId] = useState(1)
  const [isConfimModalOpen, setIsConfirmModalOpen] = useState(false)

  useEffect(() => {
    resetEventTitle()
    resetFromDate()
    resetToDate()
    resetEventDescription()
    resetEventColor()
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

  const {
    value: eventColor,
    bind: bindEventColor,
    reset: resetEventColor
  } = useInput(editEvent.event_id ? editEvent.event_color : '#00ff00')

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
      resetEventColor()
      hide()

      return event({
        event_id: id,
        event_name: eventTitle,
        from_date: fromDate,
        to_date: toDate,
        event_description: eventDescription,
        event_color: eventColor
      })
    }
    if (editEvent.event_id) {
      hide()

      return event({
        event_id: editEvent.event_id,
        event_name: eventTitle,
        from_date: fromDate,
        to_date: toDate,
        event_description: eventDescription,
        event_color: eventColor
      })
    }
  }

  const onClickCloseConfirmModal = () => {
    setIsConfirmModalOpen(!isConfimModalOpen)
  }

  const onClickConfirmDelete = eventId => {
    deleteEvent(eventId)
    setIsConfirmModalOpen(!isConfimModalOpen)
  }

  return isOpen
    ? ReactDOM.createPortal(
        <React.Fragment>
          <Overlay />
          <ModalWrapper>
            <ModalContainer>
              <ModalHeader>
                {editEvent.event_id && (
                  <DeleteButton
                    onClick={() => setIsConfirmModalOpen(!isConfimModalOpen)}
                  >
                    <DeleteIcon size="26" />
                  </DeleteButton>
                )}
                <CloseButton onClick={hide}>
                  <CloseIcon size="26" />
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
                <label>
                  Select a color to event{' '}
                  <input type="color" {...bindEventColor} />
                </label>
                <br></br>
                <input type="submit" value="Save" />
              </form>
            </ModalContainer>
          </ModalWrapper>
          {isConfimModalOpen && (
            <React.Fragment>
              <ConfirmModalOverlay />
              <ConfirmModalWrapper>
                <ConfirmModalContainer>
                  <p>Are you sure?</p>
                  <ConfirmModalButtonContainer>
                    <ConfirmCancelButton onClick={onClickCloseConfirmModal}>
                      <ConfirmCancelButtonText>Cancel</ConfirmCancelButtonText>
                    </ConfirmCancelButton>
                    <ConfirmDeleteButton
                      onClick={() => onClickConfirmDelete(editEvent.event_id)}
                    >
                      <ConfirmDeleteButtonText>Delete</ConfirmDeleteButtonText>
                    </ConfirmDeleteButton>
                  </ConfirmModalButtonContainer>
                </ConfirmModalContainer>
              </ConfirmModalWrapper>
            </React.Fragment>
          )}
        </React.Fragment>,
        document.body
      )
    : null
}
export default EventModal
