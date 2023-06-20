import styled from '@emotion/styled';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faLocationDot, faUtensils,
} from '@fortawesome/free-solid-svg-icons';

import MenuItems from './MenuItems';
import MenuTitle from '../../styles/MenuTitle';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const MenuInfo = styled.div`
  display: flex;
  margin: 1rem 0;
  & p {
    margin-left: 1.5rem;
  }
`;

const Address = styled.div`
  margin-left: 3rem;
`;

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <Container>
      <MenuTitle>{name}</MenuTitle>
      <MenuInfo>
        <FontAwesomeIcon icon={faLocationDot} />
        <p>주소</p>
        <Address>{address}</Address>
      </MenuInfo>
      <MenuInfo>
        <FontAwesomeIcon icon={faUtensils} />
        <p>메뉴</p>
        <MenuItems menuItems={menuItems} />
      </MenuInfo>
    </Container>
  );
}
