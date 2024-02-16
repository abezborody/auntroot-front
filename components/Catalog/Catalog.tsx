import { ProductCard, ProductCardProps } from '../ProductCard/ProductCard';
import style from './Catalog.module.css';

export const Catalog = async () => {
  const response = await fetch('https://dev.auntroot.com/api/getItemsList');
  const data = await response.json();
  console.log(data);

  if (data.status !== 'ok') {
    return <div>Error..</div>;
  }
  return (
    <div className={style.catalogContainer}>
      {data.data.map((item: ProductCardProps, index: number) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};
