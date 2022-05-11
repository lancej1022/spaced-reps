import { style } from '@vanilla-extract/css';

import { themeClass, vars } from '~/styles/index.css';

export const questionCardWrapper = style({
  display: 'grid',
  width: '100%',
  fontFamily: vars.font.body,
  color: '#fff',
  padding: '8px 0',
  borderBottom: '1px solid #5a5a5a',
  gridTemplateRows: 'auto',
  gridTemplateAreas: `"left top-right arrow"
    "left bottom-right arrow" `,
  gridTemplateColumns: '1fr 4fr 1fr',
  cursor: 'pointer',
});

export const daysRemainingBubble = style({
  gridArea: 'left',
  alignSelf: 'center',
  justifySelf: 'start',
  borderRadius: '100%',
  backgroundColor: '#5a5a5a',
  color: '#fff',
  padding: '8px 16px',
  fontSize: '1rem',
});

export const questionName = style({
  gridArea: 'top-right',
  fontWeight: 'bold',
  fontSize: '1rem',
});

export const leetCodeDifficulty = style({
  gridArea: 'bottom-right',
  fontSize: 14 / 16 + 'rem',
});

export const arrow = style({
  gridArea: 'arrow',
  justifySelf: 'end',
  alignSelf: 'center',
  width: 'fit-content !important', // Why does this only seem to work with !important? Is it a Vite dev mode bug?
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
