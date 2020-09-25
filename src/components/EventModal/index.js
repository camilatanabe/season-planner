import React from 'react'
import ReactDOM from 'react-dom'
import {
  Overlay,
  ModalWrapper,
  ModalContainer,
  ModalHeader,
  CloseButton
} from './styles.js'
import { Close } from '@styled-icons/material'

const EventModal = ({ isOpen, hide }) =>
  isOpen
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
              <p>Hello</p>
            </ModalContainer>
          </ModalWrapper>
        </React.Fragment>,
        document.body
      )
    : null

export default EventModal
