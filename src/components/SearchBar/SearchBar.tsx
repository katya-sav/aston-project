import styles from './SearchBar.module.css';

export const SearchBar = () => {
  return (
    <form className={styles.form}>
      <input className={styles.input} placeholder="Search anime" />
    </form>
  );
};
