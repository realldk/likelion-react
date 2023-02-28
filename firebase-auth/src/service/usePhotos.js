import { useFetch } from '@/hooks/useFetch';

/**
 * 포토 가져오기 유틸리티 함수
 * @param {{limit: number; page: number; }} options 페이지, 가져올 갯수
 * @returns {{}}
 */

// { limit = 20, page = 1 } 기본값 설정 구조분해할당
// = {]는 options를 받아서 앞의 기본값과 겹치는 값이 있으면 덮어쓴다.
export function usePhotos({ limit = 20, page = 1 } = {}) {
  return useFetch(`${import.meta.env.VITE_PHOTOS_API}?_page=${page}&_limit=${limit}`)
}