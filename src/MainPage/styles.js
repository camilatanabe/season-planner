import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 5%;
`

export const Header = styled.div`
  display: flex;
  padding: 2em;
  justify-content: flex-end;
`

export const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
  padding-left: 3em;
  margin-left: 5%;
`

export const Day = styled.p`
  font-size: 3em;
  margin: 0;
`

export const Month = styled.p`
  font-size: 1.5em;
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

export const EventsContainer = styled.div`
  width: 100%;
  height: 25em;
  overflow: auto;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #9e9e9e;
  }
`

export const EventCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 4em;
  padding-left: 10px;
  cursor: pointer;
  border-left: 0.3em solid ${props => props.color};
  margin-bottom: 3em;
`

export const EventText = styled.p`
  margin: 0;
  font-size: 1.1em;
`
