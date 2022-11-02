import { style } from '@vanilla-extract/css';

const app = style({
  display: 'grid',
  gridTemplateRows: 'repeat(2, auto) 1fr repeat(2, auto)',
  width: '400px',
  height: '100%',
  minHeight: '600px',
  overflow: 'hidden',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  color: '#ffffff',
  padding: 24,
  // backgroundColor: '#332436',
  // backgroundColor: vars.color.backgroundColor, TODO: why tf doesnt this work?
});

const extensionTitle = style({
  fontSize: '1.5rem',
  color: '#ffffff',
  fontWeight: 400,
  marginBottom: '0.5rem',
  marginTop: '0.5rem',
});

export default {
  app,
  extensionTitle,
};
