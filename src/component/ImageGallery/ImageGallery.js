// import PT from 'prop-types';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import style from './ImageGallery.css';

// function ImageGallery({ images, onOpenModal }) {
//   return (
//     <ul className={style.ImageGallery}>
//       {images.map(({ id, webformatURL, largeImageURL, tags }) => (
//         <ImageGalleryItem
//           key={id}
//           webformatURL={webformatURL}
//           largeImageURL={largeImageURL}
//           tags={tags}
//           onOpenModal={onOpenModal}
//         />
//       ))}
//     </ul>
//   );
// }

// ImageGallery.propTypes = {
//   images: PT.array.isRequired,
//   onOpenModal: PT.func.isRequired,
// };

// export default ImageGallery;

import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

function ImageGallery({ images, onOpenModal }) {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
          tags={tags}
          onOpenModal={onOpenModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};

export default ImageGallery;
