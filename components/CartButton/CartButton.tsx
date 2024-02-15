'use client';
import { Button, Badge, Space } from 'antd';
import style from './CartButton.module.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useCartStore } from '@/lib/store';

const CartButton = (): JSX.Element => {
  const cartCounter = useCartStore((state) => state.cartCounter);

  return (
    <Button className={style.cartButton} style={{ padding: '0 12px' }}>
      <Space
        size={'small'}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <div className={style.cartIcon}>
            <ShoppingCartOutlined
              style={{ fontSize: '18px', marginTop: '4px' }}
            />
          </div>
          <div className={style.cartLabel}>Cart</div>
        </div>
        <Badge
          count={cartCounter}
          showZero
          style={{ marginBottom: '2px' }}
          color='#E62547'
        />
      </Space>
    </Button>
  );
};

export default CartButton;
