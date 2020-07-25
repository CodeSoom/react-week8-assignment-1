
import styled from '@emotion/styled';

const AboutLayout = styled.div({
  display: 'flex',
  padding: '10% 10%',
});

const TextBox = styled.div({
  margin: '.5em',
  borderTop: '5px solid #CCD9EE',
  borderBottom: '5px solid #CCD9EE',
  width: '50%',
  justifyContent: 'space-between',
  lineHeight: '1.8em',
});

const Image = styled.img({
  width: '50%',
  margin: '.5em',
});

export {
  AboutLayout,
  TextBox,
  Image,
};
