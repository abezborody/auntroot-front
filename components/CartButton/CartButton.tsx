import { Button, Space } from 'antd';
import style from './CartButton.module.css';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CartCounter } from './CartCounter';

const CartButton = (): JSX.Element => {
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
        <CartCounter />
      </Space>
    </Button>
  );
};

export default CartButton;
