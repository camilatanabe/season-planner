import styled from 'styled-components'
import { Close, Delete } from '@styled-icons/material'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`

export const ConfirmModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1060;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`

export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

export const ConfirmModalWrapper = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1070;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`

export const ModalContainer = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`

export const ConfirmModalContainer = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  width: 300px;
  padding: 2rem;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 5px;
  outline: none;
  &:hover {
    background-color: #efefef;
  }
`

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 5px;
  outline: none;
  &:hover {
    background-color: #efefef;
  }
`

export const Input = styled.input.attrs({
  type: 'text'
})`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid;
  outline: none;
`

export const DatePickerInput = styled.input.attrs({
  type: 'date'
})`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid;
  outline: none;
`

export const CloseIcon = styled(Close)`
  && {
    color: #9e9e9e;
  }
`

export const DeleteIcon = styled(Delete)`
  && {
    color: #9e9e9e;
  }
`

export const ConfirmModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ConfirmCancelButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  background-color: #ffffff;
  border-color: #f0f0f0;
  cursor: pointer;
`

export const ConfirmDeleteButton = styled.button`
  padding: 10px;
  background-color: #ff0000;
  cursor: pointer;
  border: none;
`

export const ConfirmCancelButtonText = styled.p`
  font-weight: bold;
  color: #909090;
  margin: 0px;
  border-radius: 5px;
`

export const ConfirmDeleteButtonText = styled.p`
  font-weight: bold;
  color: #ffffff;
  margin: 0px;
  border-radius: 5px;
`
