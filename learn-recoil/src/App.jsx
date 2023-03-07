import './App.css';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { countState } from './@store/countState';



function App() {
  const [count, setCount] = useRecoilState(countState);

  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>
        카운트 = {count}
      </button>
    </div>
  );
}

export default App;