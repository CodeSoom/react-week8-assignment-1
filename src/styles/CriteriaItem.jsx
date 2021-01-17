import styled from '@emotion/styled';

const CriteriaItem = styled.button(({ active }) => ({
  margin: '0 .5rem',
  padding: '.8rem 1.3rem',
  width: 'max-content',
  fontSize: '1.7rem',
  letterSpacing: '2px',
  border: 'none',
  color: active ? '#FFFFFF' : '#666666',
  background: 'transparent',
  backgroundColor: active ? '#00AA00' : '#EEEEEE',
  fontWeight: active ? '650' : '400',
  outline: 'none',
  borderRadius: '3px',
  transition: 'all .2s',
}));

export default CriteriaItem;
