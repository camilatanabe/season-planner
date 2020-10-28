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
  font-size: 3em;
  margin: 0;
`

export const Month = styled.p`
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 3em;
`

export const AddButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  padding: 5px;
  outline: none;
  &:hover {
    background-color: #efefef;
  }
`

export const EventCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding-left: 10px;
  cursor: pointer;
  border-left: 0.3em solid ${props => props.color};
  margin-bottom: 3em;
`

export const EventText = styled.p`
  margin: 0;
  font-size: 1.1em;
`
