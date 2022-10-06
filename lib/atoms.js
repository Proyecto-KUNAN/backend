import { atom } from 'recoil';

export const sessionState = atom({
  key: 'sessionAtom',
  default: {},
});

export const editConsultObjState = atom({
  key: 'editConsultObjState',
  default: {},
});
