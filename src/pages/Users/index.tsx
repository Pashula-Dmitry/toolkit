import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../hooks/useTypedDispatch';
import { getUsers } from '../../store/users/reducer';
import styles from './Users.module.css';

export const Users: React.FC = () => {
  const { isLoading, list } = useTypedSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Типо лоудер</p>;
  }

  return <ul className={styles.list}>{list && list.map((item) => <li key={item.id}>{`${item.name} ${item.email}`}</li>)}</ul>;
};
