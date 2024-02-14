import Logo from '../Logo/Logo';
import NavLinks from '../NavigationLinks/NavLinks';
import CartButton from '../CartButton/CartButton';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import style from './Navigation.module.css';

export const Navigation = (): JSX.Element => {
  return (
    <div className={style.navigation}>
      <div className={style.burgerMenu}>
        <BurgerMenu />
      </div>
      <Logo />
      <NavLinks />
      <CartButton />
    </div>
  );
};
