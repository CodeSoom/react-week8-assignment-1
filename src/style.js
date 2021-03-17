import styled from '@emotion/styled';

const primaryColor = {

  basic: '#1976d2',
  hover: '#115293',
};

const secondaryColor = {

  basic: '#dc004e',
  hover: '#9a0036',
};


export const Button = styled.button`
    color: #fff;
    background-color: ${(props) => (props.primary ? primaryColor.basic : secondaryColor.basic)};
    padding: 6px 16px;
    margin:5px;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.75;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: middle;

    &:hover {
    background-color: ${(props) => (props.primary ? primaryColor.hover : secondaryColor.hover)}
    }
    
    `;


export const ListWrapper = styled.ul`
display:flex;
flex-direction:row;
margin: 15px 0 ;
`;
