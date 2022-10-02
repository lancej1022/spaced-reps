import * as rootStyles from '~/styles/index.css';
import styles from './SearchField.css';
import { createSignal } from 'solid-js';

export const [searchText, setSearchText] = createSignal('');

export default function SearchField() {
  let searchInput: HTMLInputElement | undefined = undefined;

  function handleIconClick() {
    searchInput?.focus();
  }

  const handleSearch = () => {
    setSearchText(searchInput?.value ?? '');
  };

  return (
    <>
      <label class={rootStyles.visuallyHidden} for="searchfield">
        Search
      </label>
      <div class={`${styles.searchFieldWrapper} mb-2`}>
        <input
          ref={searchInput}
          class={`${styles.input} bg-slate-600`}
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
