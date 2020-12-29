import React from 'react';
import Spinner from 'react-loader-spinner';
import style from './Loader.css';

function LoaderItem() {
  return (
    <div className={style.Loader}>
      <Spinner
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}

export default LoaderItem;
