import { style } from '@vanilla-extract/css';

import { themeClass, vars } from '~/styles/index.css';

export const app = style({
  display: 'grid',
  placeItems: 'center',
  width: '400px',
  height: '100%',
  minHeight: '530px',
  // maxHeight: '530px',
  overflow: 'hidden',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  color: '#ffffff',
  padding: 24,
  backgroundColor: '#332436',
  // backgroundColor: vars.color.backgroundColor, TODO: why tf doesnt this work?
});
