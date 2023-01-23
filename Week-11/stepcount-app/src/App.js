import './App.css';
import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Add,Reset } from './reducer/action';

function App(props) {
  const dispatch = useDispatch();
  const steps = useSelector(state => state.steps);
  return (
    <>
    <div className="App">
    <h1> Step Counter App </h1>
    <div className="counter">
      <h2> You have walked {steps} steps today! </h2>
      <button className='add' onClick={()=> dispatch(Add())}>Add Steps</button>
      <button className='reset'onClick={()=> dispatch(Reset())}>Reset Steps</button>
    </div>
    </div>
    </>
  );
}

export default App;
