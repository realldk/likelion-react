import { atom, useRecoilState } from 'recoil';

// Recoil 상태(아톰 -> 상태)
export const countState = atom({
  key: 'countState',
  default: 0,
})