// React 함수 컴포넌트 (네트워크 요청/응답 로직: 자주 사용되는 로직(ctrl+C, ctrl+V)
// - [ ] use* customHook (useFetch) → { isLoading, error, data }

import axios from 'axios';
import { useEffect, useState } from 'react';

// fetch API | axios 라이브러리 활용

export function useFetch(endpoint) {
  const [isLoading, setIsLoading] = useState(true);
  // 2. data (resolved)
  const [data, setData] = useState(null);
  // 3. error (rejected)
  const [error, setError] = useState(null);

  // 네트워크 요청/응답 (side effects) - useEffect()
  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(endpoint);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);
  return { isLoading, data, error }
}