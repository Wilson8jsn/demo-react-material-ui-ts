import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const AppCard: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="example" src="https://res.cloudinary.com/dcba9lt2s/image/upload/v1702476736/onbqxbd3sf9rmrrgvjkt.webp" />}
    >
      <Meta
        title={
          <div>
            <span style={{ color: '#FF00E8' }}>REACT GRAHQL DEVELOP</span>
            <br />
            <span style={{ color: '#FF00E8' }}>FOR ANY DEVELOPMENT</span>
          </div>
        }
        description="Best one bars to take friends and relatives, one bars to take friends and relatives"
      />
    </Card>
  </div>
);

export default AppCard;
