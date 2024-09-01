import {useState} from 'react';

const App = () => {
  const [state, setState] = useState();

  const add = ()=>{
    setState(state+1)
  }
  
  const down = ()=>{
    setState(state-1);
  }

  return (
    <div className="App">
      <button onClick={add}>
        {'Добваить +1'}
      </button>
      <button onCLick={down}>
        {'Удалить -1'}
      </button>
      {state}
      <h1>{state}</h1>
      <div>{state}</div>
      <h2>{state}</h2>
      <h3>{state}</h3>
      {state}{state}
      {state}{state}
      {state}{state}
      {state}{state}
      {state}
    </div>
  );
}

export default App;
