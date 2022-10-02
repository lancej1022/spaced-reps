import { style } from '@vanilla-extract/css';

const questionsContainer = style({
  overflowY: 'scroll',
  maxHeight: '100%',
  width: '100%',
  borderRadius: '8px',
  paddingLeft: '10px', // the scrollbar belows takes up 10px width so we need to account for that
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

const questionsContainerHovered = style({
  '::-webkit-scrollbar-thumb': {
    backgroundColor: '#babac0',
  },
});

const actionButton = style({
  display: 'inline-block',
  cursor: 'pointer',
  textDecoration: 'none',
  padding: '0.25em 1em',
  borderRadius: '4px',
});

const anchorBtn = style({
  padding: '8px 16px',
  marginTop: '24px',
});

export default {
  questionsContainer,
  questionsContainerHovered,
  actionButton,
  anchorBtn,
};
