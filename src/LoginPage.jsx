import { css } from '@emotion/css';
import { Card } from 'react-bootstrap';
import LoginFormContainer from './LoginFormContainer';

export default function LoginPage() {
  return (
    <Card className={css`
      max-width: 1024px;
      margin: 20px auto;
    `}
    >
      <Card.Header>
        <Card.Title>
          <h2>Log In</h2>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <LoginFormContainer />
      </Card.Body>
    </Card>
  );
}
