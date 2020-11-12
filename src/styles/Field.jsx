import styled from '@emotion/styled';

const Field = styled.div(({ id }) => ({
  marginRight: '16px',

  '& label': {
    fontSize: '18px',
    marginRight: '4px',
  },

  '& input': {
    width: (id === 'description') ? '450px' : '100px',
    height: '30px',
    borderRadius: '4px',
  },
}));

export default Field;
