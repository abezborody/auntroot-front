import styles from './page.module.css';
import { Catalog } from '@/components';

export default function Home() {
  return (
    <div className={styles.main}>
      <Catalog />
    </div>
  );
}
