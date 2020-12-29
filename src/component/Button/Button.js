import PT from 'prop-types';
import style from './Button.css';

function Button({ onLoadMore }) {
  return (
    <button type="button" className={style.Button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onLoadMore: PT.func.isRequired,
};

export default Button;
