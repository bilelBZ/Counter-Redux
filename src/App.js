import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1> Count App with Redux</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}
