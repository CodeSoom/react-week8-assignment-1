import React from 'react';

import LoginArticle from './LoginArticle';
import LoginButton from './LoginButton';

const LogoutForm = React.memo(({ onClick }) => (
  <LoginArticle>
    <div>
      <LoginButton
        type="button"
        onClick={onClick}
      >
        Log out
      </LoginButton>
    </div>
  </LoginArticle>
));

export default LogoutForm;
