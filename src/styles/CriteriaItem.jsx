import styled from '@emotion/styled';

const CriteriaItem = styled.button(({ active }) => ({
  margin: '0 .5rem',
  padding: '.5rem 1rem',
  width: 'max-content',
  fontSize: '1.7rem',
  letterSpacing: '1px',
  border: 'none',
  color: active ? '#FFFFFF' : '#808080',
  background: 'transparent',
  backgroundColor: active ? '#00CC00' : 'EEEEEE',
  outline: 'none',
  boxShadow: active ? '0 1px 1px #DDDDDD' : '0 4px 3px #DDDDDD',
  transform: `rotateX(10deg) ${active && 'translateY(2px)'}`,
  transition: 'all .2s',
  fontWeight: active ? '600' : '400',
}));

export default CriteriaItem;
