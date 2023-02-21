// imn : import no module
// import './Counter.style.css';

// imd : import destrucuring. export 네이밍 된 것
// imp : export default된 것을 가져올 때 
import React, { useState } from 'react';
import styles from './Counter.module.css';

function CounterFunction({ count: initialCount = 1, min = 1, max = 10, step = 1 }) {
  // 함수 안에 지역 변수를 사용해서는 상태 업데이트를 나타낼 수 없다.
  // let count = 1;

  // React Hook
  // 상태관리 React.useState()
  const [count, updateCount] = useState(initialCount); // useState()는 배열을 반환한다. [state, setState] 반환

  // 함수 안에 이벤트 청취 함수를 작성합니다.
  const handleIncrement = () => {
    console.log('함수값 증가');
    // count++; // mutation (수정). 재조정이 아니다.
    updateCount(count + step)
  };

  // only class component
  // lifecycle methods 

  const handleDecrement = () => {
    console.log('함수값 감소');
    // count--;
    updateCount(count - step)
  }

  return (
    <div className={styles.container}>
      <button type="button" aria-label="카운트 1 증가" onClick={handleIncrement}>+</button>
      <output>{count}</output>
      <button type="button" aria-label="카운트 1 감소" onClick={handleDecrement}>-</button>
    </div>
  )
}

// class에서 static과 같은 
// 매개변수로 {count =0, min=1, max=10, step=1}을 주는 것과 같다. 줄을 더 줄일 수 있다.
// Counter.defaultProps = {
//   count: 0,
//   min: 1,
//   max: 10,
//   step: 1,
// }

export default CounterFunction;