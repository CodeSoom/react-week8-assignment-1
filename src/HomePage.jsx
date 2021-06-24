import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div({
  fontFamily: '\'Dancing Script\', cursive', // 전역 body에서 왜 안먹는건지 잘 모르겠습니다.
  '& h2': {
    fontSize: '40px',
    margin: '20px 0 15px 0',
  },
  '& ul': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    li: {
      a: {
        display: 'block',
        padding: '10px 0',
        fontSize: '25px',
        color: '#555',
        '&:hover': {
          color: 'crimson',
          transform: 'scale(1.1)',
        },
      },
    },
  },
});

export default function HomePage() {
  return (
    <Container>
      <h2>Home Page</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/xxx">Not Found</Link></li>
      </ul>
    </Container>
  );
}
