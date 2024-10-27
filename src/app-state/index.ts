import { atom } from 'jotai'

export const heroAnimateStatusAtom = atom<
  '' | 'started' | 'pending' | 'completed' | 'cancelled'
>('')
