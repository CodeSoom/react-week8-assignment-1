import { memo } from 'react';
import { Card } from 'react-bootstrap';

import MenuItems from './MenuItems';

const RestaurantDetail = ({ restaurant }) => {
  const { name, address, menuItems } = restaurant;

  return (
    <>
      <Card.Header>
        <Card.Title>
          <h2>{name}</h2>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {`주소: ${address}`}
        </Card.Text>
        <Card>
          <Card.Header>
            <Card.Title>
              <h3>메뉴</h3>
            </Card.Title>
          </Card.Header>
          <Card.Body>
            <MenuItems menuItems={menuItems} />
          </Card.Body>
        </Card>
      </Card.Body>
    </>
  );
};

export default memo(RestaurantDetail);
