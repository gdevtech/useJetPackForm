import React from "react";
import { ErrorInput, InputBase } from './input.style';

const Input = React.forwardRef(
  ({ placeholder, labelValue, className, error, name, idName, exampleText, ...rest }, ref) => {
    return (
      <InputBase error={error}>
        <label htmlFor={idName}>{labelValue}</label>
        {exampleText ? <span>{exampleText}</span> : null}
        <input
          {...rest}
          ref={ref}
          className={className}
          name={name}
          placeholder={placeholder}
          id={idName}
        />
        {error && <ErrorInput>{error}</ErrorInput>}
      </InputBase>
    );
  }
);

export default Input;