import { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import logo from '../../logo.svg';
import styles from './Counter.module.sass';

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (

    <div className={styles.App}>
      <header className={styles.App_header}>
        <img src={logo} className={styles.App_logo} alt="logo" />
        <div>
          <div className={styles.row}>
            <button
              className={styles.button}
              aria-label="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
            <span className={styles.value}>{count}</span>
            <button
              className={styles.button}
              aria-label="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>
          <div className={styles.row}>
            <input
              className={styles.textbox}
              aria-label="Set increment amount"
              value={incrementAmount}
              onChange={(e) => setIncrementAmount(e.target.value)}
            />
            <button
              className={styles.button}
              onClick={() => dispatch(incrementByAmount(incrementValue))}
            >
              Add Amount
            </button>
            <button
              className={styles.asyncButton}
              onClick={() => dispatch(incrementAsync(incrementValue))}
            >
              Add Async
            </button>
            <button
              className={styles.button}
              onClick={() => dispatch(incrementIfOdd(incrementValue))}
            >
              Add If Odd
            </button>
          </div>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className={styles.App_link}
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className={styles.App_link}
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className={styles.App_link}
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className={styles.App_link}
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}
