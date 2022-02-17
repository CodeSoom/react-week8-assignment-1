import { Card, ListGroup, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

export default function HomePage() {
  return (
    <Card className={css`
      max-width: 1024px;
      margin: 20px auto;
    `}
    >
      <Card.Header>
        <Card.Title>
          <h2>Home</h2>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Nav>
          <ListGroup className={css`
            width: 100%;
          `}
          >
            <NavigationItem to="/about" name="About" />
            <NavigationItem to="/login" name="Log in" />
            <NavigationItem to="/restaurants" name="Restaurants" />
            <NavigationItem to="/xxx" name="멸망의 길" />
          </ListGroup>
        </Nav>
      </Card.Body>
    </Card>
  );
}

const NavigationItem = ({ to, name }) => (
  <ListGroup.Item action>
    <Nav.Item>
      <Link
        to={to}
        className={css`
          display: block;
          width: 100%;
        `}
      >
        {name}
      </Link>
    </Nav.Item>
  </ListGroup.Item>
);
