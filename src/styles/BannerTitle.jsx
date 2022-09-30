import styled from '@emotion/styled';

const BannerTitle = styled.h2({
  display: 'block',
  color: '#FFF',
  fontWeight: 'bold',
  lineHeight: 1.2,

  '& small': {
    display: 'block',
    marginBottom: '0.5em',
    color: '#0E4CDC',
    fontSize: '1.5em',
  },

  '& span': {
    display: 'block',
    fontSize: '3em',
  },
});

export default BannerTitle;
