import React, { useEffect, useRef, useState } from 'react';
import './Modal.scss';

const Modal = ({ title, children, onClose, isOpen }) => {
  const modal = useRef();
  const wrapper = useRef();
  const background = useRef();

  useEffect(() => {
    if (isOpen) {
      modal.current.className = "modal open bounce";
      background.current.className = "modal_background open";
      wrapper.current.className = "modal_wrapper open";
    } else {
      modal.current.className = "modal close bounce";
      background.current.className = "modal_background close"
      wrapper.current.className = "modal_wrapper close"
    }
  }, [ isOpen ]);

  const onClickBack = e => back(e);
  const onClickBackground = e => back(e);

  const back = e => {
    if (onClose) {
      onClose(e);
    }
  }

  return (
    <div className="modal_wrapper" ref={wrapper}>
      <div className="modal_background" ref={background} onClick={onClickBackground}></div>
      <div className="modal" ref={modal}>
        <div className="modal_header">
          <span className="modal_back_btn" onClick={onClickBack}>
            <svg 
              height="26px" 
              id="Layer_1" 
              style={{enableBackground: 'new 0 0 512 512'}}
              version="1.1" 
              viewBox="0 0 512 512" 
              xmlns="http://www.w3.org/2000/svg">
              <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/>
            </svg>
          </span>
          <h2 className="modal_title">{ title }</h2>
          <div style={{width: '50px'}}></div>
        </div>
        <div className="modal_section">
          { children }
        </div>
      </div>
    </div>
  )
}

export default Modal;