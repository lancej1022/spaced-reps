import { style } from '@vanilla-extract/css';

const heading1 = style({
  fontSize: '1.25rem',
});
const saveReminderForm = style({
  minHeight: '90%',
  width: '100%',
});

const inputWrapper = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateAreas: `"numberLabel numberInput"
   "textLabel textLabel"`,
  gridTemplateColumns: '4fr 1fr',
  gap: '10px',
  marginTop: '16px',
});
const btnWrapper = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateAreas: 'input button button',
  gridTemplateColumns: '2fr 2fr',
  gap: '10px',
});

const numberInput = style({
  width: '100%',
  border: 'none',
  borderRadius: '4px',
  textAlign: 'center',
  paddingLeft: '15px',
});

const textAreaWrapper = style({
  display: 'grid',
  gridTemplateRows: 'auto',
  gridTemplateAreas: `"textLabel"
   "textInput"`,
  minWidth: '100%',
  marginBottom: '24px',
});

const textInput = style({
  width: '100%',
  minHeight: '150px',
  borderRadius: '4px',
});

const categoriesSelect = style({
  borderRadius: '4px',
});

const returnLink = style({
  backgroundColor: '#fff',
  borderRadius: '4px',
  color: '#000',
  padding: '8px',
  textDecoration: 'none',
  textAlign: 'center',
});

export default {
  heading1,
  saveReminderForm,
  inputWrapper,
  btnWrapper,
  numberInput,
  textAreaWrapper,
  textInput,
  categoriesSelect,
  returnLink,
};
