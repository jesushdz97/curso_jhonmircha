import React from 'react'
import './Modal.css'

const Modal = ({ children, isOpenModal, openModal, closeModal }) => {
  return (
    <article className={`modales ${isOpenModal && 'is-open'}`}>
      <div className='modales-container'>
        <button className='modales-close' onClick={closeModal}> X </button>
        {children}
      </div>
    </article>
  )
}

export default Modal
