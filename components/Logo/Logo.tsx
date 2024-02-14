import Link from 'next/link';
import style from './Logo.module.css';
import Image from 'next/image';

const Logo = (): JSX.Element => {
  return (
    <Link className={style.logo} href={'/'}>
      <Image width={132} height={44} src={'/logo.png'} alt={'auntroot logo'} />
    </Link>
  );
};

export default Logo;
