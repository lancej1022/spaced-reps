import { style } from '@vanilla-extract/css';

const questionsContainer = style({
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

export default {
  questionsContainer,
  questionsContainerHovered,
};
