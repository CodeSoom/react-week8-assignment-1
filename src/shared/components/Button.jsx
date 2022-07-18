/* eslint-disable react/button-has-type */

import React from 'react';

import styled from '@emotion/styled';

function Button({
  type = 'button', active, children, onClick,
}) {
  return (
    <ButtonWrapper type={type} onClick={onClick}>
      {children}
      {active && '(V)'}
    </ButtonWrapper>
  );
}

export default React.memo(Button);

const ButtonWrapper = styled.button`
    display: inline-block;
    padding: 0.4em 0.6em;
    background: #f2f2f2;
    border: none;
    border-radius: 4px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #333;
`;
