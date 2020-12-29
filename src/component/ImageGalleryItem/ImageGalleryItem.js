import PT from 'prop-types';
import style from './ImageGalleryItem.css';

function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpenModal }) {
  return (
    <li className={style.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className={style.ImageGalleryItem_image}
        onClick={onOpenModal}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PT.string.isRequired,
  tags: PT.string.isRequired,
  webformatURL: PT.string.isRequired,
};

export default ImageGalleryItem;
