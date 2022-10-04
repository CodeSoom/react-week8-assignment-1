import { Link, useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import Nav from './Nav';

const Container = styled.header({
  position: 'fixed',
  zIndex: 100,
  top: 0,
  left: 0,
  borderBottom: '1px solid #DBDBDB',
  width: '100%',
  minHeight: '3.5em',
  backgroundColor: '#FFF',

  '& h1': {
    margin: 0,
    padding: '1em .5em',
    fontSize: '1.7em',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  '& a': {
    color: '#555',
    textDecoration: 'none',

    '&:hover': {
      color: '#000',
    },
  },
});

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  margin: '0 auto',
  width: '90%',
  maxWidth: '1200px',
});

export default function Header() {
  const history = useHistory();

  function handleClick(path) {
    history.push(path);
  }

  return (
    <Container>
      <Wrapper>
        <h1>
          <Link to="/">
            <FontAwesomeIcon icon={solid('utensils')} />
            {' '}
            EatGo
          </Link>
        </h1>
        <Nav onClick={handleClick} />
      </Wrapper>
    </Container>
  );
}
