import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

export const Header: React.FC = () => {

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <NavLink to="todos" className={({isActive}) => isActive ? styles.activeLink : undefined}>Todos list</NavLink>
        <NavLink to="users" className={({isActive}) => isActive ? styles.activeLink : undefined}>Users</NavLink>
      </nav>
    </header>
  );
};
