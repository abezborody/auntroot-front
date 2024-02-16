'use client';
import { useActivePath } from '@/lib/helpers/useActivePath';
import { theme } from 'antd';
import style from './NavLinks.module.css';
import Link from 'next/link';
import { Text } from '@/lib/antdElements';

const NavLinks = (): JSX.Element => {
  const { token } = theme.useToken();
  const checkActivePath = useActivePath();
  return (
    <div className={style.navLinks}>
      <Text
        style={{
          color: checkActivePath('/') ? token.colorPrimary : '  ',
        }}
      >
        <Link href={'/'}>Shop</Link>
      </Text>
      <Text>
        <Link href={'/decor'}>Decor</Link>
      </Text>
      <Text>
        <Link href={'/delivery'}>Delivery</Link>
      </Text>
      <Text>
        <Link href={'/about'}>About Us</Link>
      </Text>
      <Text>
        <Link href={'/contacts'}>Contacts</Link>
      </Text>
    </div>
  );
};

export default NavLinks;
