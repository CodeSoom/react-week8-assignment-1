import styled from '@emotion/styled';

const LoginArticle = styled.article(() => ({
  textAlign: 'center',
  padding: '1em',
  '& div': {
    display: 'flex',
    justifyContent: 'center',
    margin: '5px',
    '& label': {
      display: 'none',
    },
    '& input': {
      width: '320px',
      height: '32px',
      borderRadius: 0,
      boxShadow: '0 2px 6px 0 rgba(61,80,81,.08)',
      border: 'solid 1px #dadada',
    },
  },
}));

export default LoginArticle;
