import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const ModalPortal = ({ children, isOpenModal, closeModal }) => {
  return ReactDOM.createPortal(
    <article className={`modales ${isOpenModal && 'is-open'}`}>
      <div className='modales-container'>
        <button className='modales-close' onClick={closeModal}>
          X
        </button>
        {children}
      </div>
    </article>,
    document.getElementById('modal'),
  )
}

export default ModalPortal
