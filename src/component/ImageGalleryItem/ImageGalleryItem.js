import PropTypes from 'prop-types';
import './ImageGalleryItem.css';

function ImageGalleryItem({ webformatURL, largeImageURL, tags, onOpenModal }) {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        data-source={largeImageURL}
        className="ImageGalleryItem_image"
        onClick={onOpenModal}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
