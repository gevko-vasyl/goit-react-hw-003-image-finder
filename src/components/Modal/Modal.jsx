import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modalRoot');

class Modal extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener('keydown', this.handleOverlayClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleOverlayClick);
  }
  handleOverlayClick = e => e.code === 'Escape' && this.props.toggleModal();
  handleBackDropClick = e =>
    e.target === e.currentTarget && this.props.toggleModal();

  render() {
    const { largeImg } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackDropClick}>
        <div className="Modal">
          <img src={largeImg} alt="" />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};

export default Modal;
