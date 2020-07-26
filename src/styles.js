import styled from '@emotion/styled';

export const Container = styled.div({
  maxWidth: '1280px',
  width: '90%',
  margin: '0 auto',
});

export const Content = styled.div({
  margin: '0px 50px',
});

export const Header = styled.header({
  background: '#EEE',
  '& h1': {
    fontSize: '1.5em',
    padding: '1em .5em',
    margin: 0,
  },
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      color: '#000',
    },
  },
});

export const Navigator = styled.div({
  backgroundColor: 'white',
});

export const List = styled.ul({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  backgroundColor: '#111',
});

export const Item = styled.li({
  marginRight: '1em',
  '& a': {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#fff',
    },
  },
});

export const MenuList = styled.ul({
  display: 'flex',
  padding: '.4em 0',
  margin: 0,
  listStyle: 'none',
});

export const MenuItem = styled.li(({ active }) => ({
  marginRight: '1em',
  '& button': {
    padding: '.4em 1em',
    border: '1px solid #CCC',
    background: active ? '#AAA' : 'transparent',
    color: active ? '#FFF' : '#333',
    textDecoration: 'none',
    cursor: 'pointer',
    '&:hover': {
      fontWeight: 'bold',
      color: '#000',
    },
  },
}));
