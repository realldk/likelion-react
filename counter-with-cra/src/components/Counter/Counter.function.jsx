import { useState } from 'react';

function Counter(props) {
  // 함수 안에 지역 변수를 사용해서는 상태 업데이트를 나타낼 수 없다.
  // let count = 1;

  // React Hook
  // 상태관리 React.useState()
  const [count, updateCount] = useState(props.count); // useState()는 배열을 반환한다. [state, setState] 반환

  // 함수 안에 이벤트 청취 함수를 작성합니다.
  const handleIncrement = () => {
    console.log('함수값 증가');
    // count++; // mutation (수정). 재조정이 아니다.
    updateCount(count + props.step)
  };

  // only class component
  // lifecycle methods 

  const handleDecrement = () => {
    console.log('함수값 감소');
    // count--;
    updateCount(count - props.step)
  }

  return (
    <div className="Counter">
      <button type="button" onClick={handleIncrement}>+</button>
      <output>{count}</output>
      <button type="button" onClick={handleDecrement}>-</button>
    </div>
  )
}

// class에서 static과 같은 
Counter.defaultProps = {
  count: 0,
  min: 1,
  max: 10,
  step: 1,
}

export default Counter;