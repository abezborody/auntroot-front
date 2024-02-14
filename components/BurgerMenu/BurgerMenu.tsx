import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const BurgerMenu = (): JSX.Element => {
  return <Button type={'text'} icon={<MenuOutlined />} />;
};

export default BurgerMenu;
