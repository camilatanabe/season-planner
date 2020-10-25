import styled, { createGlobalStyle } from 'styled-components'

export const CalendarGlobalStyle = createGlobalStyle`
*{box-sizing: border-box;}
`

export const CalendarContainer = styled.div`
  display: block;
  position: relative;
  width: 90%;
  background: white;
  border: 1px solid lightgray;
  height: auto;
  margin: 0 auto;
`

export const CalendarHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 1.75em 0;
  border-bottom: 1px solid lightgray;
  background: white;
  justify-content: space-around;
`

export const CalendarMonthName = styled.span`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 115%;
`

export const CalendarWeekDaysRow = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  color: gray;
  font-size: 70%;
  padding: 0.75em 0;
  border-bottom: 1px solid lightgray;
  margin: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const CalendarWeekDaysColumn = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
`

export const CalendarDaysRow = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  border-bottom: 1px solid lightgray;
  &:last-child {
    border-bottom: none;
  }
`

export const CalendarDaysColumn = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  flex-grow: 0;
  flex-basis: calc(100% / 7);
  width: calc(100% / 7);
  position: relative;
  height: 6em;
  border-right: 1px solid lightgray;
  overflow: hidden;
  cursor: pointer;
  background: white;
  transition: 0.25s ease-out;
  color: ${props => (props.disabled ? 'lightgray' : '')};
  pointer-events: ${props => (props.disabled ? 'none' : '')};
  border-left: ${props => (props.selected ? '10px solid transparent' : '')};
  border-image: ${props =>
    props.selected ? 'linear-gradient(45deg, #1affa0 0%, #cff153 40%)' : ''};
  border-image-slice: ${props => (props.selected ? 1 : '')};
  &:last-child {
    border-right: none;
  }
  &:hover {
    background: whitesmoke;
    transition: 0.5s ease-out;
  }
`

export const CalendarBody = styled.div`
  font-family: 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
  position: relative;
  box-sizing: border-box;
`

export const NumberCell = styled.span`
  position: absolute;
  font-size: 82.5%;
  line-height: 1;
  top: 0.75em;
  right: 0.75em;
  font-weight: 700;
  visibility: ${props => (props.selected ? 'hidden' : '')};
  &:hover {
    visibility: hidden;
  }
`

export const BgCell = styled.span`
  font-weight: 700;
  line-height: 1;
  color: #1affa0;
  opacity: ${props => (props.selected ? '0.2' : '0')};
  font-size: 5em;
  position: absolute;
  top: -0.2em;
  right: -0.05em;
  transition: ${props => (props.selected ? '0.5s ease-in' : '0.25s ease-out')};
  letter-spacing: -0.07em;
  &:hover {
    opacity: 0.2;
    transition: 0.5s ease-in;
  }
`

export const Events = styled.div`
  position: absolute;
  width: 100%;
  background-color: green;
  padding: 0.1em;
  top: ${props => props.top}em;
`
