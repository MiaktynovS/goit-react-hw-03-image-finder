import { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';


export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleBackdrop = e => {
    e.stopPropagation();
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackdrop}>
        <div className={s.Modal}>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>,
      document.querySelector('#portal')
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
};