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
        {'dasdsadsa'}
      </button>
    </div>
  );
}

export default App;
