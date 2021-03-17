import React from 'react';

import styled from '@emotion/styled';

const LogoutContainer = styled.div({
  width: '500px',
  margin: '0 auto',
  padding: '30px 20px',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  boxShadow: '0px 0px 5px white',
  borderRadius: '5px',
});

const LogoutButton = styled.button({
  display: 'block',
  margin: '0 auto',
  backgroundColor: 'rgba(230, 218, 212, 0.8)',
  padding: '5px 50px',
  borderRadius: '5px',
  fontWeight: '600',
  color: '#F9FDFC',
  fontSize: '30px',
  fontFamily: "'Tillana', cursive",
  border: '5px solid rgba(214, 200, 200, 0.5)',
  cursor: 'pointer',
  '&:hover': {
    color: '#5B4230',
  },
  '&:focus': {
    outline: '2px solid #5B4230',
  },
});

export default function LogoutForm({ onClick }) {
  return (
    <LogoutContainer>
      <LogoutButton
        type="button"
        onClick={onClick}
      >
        Log out
      </LogoutButton>
    </LogoutContainer>
  );
}
