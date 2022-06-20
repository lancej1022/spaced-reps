import { style } from '@vanilla-extract/css';

import { themeClass, vars } from '~/styles/index.css';

export const heading1 = style({
  fontSize: '1.5rem',
});
export const saveReminderForm = style({
  minHeight: '90%',
});

export const inputWrapper = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateAreas: `"numberLabel numberInput"
   "textLabel textLabel"`,
  gridTemplateColumns: '4fr 1fr',
  gap: '10px',
  marginTop: '16px',
});
export const btnWrapper = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateAreas: 'input button button',
  gridTemplateColumns: '2fr 2fr',
  gap: '10px',
});

export const numberInput = style({
  width: '100%',
  border: 'none',
  borderRadius: '4px',
  textAlign: 'center',
  paddingLeft: '15px',
});

export const textAreaWrapper = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateAreas: `"textLabel"
   "textInput"`,
  minWidth: '100%',
  marginBottom: '24px',
});

export const textInput = style({
  width: '100%',
  minHeight: '150px',
  borderRadius: '4px',
});

export const categoriesSelect = style({
  borderRadius: '4px',
});

export const returnLink = style({
  backgroundColor: '#fff',
  borderRadius: '4px',
  color: '#000',
  padding: '8px',
  textDecoration: 'none',
  textAlign: 'center',
});
