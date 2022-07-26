// import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export default function AppHeader() {
  return (
    <header>
      <h1>
        <Link to="/">마이 레스토랑</Link>
      </h1>
    </header>
  );
}
