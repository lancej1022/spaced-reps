import { style } from '@vanilla-extract/css';

// vanilla-extract styled badge component function
export const badge = style({
  textTransform: 'capitalize',
});

// TODO: is there a better way to do this? maybe a CSS variable?
export const easy = style({
  color: 'rgb(0 184 163)',
});
export const medium = style({
  color: 'rgb(255 192 30)',
});
export const hard = style({
  color: 'rgb(255 55 95)',
});
