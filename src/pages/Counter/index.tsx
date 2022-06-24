import React, {useCallback} from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useAppDispatch } from '../../hooks/useTypedDispatch';
import { counterActions } from '../../store/counter/reducer';
import styles from './Counter.module.css';

export const Counter: React.FC = () => {
  const counterVal = useTypedSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const increment = useCallback(() => {
    dispatch(counterActions.increment());
  }, [dispatch]);

  const decrement = useCallback(() => {
    dispatch(counterActions.decrement());
  }, [counterVal]);

  const reset = useCallback(() => {
    dispatch(counterActions.reset());
  }, [dispatch]);

  const incrementByAmount = useCallback((count: number = 10) => {
    dispatch(counterActions.incrementByAmount(count));
  }, []);

  return (
    <div className={styles.center}>
      <div>
        {counterVal}
      </div>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={increment}> + 1 </button>
        <button className={styles.btn} onClick={decrement} disabled={counterVal <= 0}> - 1 </button>
        <button className={styles.btn} onClick={() => incrementByAmount()}> + 10 </button>
        <button className={styles.btn} onClick={reset}> reset </button>
      </div>
    </div>
  );
};
