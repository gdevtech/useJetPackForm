import styled from 'styled-components';
import { color, font, pxToRem, pxToEm, breakpoint } from '../../styles/default';

const ButtonBase = styled.button`
  ${props => (props.fullWidth ? 'width: 100%;' : null)}
  ${props => (props.fullWidth ? `text-align: ${props.textAlign};` : null)}
  font-family: ${font.secondary};
  font-size: ${props =>
  props.size === 'small'
    ? '12px'
    : props.size === 'large'
      ? '16px'
      : props.size === 'xLarge'
        ? '20px'
        : '14px'};
  padding: ${({variant}) => (variant === 'link' ? '0' : '4px 11px')};
  font-weight: ${({variant}) => variant === 'link' ? 'normal' : 'bold'};
  background-color: ${props =>
  props.variant === 'primary'
    ? color.blue
    : props.variant === 'link'
      ? 'transparent'
      : props.disabled
        ? color.darkGrey
        : 'transparent'};
  color: ${props => (props.variant === 'secondary' || props.variant === 'link' ? color.green : 'white')};

  border-radius: 19px;
  border: ${props =>
  props.variant === 'secondary'
    ? `1px solid transparent`
    : 'transparent'};
  transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
  &:hover {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
    background-color: ${props =>
  props.variant === 'secondary'
    ? color.green
    : props.disabled
      ? color.darkGrey
      : props.variant === 'link' ? 'transparent' : color.lightBlack};
    ${props =>
  props.variant === 'secondary' ? 'color:white' : color.lightBlack};
  }
`;

export default ButtonBase;