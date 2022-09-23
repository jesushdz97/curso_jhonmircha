import React from 'react'
import ContactForm from '../form-validations/ContactForm'
import SearchSongs from '../songs/SearchSongs'
import useModal from '../../hooks/useModal'
import Modal from './Modal'
import ModalPortal from './ModalPortal'

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)
  const [isOpenModal2, openModal2, closeModal2] = useModal(false)
  const [isOpenForm, openForm, closeForm] = useModal(false) // Abriendo el formulario de contact
  const [isOpenSong, openSong, closeSong] = useModal(false) // Abriendo el formulario song
  const [isOpenModalP, openModalP, closeModalP] = useModal(false) // ModalPortal

  return (
    <>
      <div className='bg-primary text-white container rounded py-1'>
        <h2 className='text-uppercase'> Modales </h2>
      </div>
      <button className='btn btn-primary mt-3 mx-1' onClick={openModal1}>
        Modal 1
      </button>
      <Modal isOpenModal={isOpenModal1} closeModal={closeModal1}>
        <h5> Modal 1 </h5>
        <p> Texto del modal 1 </p>
        <img src='https://placeimg.com/200/200/animals' alt='' />
      </Modal>

      <button className='btn btn-primary mt-3 mx-1' onClick={openModal2}>
        Modal 2
      </button>
      <Modal isOpenModal={isOpenModal2} closeModal={closeModal2}>
        <h5> Modal 2 </h5>
        <p> Texto del modal 2 </p>
        <img src='https://placeimg.com/200/200/nature' alt='' />
      </Modal>

      {/** Formulario anterior en un modal  */}
      <button
        className='btn btn-warning text-white mt-3 mx-1'
        onClick={openForm}>
        ContactForm
      </button>
      <Modal isOpenModal={isOpenForm} closeModal={closeForm}>
        <ContactForm />
      </Modal>

      {/** Formulario anterior en un modal  */}
      <button className='btn btn-primary mt-3 mx-1' onClick={openSong}>
        Song Search
      </button>
      <Modal isOpenModal={isOpenSong} closeModal={closeSong}>
        <SearchSongs />
      </Modal>

      <button className='btn btn-secondary mt-3 mx-1' onClick={openModalP}>
        Modal Portal
      </button>
      <ModalPortal isOpenModal={isOpenModalP} closeModal={closeModalP}>
        <br /> <br />
        <p>
          Este es el contenido del portal modal: Clase 52. Curso de React de
          Jhon Mircha.
        </p>
        <img src='https://placeimg.com/400/400/tech' alt='img_tech.jpgf' />
      </ModalPortal>
    </>
  )
}

export default Modals
