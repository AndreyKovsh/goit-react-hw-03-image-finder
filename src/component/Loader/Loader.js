import Loader from 'react-loader-spinner';
import './Loader.css';

function LoaderItem() {
  return (
    <div className="Loader">
      <Loader
        type="Grid"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={0}
      />
    </div>
  );
}

export default LoaderItem;
