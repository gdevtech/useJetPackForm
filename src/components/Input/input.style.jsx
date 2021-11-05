import styled from "styled-components";
import { color, font } from '../../styles/default';

export const InputBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  span {
    font-family: ${font.primary};
    font-size: 13px;
    color: ${color.darkDarkGrey};
    text-align:center;
  }
  label {
    font-size: 2rem;
    font-family: ${font.primary};
    color: ${color.lightBlack};
  }
  input {
    border: 2px solid ${props => props.error ? color.notificationRed : color.green};
    color: ${color.darkDarkGrey};
    font-family: ${font.primary};
    box-sizing: border-box;
    font-size: 16px;
    height: 20px;
    padding: 19px;
    width: 100%;
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
    }
  }
  
`;

export const ErrorInput = styled.div`
  position: relative;
  top: -6px;
  text-align: center;
  font-family: ${font.primary};
  color: ${color.notificationRed};
`;