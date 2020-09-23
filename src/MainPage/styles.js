import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5%;
`

export const Header = styled.div`
  display: flex;
  padding: 30px;
  justify-content: flex-end;
`

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  padding-left: 40px;
  margin-left: 5%;
`

export const Day = styled.p`
  font-size: 26px;
`

export const Month = styled.p`
  font-size: 20px;
  margin: 0;
`

export const AddButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 5px;
  outline: none;
  &:hover {
    background-color: #000000;
    opacity: 0.2;
  }
`
