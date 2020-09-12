import styled from '@emotion/styled';


export const constants = {
  COLOR_SECONDARY: '#71C0BB',
  COLOR_LIGHT: '#808080',
  COLOR_LIGHTER: '#EDEDED',
  COLOR_LIGHTEST: '#FFF',
};

const {
  COLOR_SECONDARY,
  COLOR_LIGHT,
  COLOR_LIGHTER,
  COLOR_LIGHTEST,
} = constants;

export const Container = styled.div({
  fontFamily: 'Do Hyeon',
  width: '90%',
  maxWidth: '1280px',
  height: '100%',
  margin: '0 auto',
});

export const ItemList = styled.div({
  '@media only screen and (max-width: 800px)': {
    // TODO: drawer로 변경
    display: 'none',
  },
  width: '384px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const List = styled.ul({
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: 0,
  padding: '10px 0',
  listStyle: 'none',
  backgroundColor: 'transparent',
});

export const Item = styled.li({
  '& a': {
    color: '#000',
    textDecoration: 'none',
    '&:hover': {
      fontWeight: 'bold',
      color: '#888888',
    },
  },
});

export const Content = styled.div({
  backdropFilter: 'blur(20px)',
  minHeight: '55%',
  margin: '64px 0',
  padding: '64px 128px',
});

export const MenuContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const MenuList = styled.ul({
  padding: '.4em 0',
  margin: 0,
  display: 'flex',
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
      color: active ? COLOR_LIGHT : '#000',
    },
  },
}));

export const FilterMenuList = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center',
});

export const FilterMenuItem = styled.li({
  padding: '.2em .4em',
  display: 'flex',
  border: '1px solid #ccc',
  textAlign: 'center',
  listStyle: 'none',
  margin: '10px 0',
  '& a': {
    color: '#555',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: COLOR_LIGHTEST,
    },
  },
});

export const DetailHeader = styled.h2({
  fontSize: '2rem',
  textAlign: 'center',
});

export const DetailAddress = styled.p({
  textAlign: 'right',
});

export const DetailMenuList = styled.ul({
  '@media only screen and (max-width: 800px)': {
    // TODO: drawer로 변경
    display: 'none',
  },
  padding: '.4em 0',
  margin: 0,
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  justifyContent: 'space-around',
  listStyle: 'none',
});

export const DetailMenuItem = styled.li({
  width: '20%',
  height: '80px',
  borderRadius: '10px',
  margin: '1em',
  backgroundColor: COLOR_LIGHTEST,
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
});

export const ReviewStar = styled.span({
  color: '#E7BA4E',
});

export const DetailReviewForm = styled.div({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  input: {
    border: 'none',
  },
});

export const DetailReviewInput = styled.div({
  width: '256px',
  margin: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  input: {
    border: 'none',
  },
});


export const LoginContainer = styled.div({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});


export const Input = styled.div({
  width: '256px',
  margin: '5px',
  display: 'flex',
  justifyContent: 'space-between',
  input: {
    border: 'none',
  },
});

export const Button = styled.button({
  height: '32px',
  width: '172px',
  margin: '10px 0',
  border: '0',
  borderRadius: '32px',
  color: COLOR_LIGHTEST,
  fontSize: '1.1rem',
  fontWeight: 'bold',
  backgroundColor: COLOR_SECONDARY,
  '&:hover': {
    color: COLOR_LIGHTER,
  },
});
