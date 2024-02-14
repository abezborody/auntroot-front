import { Button } from 'antd';
import style from './NavLinks.module.css';

const sizeBtn = 'small';

const NavLinks = (): JSX.Element => {
  return (
    <div className={style.navLinks}>
      <Button size={sizeBtn} type='link' href={'/'}>
        Shop
      </Button>
      <Button size={sizeBtn} type='link' href={'/decor'}>
        Decor
      </Button>
      <Button size={sizeBtn} type='link' href={'/delivery'}>
        Delivery
      </Button>
      <Button size={sizeBtn} type='link' href={'/about'}>
        About Us
      </Button>
      <Button size={sizeBtn} type='link' href={'/contacts'}>
        Contacts
      </Button>
    </div>
  );
};

export default NavLinks;
