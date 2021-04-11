import PropTypes from 'prop-types';

const ImageGalleryItem = ({ image, onImageClick, largeImageURL, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={image}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => onImageClick(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
