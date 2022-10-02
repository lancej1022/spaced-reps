import { style } from '@vanilla-extract/css';

export const dialogBackdrop = style({
  selectors: {
    '&::backdrop': {
      opacity: '0.1',
      backgroundColor: 'rgb(226 232 240)',
    },
  },
});

export default { dialogBackdrop };
