import Link from 'next/link';
import style from './NavLinks.module.css';

const NavLinks = (): JSX.Element => {
  return (
    <div className={style.navLinks}>
      <Link href='/'>Shop</Link>
      <Link href='/decor'>Decor</Link>
      <Link href='/delivery'>Delivery</Link>
      <Link href='/about'>About Us</Link>
      <Link href='/contacts'>Contacts</Link>
    </div>
  );
};

export default NavLinks;
