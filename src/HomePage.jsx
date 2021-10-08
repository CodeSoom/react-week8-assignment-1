import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export default function HomePage() {
  return (
    <div>
      <Title>Home</Title>
      <Ul>
        <Li><Link to="/about">About</Link></Li>
        <Li><Link to="/login">Log in</Link></Li>
        <Li><Link to="/restaurants">Restaurants</Link></Li>
        <Li><Link to="/xxx">멸망의 길</Link></Li>
      </Ul>
    </div>
  );
}

const Title = styled.h2`
  font-size: 2em;
  text-align: center;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-top: 2em;
`;

const Li = styled.li`
  padding: 1em;

  &:hover {
    color: white;
    background-color: black;
  }
`;
