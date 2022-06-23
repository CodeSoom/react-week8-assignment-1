import styled from '@emotion/styled';

const StyledButton = styled.button(() => ({
  alignItems: 'center',
  appearance: 'none',
  backgroundImage: 'radial-gradient(100% 100% at 100% 0, #5adaff 0, #5468ff 100%)',
  border: '0',
  borderRadius: '6px',
  boxShadow: 'rgba(45, 35, 66, .4) 0 2px 4px,rgba(45, 35, 66, .3) 0 7px 13px -3px,rgba(58, 65, 111, .5) 0 -3px 0 inset',
  boxSizing: 'borderBox',
  color: '#fff',
  cursor: 'pointer',
  display: 'inline-flex',
  fontFamily: 'JetBrains Mono,monospace',
  height: '48px',
  justifyContent: 'center',
  lineHeight: '1',
  listStyle: 'none',
  overflow: 'hidden',
  paddingLeft: '16px',
  paddingRight: '16px',
  position: 'relative',
  textAlign: 'left',
  textDecoration: 'none',
  transition: 'box-shadow .15s,transform .15s',
  userSelect: 'none',
  '-webkit-user-select': 'none',
  touchAction: 'manipulation',
  whiteSpace: 'nowrap',
  willChange: 'box-shadow,transform',
  fontSize: '18px',
  '&:focus': {
    boxShadow: '#3c4fe0 0 0 0 1.5px inset, rgba(45, 35, 66, .4) 0 2px 4px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset',
  },
  '&:hover': {
    boxShadow: 'rgba(45, 35, 66, .4) 0 4px 8px, rgba(45, 35, 66, .3) 0 7px 13px -3px, #3c4fe0 0 -3px 0 inset',
    transform: 'translateY(-2px)',
  },
  '&:active': {
    boxShadow: '#3c4fe0 0 3px 7px inset',
    transform: 'translateY(2px)',
  },
}));

export default function Button({ onClick, children }) {
  return (
    <StyledButton type="button" onClick={onClick}>{children}</StyledButton>
  );
}
