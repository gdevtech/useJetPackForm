import React, { useState } from 'react';
import styled from "styled-components";
import { ErrorInput } from '../Input/input.style';
import { color, font } from '../../styles/default';

const DropDownContainer = styled.div`
  >p {
    font-size: 2rem;
    font-family: ${font.primary};
    color: ${color.lightBlack};
  }
`;

const DropDownHeader = styled.div`
  position: relative;
  text-align: center;
  border: 2px solid ${props => props.error ? color.notificationRed : color.green};
  color: ${color.darkDarkGrey};
  font-family: ${font.primary};
  box-sizing: border-box;
  font-size: 16px;
  padding: 4px 15px 4px 0;
  width: 100%;
  margin: 6px 0;
  border-radius: 19px;
  cursor: pointer;
  :hover {
    background-color: ${color.lightBlack};
    color: white;
  }
  :after {
    content: '⬇';
    position: absolute;
    right: 5px;
    font-size: 1rem;
    top: 0;
    color: ${color.green};
  }
`;

const DropDownListContainer = styled.div`
  position: absolute;
`;

const DropDownList = styled.ul`
  min-width: 135px;
  font-family: ${font.primary};
  padding: 0;
  margin: 0;
  background-color: ${color.lightGrey};
  border: 2px solid transparent;
  box-shadow: -1px 5px 8px hsl(149deg 29% 56% / 50%);
  box-sizing: border-box;
  color: ${color.green};
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 15px;
`;

const ListItem = styled.li`
  list-style: none;
  padding: 0.3em 0.5em;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    background-color: ${color.green};
    color: white;
  }
`;

const SelectDropDown = React.forwardRef(({ items=[], idName='customdropdown', labelValue='', error, onChange}, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(items.length > 1 ? items[0].name : 'No Items Founds');

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (event) => {
    setSelectedOption(event.name);
    setIsOpen(false);
  };

  if(items.length < 1) {
    return(
        <p>No Items Found</p>
      )
  }

  return (
    <DropDownContainer ref={ref}>
      <p id={idName} role="label">{labelValue}</p>
      <DropDownHeader onClick={toggling} role="listbox" tabindex="0" id="listbox" aria-labelledby={idName}>
        {selectedOption}
      </DropDownHeader>
      {error && <ErrorInput>{error}</ErrorInput>}
      {(isOpen && items.length > 1) ? (
        <DropDownListContainer>
          <DropDownList>
            {items.map(option => (
              <ListItem onClick={() => {onChange(option); onOptionClicked(option)}} key={option.id} aria-selected={option.name.includes(selectedOption)}>
                {option.name}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      ) : null}
    </DropDownContainer>
  );
});

export default SelectDropDown;