import styled from 'styled-components';
import { breakpoint } from './default';

export const SectionCenter = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: ${({align}) => align === "top" ? "flex-start" : "center"};
  flex-direction: column;
  background-image: url(https://cdn.sanity.io/images/0p0c88r6/production/531cb3ed84278f156fc1ed50957eee62c434263d-380x437.png);
  background-position: 115% 105%;
  background-size: 65%;
  background-repeat: no-repeat;
  h1 {
    text-align: center;
  }
  width: 100%;
  article {
    width: 100%;
    max-width:500px;
    margin: 0 auto;
  }
  @media screen and (min-width: ${breakpoint.tablet}) {
    background-size: auto;
  }
`