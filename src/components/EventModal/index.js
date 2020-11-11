import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import {
  Overlay,
  ModalWrapper,
  ModalContainer,
  ModalHeader,
  ButtonContainer,
  SaveButton,
  CloseButton,
  DeleteButton,
  Input,
  DatePickerInput,
  ConfirmModalOverlay,
  ConfirmModalWrapper,
  ConfirmModalContainer,
  CloseIcon,
  DeleteIcon,
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
  } = useInput(editEvent.id ? editEvent.title : '')

  const {
    value: fromDate,
    bind: bindFromDate,
    reset: resetFromDate
  } = useInput(editEvent.id ? editEvent.from_date : '')

  const { value: toDate, bind: bindToDate, reset: resetToDate } = useInput(
    editEvent.id ? editEvent.to_date : ''
  )

  const {
    value: eventDescription,
    bind: bindEventDescription,
    reset: resetEventDescription
  } = useInput(editEvent.id ? editEvent.description : '')

  const {
    value: eventColor,
    bind: bindEventColor,
    reset: resetEventColor
  } = useInput(editEvent.id ? editEvent.color : '#82E0AA')

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
    if (!editEvent.id && isValid()) {
      setId(id + 1)
      resetEventTitle()
      resetFromDate()
      resetToDate()
      resetEventDescription()
      resetEventColor()
      hide()

      return event({
        id: id,
        title: eventTitle,
        from_date: fromDate,
        to_date: toDate,
        description: eventDescription,
        color: eventColor
      })
    }
    if (editEvent.id) {
      hide()

      return event({
        id: editEvent.id,
        title: eventTitle,
        from_date: fromDate,
        to_date: toDate,
        description: eventDescription,
        color: eventColor
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
                {editEvent.id && (
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
                <div>
                  <label>Event Title:</label>
                  <Input required {...bindEventTitle} />
                </div>
                <div>
                  <label>From:</label>
                  <DatePickerInput required {...bindFromDate} />
                </div>
                <div>
                  <label>To:</label>
                  <DatePickerInput required {...bindToDate} min={fromDate} />
                </div>
                <div>
                  <label>Event Description: </label>
                  <Input required {...bindEventDescription} />
                </div>
                <div>
                  <label>Select a color to event </label>
                  <input type="color" required {...bindEventColor} />
                </div>
                <br></br>
                <ButtonContainer>
                  <SaveButton type="submit" value="Save" />
                </ButtonContainer>
              </form>
            </ModalContainer>
          </ModalWrapper>
          {isConfimModalOpen && (
            <React.Fragment>
              <ConfirmModalOverlay />
              <ConfirmModalWrapper>
                <ConfirmModalContainer>
                  <p>Are you sure?</p>
                  <ButtonContainer>
                    <ConfirmCancelButton onClick={onClickCloseConfirmModal}>
                      <ConfirmCancelButtonText>Cancel</ConfirmCancelButtonText>
                    </ConfirmCancelButton>
                    <ConfirmDeleteButton
                      onClick={() => onClickConfirmDelete(editEvent.id)}
                    >
                      <ConfirmDeleteButtonText>Delete</ConfirmDeleteButtonText>
                    </ConfirmDeleteButton>
                  </ButtonContainer>
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
