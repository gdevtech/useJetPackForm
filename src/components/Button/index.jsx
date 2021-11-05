import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from './button.style';

export const Button = props => {
  const {
    children,
    variant,
    size,
    textAlign,
    disabled,
    fullWidth,
    hasIcon,
    ...other
  } = props;
  return (
    <ButtonBase
      variant={variant}
      disabled={disabled ? true : false}
      size={size}
      fullWidth={fullWidth}
      textAlign={textAlign}
      hasIcon={hasIcon}
      {...other}
    >
      {children}
    </ButtonBase>
  );
};