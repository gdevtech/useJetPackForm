import styled from 'styled-components';
import { color, font } from '../../styles/default';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  button {
    span {
      display: flex;
      svg {
        width: 20px;
      }
    }
  }
  #maritalStatus {
    text-align: center;
    span {
      font-size: 2rem;
      font-family: ${font.primary};
      color: ${color.lightBlack};
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li label{
        margin: 0 10px;
        font-size: 1.2rem;
        color: ${color.green};
      }
      input {
        cursor: pointer;
      }
    }
  }
  #datepicker {
    text-align: center;
    .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle {
      left: -35px!important;
    }
    span {
      font-size: 2rem;
      font-family: ${font.primary};
      color: ${color.lightBlack};
    }
    input {
      border: 2px solid ${props => props.error ? color.notificationRed : color.green};
      color: ${color.darkDarkGrey};
      font-family: ${font.primary};
      text-align: center;
      box-sizing: border-box;
      font-size: 16px;
      height: 20px;
      padding: 19px;
      width: 40%;
      margin: 6px 0;
      border-radius: 19px;
      &::placeholder {
        color: ${color.darkDarkGrey};
        font-family: ${font.primary};
      }
      &:focus {
        border-color: ${color.lightBlack};
      }
      &:hover {
        border-color: ${color.lightBlack};
        cursor: pointer;
      }
    }
    .react-datepicker__input-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;