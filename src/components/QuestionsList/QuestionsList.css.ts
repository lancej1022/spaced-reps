import { style } from '@vanilla-extract/css';
import { vars } from '~/styles/index.css';

export const questionsContainer = style({
  overflowY: 'scroll',
  maxHeight: '420px',
  width: '100%',
  // transition: "all 0.15s ease-in-out", TODO: figure out how to get the appearance of the scrollbar to animate in

  '::-webkit-scrollbar': {
    background: 'transparent',
    width: '10px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
    borderRadius: '16px',
  },
});

export const questionsContainerHovered = style({
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#babac0',
  },
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
