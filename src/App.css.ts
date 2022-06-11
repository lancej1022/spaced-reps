import { style } from '@vanilla-extract/css';

import { themeClass, vars } from '~/styles/index.css';

export const app = style({
  display: 'grid',
  placeItems: 'center',
  width: '400px',
  height: '100%',
  fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif',
  color: '#ffffff',
  padding: 24,
  backgroundColor: '#332436',
  // backgroundColor: vars.color.backgroundColor, TODO: why tf doesnt this work?
});

export const actionButton = style({
  display: 'inline-block',
  cursor: 'pointer',
  textDecoration: 'none',
  border: `${vars.color.neon} 0.125em solid`,
  backgroundColor: 'hsl(343deg 100% 54% / 70%)',
  color: '#ffffff',
  padding: '0.25em 1em',
  borderRadius: '4px',
});

export const anchorBtn = style({
  padding: '8px 16px',
  marginTop: '24px',
});
