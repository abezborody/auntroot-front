'use client';
import { useCartStore } from '@/lib/store';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Flex, InputNumber } from 'antd';
import { ProductCardProps } from '../ProductCard/ProductCard.props';

export const ProductCartButton = (item: ProductCardProps) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const addItemToCart = useCartStore((state) => state.addItemToCart);
  const isItemInCart =
    cartItems.filter((itemInCart) => itemInCart.id === item.id).length > 0;

  const onAddToCart = () => {
    addItemToCart(item);
    console.log('added to cart');
  };

  if (!isItemInCart) {
    return (
      <Button
        onClick={onAddToCart}
        block
        style={{ marginBottom: '0px' }}
        key='add'
        type='primary'
        icon={<PlusOutlined />}
      >
        Add to cart
      </Button>
    );
  } else {
    return (
      <Flex style={{ justifyContent: 'center' }}>
        <Button style={{ borderRadius: '6px 0 0 6px' }}>
          <MinusOutlined />
        </Button>
        <InputNumber style={{ borderRadius: 0 }} keyboard controls={false} />
        <Button style={{ borderRadius: '0 6px 6px 0' }}>
          <PlusOutlined />
        </Button>
      </Flex>
    );
  }
};
