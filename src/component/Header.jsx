import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Gnb from './Gnb';

export default function Header() {
  return (
    <HeaderSet>
      <div>
        <h1>
          <Link to="/">Eat Go</Link>
        </h1>
        <Gnb />
      </div>
    </HeaderSet>
  );
}

const HeaderSet = styled.header`
  border-bottom: 1px solid #eee;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 60px;
    margin: 0 auto;
    h1 {
      margin: 0;
      font-size: 32px;
    }
  }
`;
