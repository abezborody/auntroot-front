'use client';

import { Badge } from 'antd';
import { useCartStore } from '@/lib/store';

export const CartCounter = () => {
  const cartCounter = useCartStore((state) => state.cartItems.length);
  return (
    <Badge
      count={cartCounter}
      showZero
      style={{ marginBottom: '2px' }}
      color='#E62547'
    />
  );
};
