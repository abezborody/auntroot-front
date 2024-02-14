import NavLinks from '../navigationLinks/NavLinks';
import style from './Navigation.module.css';

export const Navigation = (): JSX.Element => {
  return (
    <div className={style.navigation}>
      <div>logo</div>
      <NavLinks />
      <div>cart</div>
    </div>
  );
};
