import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  return (
    <form className={styles.root}>
      <input placeholder='Поиск пиццы...' type='text' />
    </form>
  );
}

export default Search;