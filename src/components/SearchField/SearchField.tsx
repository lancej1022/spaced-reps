import * as rootStyles from "~/styles/index.css";

import { existingReminders, setFilteredReminders } from "~/App";
import * as styles from "./SearchField.css";
export default function SearchField() {
  let searchInput: HTMLInputElement | undefined = undefined;

  function handleIconClick() {
    searchInput?.focus();
  }

  const handleSearch = () => {
    const searchValue = searchInput?.value ?? "";
    if (!searchValue) {
      setFilteredReminders(existingReminders());
      return;
    }

    const matchingReminders = existingReminders().filter((reminderTouple) => {
      const returnVal = reminderTouple[1].name.toLowerCase().includes(searchValue.toLowerCase());
      return returnVal;
    });

    setFilteredReminders(matchingReminders);
  };

  return (
    <>
      <label class={rootStyles.visuallyHidden} htmlFor="searchfield">
        Search
      </label>
      <div class={styles.searchFieldWrapper}>
        <input
          ref={searchInput}
          class={styles.input}
          id="searchfield"
          name="searchfield"
          type="search"
          placeholder="Search"
          onInput={handleSearch}
        />
        <svg
          class={styles.searchIcon}
          aria-hidden="true"
          onClick={handleIconClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 19.9 19.7"
        >
          <title id="title">Search Icon</title>
          <desc id="desc">A magnifying glass icon.</desc>
          <g class="search-path" fill="none" stroke="#fff">
            <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
            <circle cx="8" cy="8" r="7" />
          </g>
        </svg>
      </div>
    </>
  );
}
