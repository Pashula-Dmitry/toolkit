import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import styles from './Layout.module.css';

export const Layout: React.FC = () => {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  );
};
