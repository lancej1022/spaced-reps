import { createTheme, globalStyle, style } from '@vanilla-extract/css';

// TODO: delete this stuff
export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue',
    backgroundColor: '#0e141b',
    neon: 'hsl(317 100% 54%)',
    neonBg: 'hsl(323 21% 16%)',
  },
  font: {
    body: 'Helvettica Neue, Helvetica, Arial, sans-serif',
  },
});

export const visuallyHidden = style({
  position: 'absolute',
  overflow: 'hidden !important',
  clip: 'rect(0 0 0 0) !important',
  height: '1px !important',
  width: '1px !important',
  margin: '-1px !important',
  padding: '0px !important',
  border: '0px !important',
});

globalStyle('a, p, h1, h2, h3, h4, h5, h6, span, div', {
  color: '#ffffff',
});
globalStyle('#root', {
  width: '400px',
});
globalStyle('body, html', {
  overflowX: 'hidden',
  height: '600px',
  maxHeight: '600px',
  width: '400px',
});
globalStyle('body::-webkit-scrollbar', {
  width: '0.7em',
  background: 'white',
});
globalStyle('body::-webkit-scrollbar-thumb', {
  background: 'rgb(66, 165, 245)',
  height: '30px',
});
globalStyle('body::-webkit-scrollbar-track-piece', {
  background: 'rgb(66, 165, 245)',
  height: '30px',
  display: 'none',
});
globalStyle('*:focus', {
  outline: '2px solid rgb(66, 165, 245)',
});
