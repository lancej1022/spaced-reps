import { style } from '@vanilla-extract/css';

const input = style({
  '::placeholder': { color: '#fff', opacity: 0.6 },
});

export default {
  input,
};
