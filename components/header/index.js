import { memo } from 'react';
import Link from 'next/link';

import styles from './header.module.css';
import Command from '@components/command';

const Header = ({ title, content }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <Link href='/'>
          <a aria-label='Navigate Home' className={styles.logo}>
            <img src='/og.svg' width={100} height={100} alt='logo' />
          </a>
        </Link>

        <Command />

        {title && <div className={styles.content}>{title}</div>}
      </div>
    </nav>
  );
};

Header.displayName = 'Header';
export default memo(Header);
