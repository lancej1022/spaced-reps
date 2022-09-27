import { title, unformattedTitle, url } from '~/App';
import { ReminderInterface } from '../QuestionCard/QuestionCard';
import { currentReminder } from './SaveReminderForm';

/**
 * function used to generate the key and reminder information so it can be saved in chrome storage
 * @param formEvent the submitted form event
 * @param options the options from the <input type="select"> element
 */
export const createSaveableReminder = (
  formEvent: Event & {
    submitter: HTMLElement;
  } & {
    currentTarget: HTMLFormElement;
    target: Element;
  },
  // options: Array<{ selected: boolean; value: string }> = []
  options?: HTMLOptionsCollection
): { key: string; userResponse: ReminderInterface } => {
  const formData = new FormData(formEvent.target as HTMLFormElement);
  const formElements = Object.fromEntries(formData);
  const selectedCategories = [];

  if (options) {
    for (let option of options) {
      if (option.selected === true) selectedCategories.push(option.value);
    }
  }

  const userResponse: ReminderInterface = {
    daysBeforeReminder: String(formElements.daysBeforeReminder),
    name: currentReminder()?.name ?? title(),
    url: currentReminder()?.url ?? url(),
    timeStamp: new Date().toISOString(),
    categories: selectedCategories,
    notes: formElements.notes?.toString() ?? '',
  };

  let key = title();
  // TODO: this might be unnecessary -- we can probably just rely on `currentReminder.name` when present and fallback `title()`
  if (url().includes('leetcode')) {
    key = unformattedTitle();
  } else if (currentReminder()?.name) {
    key = currentReminder()?.name ?? title();
  }
  console.log('unformattedTitle()', unformattedTitle());
  console.log('title()', title());
  console.log('key', key);
  return { key, userResponse };
};
