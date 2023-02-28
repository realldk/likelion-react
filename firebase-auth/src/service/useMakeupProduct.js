import { useFetch } from '../hooks/useFetch';

/** */

export function useMakeupProduct({ brandName }) {
  return useFetch(`${import.meta.env.VITE_MAKEUP_API}?brand=${brandName}`); // {isLoading, data, error}가 반환된다
}