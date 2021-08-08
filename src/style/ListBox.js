import styled from '@emotion/styled';
import colors from './colors';

const ListBox = styled.div({
  width: '90%',
  margin: '.4em auto',
  borderBottom: `${colors.background_green} solid 1px`,
  '& h4': {
    margin: '1em 2em',
    color: `${colors.text_secondary}`,
    fontSize: '.8em',
  },
});

export default ListBox;
