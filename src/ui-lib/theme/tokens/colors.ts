import { defineTokens } from '@pandacss/dev';

export const colors = defineTokens.colors({
  current: { value: 'currentColor' },

  neutral: {
    '01_black': {
      value: '#171717',
    },
    '02_gray': {
      value: '#505050',
    },
    '03_gray': {
      value: '#767676',
    },
    '04_gray': {
      value: '#BEBEBE',
    },
    '05_white': {
      value: '#ffffff',
    },
  },

  '01_primary': {
    value: '#FFC821',
  },

  '02_secondary': {
    value: '#FD9206',
  },
  '03_secondary': {
    value: '#FFA938',
  },
  '04_red': {
    value: '#FA1414',
  },
  '05_green': {
    value: '#16A349',
  },
  background: {
    '01_white': {
      value: '#FFFFFF',
    },
    '02_light-gray': {
      value: '#F7F7F8',
    },
    '03_gray': {
      value: '#F2F2F2',
    },
    '04_yellow': {
      value: '#FEFAE7',
    },
  },
  border: {
    '01_gray': {
      value: '#E5E5EC',
    },
  },

  transparent: { value: 'rgb(0 0 0 / 0)' },
});
