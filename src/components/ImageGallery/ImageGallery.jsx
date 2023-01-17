import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

export const ImageGallery = ({ images }) => {
  return(
    <ul className={s.ImageGallery}>
      {images.map(( { id, webformatURL, largeImageURL}) =>{
        return(
          <ImageGalleryItem 
          key = {id}
          webformatURL = {webformatURL}
          largeImageURL = {largeImageURL} />
        )
      })}  
</ul>
  )
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  )
};

