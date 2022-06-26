import { keyframes, style } from '@vanilla-extract/css';

import { themeClass, vars } from '~/styles/index.css';

export const app = style({
  display: 'grid',
  placeItems: 'center',
  width: '400px',
  height: '100%',
  minHeight: '600px',
  overflow: 'hidden',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  color: '#ffffff',
  padding: 24,
  backgroundColor: '#332436',
  // backgroundColor: vars.color.backgroundColor, TODO: why tf doesnt this work?
});

const pulsate = keyframes({
  '100%': {
    textShadow: `0 0 4px #fff,
    0 0 11px #fff,
    0 0 19px #fff,
    0 0 40px #bc13fe,
    0 0 80px #bc13fe,
    0 0 90px #bc13fe,
    0 0 100px #bc13fe,
    0 0 150px #bc13fe`,
  },

  '0%, 18%, 22%, 25%, 53%, 57%, 100%': {
    textShadow: `0 0 4px #fff,
      0 0 11px #fff,
      0 0 19px #fff,
      0 0 40px #0fa,
      0 0 80px #0fa,
      0 0 90px #0fa,
      0 0 100px #0fa,
      0 0 150px #0fa`,
  },
  '20%, 24%, 55%': {
    textShadow: 'none',
  },
});

export const extensionTitle = style({
  fontSize: '1.5rem',
  color: '#ffffff',
  fontWeight: 400,
  marginBottom: '0.5rem',
  marginTop: '0.5rem',
  // x-offset y-offset blur-radius color;
  // textShadow: `0 0 7px #fff,
  // 0 0 10px #fff,
  // 0 0 21px #fff,
  // 0 0 42px #bc13fe,
  // 0 0 82px #bc13fe,
  // 0 0 92px #bc13fe,
  // 0 0 102px #bc13fe,
  // 0 0 151px #bc13fe`,
  // animation: `${pulsate} 1.5s infinite alternate`,
  // border: '0.2rem solid #fff',
  // borderRadius: '2rem',
  // padding: '0.4em',
  // boxShadow: `0 0 .2rem #fff,
  //           0 0 .2rem #fff,
  //           0 0 2rem #bc13fe,
  //           0 0 0.8rem #bc13fe,
  //           0 0 2.8rem #bc13fe,
  //           inset 0 0 1.3rem #bc13fe`,
});
