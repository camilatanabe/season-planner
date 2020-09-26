import styled from 'styled-components'

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

export const ModalWrapper = styled.div`
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

export const ModalContainer = styled.div`
  z-index: 100;
  background: white;
  position: relative;
  margin: 1.75rem auto;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
`

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const CloseButton = styled.button`
  font-size: 0.9rem;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  padding: 0.3rem 1rem;
  margin-left: 0.5rem;
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
