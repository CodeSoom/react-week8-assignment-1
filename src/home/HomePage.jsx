import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

export default function HomePage() {
  return (
    <Wrapper>
      <h2>Home</h2>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/login">Log in</Link></li>
        <li><Link to="/restaurants">Restaurants</Link></li>
        <li><Link to="/xxx">멸망의 길</Link></li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h2 {
    margin-bottom: 1.2rem;
  }

  li {
    &:not(:last-of-type) {
      padding-bottom: 0.5rem;
    }

    &:before {
      content: '';
      display: inline-block;
      width: 0.4em;
      height: 0.4em;
      margin-right: 0.8em;
      background: tomato;
      border-radius: 50%;
    }
  }
`;
