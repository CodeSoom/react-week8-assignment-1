import React from 'react';

import LoginFormContainer from './LoginFormContainer';

import MenuTitle from './styles/MenuTitle';

export default function LoginPage() {
  return (
    <div>
      <MenuTitle>Log In</MenuTitle>
      <LoginFormContainer />
    </div>
  );
}
