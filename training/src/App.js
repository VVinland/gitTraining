import {useState} from 'react';

const App = () => {
  const [state, setState] = useState();

  const add = ()=>{
    setState(state+1);
  }
  return (
    <div className="App">
      <button onClick={add}>
      {state}
      </button>
    </div>
  );
}

export default App;
