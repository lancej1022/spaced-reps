import { style } from '@vanilla-extract/css';

import { themeClass, vars } from '~/styles/index.css';

export const questionCardWrapper = style({
  display: 'grid',
  width: '100%',
  fontFamily: vars.font.body,
  color: '#fff',
  padding: 10,
  borderBottom: '1px solid #5a5a5a',
});

export const loginFormLabel = style({
  fontFamily: vars.font.body,
  textAlign: 'center',
  color: '#000000',
  marginBottom: 4,
});
export const loginFormInput = style({
  fontFamily: vars.font.body,
  textAlign: 'center',
  color: '#000000',
  marginBottom: 8,
});
