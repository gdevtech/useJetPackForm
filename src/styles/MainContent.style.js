import styled from 'styled-components';
import { breakpoint, color } from './default';

export const MainContent = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column-reverse;
  a {
    color: ${color.lightGrey};
    text-decoration: none;
    :hover {
      color: ${color.lightBlack};
    }
  }
  aside {
    height: 100vh;
    width: 100%;
    padding: 2em;
    background-color: ${color.green};
    box-shadow: -2px -1px 18px 2px rgb(0 0 0 / 41%);
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    flex-direction: row;
    aside {
      width: 60%
    }
  }
`