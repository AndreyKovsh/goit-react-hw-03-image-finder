import style from './Searchbar.css';
import PT from 'prop-types';

function Searchbar({ onHandleSubmit, onSearchQueryChange, value }) {
  return (
    <header className={style.Searchbar}>
      <form className={style.SearchForm} onSubmit={onHandleSubmit}>
        <button type="submit" className={style.SearchForm__button}>
          <span className={style.SearchForm__button__label}>Search</span>
        </button>

        <input
          className={style.SearchForm__input}
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onSearchQueryChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onHandleSubmit: PT.func.isRequired,
  onSearchQueryChange: PT.func.isRequired,
  value: PT.string.isRequired,
};

export default Searchbar;
