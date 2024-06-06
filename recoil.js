import { atom } from 'recoil';

export const moviesData = atom({
    key: 'moviesData',
    default: [],
});

export const activeComponentState = atom({
    key: 'activeComponentState',
    default: 'Home', // Default active component is Home
  });
