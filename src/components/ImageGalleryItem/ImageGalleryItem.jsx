import { Component } from "react";
import { PropTypes } from "prop-types";
import { Modal } from "../Modal/Modal"
import s from "./ImageGalleryItem.module.css"

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  }

  onToggleModal = () => {
    this.setState(prev => ({ isModalOpen: !prev.isModalOpen }));
  }

  render(){
    const { onToggleModal } = this;
    const { isModalOpen } = this.state;
    const { webformatURL, largeImageURL } = this.props;
    return(
      <li className = {s.gallerItem}  onClick={this.onToggleModal}>
      <img src={webformatURL} alt="" className={s.ImageGalleryItemImage}/>
      {isModalOpen && (<Modal largeImageURL={largeImageURL} onClose={onToggleModal} />) }
      </li>
    )
  }
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  isModalOpen: PropTypes.func,
  onToggleModal: PropTypes.func,  
};




