import { createSignal, createEffect } from 'solid-js';

import * as styles from './LoginForm.css';

const [count, setCount] = createSignal(0);

export default function LoginForm() {
  function add() {
    setCount(count() + 1);
  }

  function remove() {
    setCount(count() - 1);
  }

  createEffect(() => {
    console.log(`hello ${count()}`);
  });

  return (
    <form class={styles.form}>
      <label htmlFor="login-form-username" class={styles.loginFormLabel}>
        Username
      </label>
      <input
        class={styles.loginFormInput}
        id="login-form-username"
        type="text"
        placeholder="LukeSkywalker357"
        name="username"
      />
      <label htmlFor="login-form-password" class={styles.loginFormLabel}>
        Password
      </label>
      <input
        class={styles.loginFormInput}
        id="login-form-password"
        type="password"
        placeholder="****"
        name="password"
      />
      <input type="submit" value="Login" />
      {/* <button onClick={add}>Add</button>
      <button onClick={remove}>Remove</button>
      <p>Current count is {count()}</p> */}
    </form>
  );
}
