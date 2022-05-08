import { createTheme, style } from '@vanilla-extract/css';

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  fontFamily: vars.font.body,
  color: '#000000',
  padding: 10,
  border: '1px solid #ccc',
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
