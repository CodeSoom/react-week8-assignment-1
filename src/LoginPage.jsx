import React from 'react';

import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

const Title = styled.h2({
  backgroundColor: '#32e0c4',
  color: '#393e46',
  fontSize: '2em',
  padding: '1em 1em',
});

const List = styled.ul({
  display: 'flex',
  marginTop: '5em',
  padding: 0,
  listStyle: 'none',
  justifyContent: 'center',
});

const Item = styled.li({
  marginRight: '1em',
});

export default function LoginPage() {
  return (
    <div>
      <List>
        <Item><h2>Log In</h2></Item>
        <Item><LoginFormContainer /></Item>
      </List>
    </div>
  );
}
