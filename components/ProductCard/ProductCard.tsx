import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Card, Button, InputNumber, Row, Flex } from 'antd';
import Image from 'next/image';
import { Title, Text } from '@/lib/antdElements';
import { CURRENCY } from '@/lib/constants';
import style from './ProductCard.module.css';
import { ProductCardProps } from './ProductCard.props';
import { ProductCartButton } from '../ProductCartButton/ProductCartButton';

export const ProductCard = (props: ProductCardProps): JSX.Element => {
  const { name, description, price, image_url, available_count } = props;
  return (
    <Card
      hoverable
      style={{ minWidth: 343, minHeight: 515 }}
      cover={
        <Image
          className={style.productCardImage}
          width={343}
          height={343}
          alt={`Bouquet ${name}`}
          src={`https://dev.auntroot.com/${image_url}`}
        />
      }
    >
      <Flex vertical>
        <Title level={4}>{name}</Title>

        <Text>{description ? description : null}</Text>
        <Text style={{ marginRight: '0' }}>
          {price} {CURRENCY.GEL}
        </Text>
        <Text style={{ marginRight: '0' }}>
          {available_count > 0
            ? `In stock: ${available_count}`
            : 'Out of stock'}
        </Text>
      </Flex>
      <ProductCartButton {...props} />
    </Card>
  );
};
