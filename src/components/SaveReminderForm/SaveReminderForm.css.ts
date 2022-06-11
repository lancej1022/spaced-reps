import { style } from '@vanilla-extract/css';

import { themeClass, vars } from '~/styles/index.css';

export const heading1 = style({
  fontSize: '1.5rem',
});

export const inputWrapper = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateAreas: 'input button button',
  gridTemplateColumns: '4fr 1fr',
  gap: '10px',
  marginTop: '16px',
  marginBottom: '24px',
});
export const btnWrapper = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateAreas: 'input button button',
  gridTemplateColumns: '2fr 2fr',
  gap: '10px',
  // maxWidth: '95%',
});

export const numberInput = style({
  width: '100%',
  border: 'none',
  borderRadius: '4px',
  textAlign: 'center',
  paddingLeft: '15px',
});

export const returnLink = style({
  backgroundColor: '#fff',
  // border: '1px solid #5a5a5a',
  borderRadius: '4px',
  color: '#000',
  padding: '8px',
  textDecoration: 'none',
  textAlign: 'center',
});
