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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gridArea: 'left',
  alignSelf: 'center',
  justifySelf: 'start',
  borderRadius: '100%',
  backgroundColor: '#5a5a5a',
  color: '#fff',
  width: '44px',
  height: '44px',
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

export const removeReminderBtn = style({
  cursor: 'pointer',
  width: 'fit-content',
  padding: '0 8px',
  color: '#fff',
  backgroundColor: 'transparent',
  border: '2px solid #fff',
  borderRadius: '4px',
  fontSize: '0.9rem',
  transition: 'all 0.1s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: '#fff',
      color: 'black',
    },
  },
});

export const arrow = style({
  gridArea: 'arrow',
  justifySelf: 'center',
  alignSelf: 'center',
  width: 'fit-content !important', // TODO: Why does this only seem to work with !important? Is it a Vite dev mode bug?
});

export const arrowHovered = style({
  fill: 'hsl(343deg 100% 54% / 70%)',
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
