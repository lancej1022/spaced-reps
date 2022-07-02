import { style } from '@vanilla-extract/css';

import { vars } from '~/styles/index.css';

const questionCardWrapper = style({
  display: 'grid',
  width: '100%',
  fontFamily: vars.font.body,
  color: '#fff',
  padding: '8px 0',
  borderBottom: '1px solid #52324d',
  gridTemplateRows: 'auto',
  gridTemplateAreas: `"left top top top"
    "left bottom bottom bottom"`,
  gridTemplateColumns: '1fr 4fr 1fr',
});

const daysRemainingBubble = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gridArea: 'left',
  alignSelf: 'center',
  justifySelf: 'start',
  borderRadius: '100%',
  backgroundColor: '#5a5a5a',
  color: '#fff',
  width: '48px',
  height: '48px',
  fontSize: '1rem',
});

const questionName = style({
  gridArea: 'top',
  fontWeight: '500',
  fontSize: '1rem',
  padding: '0 16px',
  textAlign: 'center',
});

const leetCodeDifficulty = style({
  gridArea: 'bottom-right',
  fontSize: 14 / 16 + 'rem',
});

const removeReminderBtn = style({
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

const buttonGroup = style({
  gridArea: 'bottom',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  // padding: '0 8px',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#fff',
  // backgroundColor: '#5a5a5a',
  borderRadius: '0 0 4px 4px',
});

const questionButton = style({
  display: 'inline-flex',
  // '-webkit-box-align': 'center',
  alignItems: 'center',
  // '-webkit-box-pack': 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  // '-webkit-tap-highlight-color': 'transparent',
  backgroundColor: 'transparent',
  outline: '0px',
  border: '0px',
  margin: '0px',
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  appearance: 'none',
  textDecoration: 'none',
  fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: '1.75',
  letterSpacing: '0.02857em',
  padding: '6px 8px',
  // textTransform: 'uppercase',
  minWidth: '64px',
  width: '100%',
  borderRadius: '4px',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  color: '#f6f6f6',
  selectors: {
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: 'rgba(186, 224, 255, 0.2)',
    },
    '&:focus': {
      textDecoration: 'none',
      backgroundColor: 'rgba(186, 224, 255, 0.2)',
    },
    '&:not(:first-of-type)': {
      borderTopLeftRadius: '0px',
      borderBottomLeftRadius: '0px',
    },
    '&:first-of-type': {
      borderTopRightRadius: '0px',
      borderBottomRightRadius: '0px',
      borderRight: '1px solid #52324d',
      borderTopColor: '#52324d',
      borderBottomColor: '#52324d',
      borderLeftColor: '#52324d',
    },
  },
});

const arrow = style({
  gridArea: 'arrow',
  justifySelf: 'center',
  alignSelf: 'center',
  width: 'fit-content !important', // TODO: Why does this only seem to work with !important? Is it a Vite dev mode bug?
});

const arrowHovered = style({
  fill: 'hsl(343deg 100% 54% / 70%)',
});

const loginFormLabel = style({
  fontFamily: vars.font.body,
  textAlign: 'center',
  color: '#000000',
  marginBottom: 4,
});
const loginFormInput = style({
  fontFamily: vars.font.body,
  textAlign: 'center',
  color: '#000000',
  marginBottom: 8,
});

export default {
  questionCardWrapper,
  daysRemainingBubble,
  questionName,
  leetCodeDifficulty,
  removeReminderBtn,
  buttonGroup,
  questionButton,
  arrow,
  arrowHovered,
  loginFormLabel,
  loginFormInput,
};
