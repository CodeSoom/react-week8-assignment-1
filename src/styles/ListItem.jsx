import styled from '@emotion/styled';

import MediaQuery from './MediaQuery';

const DefaultItems = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    background: active ? '#EEE' : 'transparent',
    color: '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
}));

const LinkItem = styled.li({
  width: '25%',
  backgroundColor: 'gold',
  '&:hover': {
    width: '35%',
    backgroundColor: 'crimson',
  },
  '& a': {
    display: 'block',
    padding: '1em',
    fontSize: '1.2rem',
    color: '#555',
    textDecoration: 'none',
    textAlign: 'center',
    '&:hover': {
      color: 'white',
    },
  },
  transition: '0.5s',
});


const CardItem = styled.li({
  boxSizing: 'border-box',
  marginBottom: '2rem',
  dispaly: 'flex',
  flexDirection: 'column',
  [MediaQuery[0]]: {
    padding: '0 1rem',
    width: '50%',
  },
  [MediaQuery[1]]: {
    width: '33.3333%',
  },
});

export {
  DefaultItems,
  LinkItem,
  CardItem,
};
