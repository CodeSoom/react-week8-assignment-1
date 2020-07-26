import React from 'react';

import styled from '@emotion/styled';

import LoginFormContainer from './LoginFormContainer';

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

const LoginPage = React.memo(() => (
  <div>
    <List>
      <Item><h2>Log In</h2></Item>
      <Item><LoginFormContainer /></Item>
    </List>
  </div>
));

export default LoginPage;
