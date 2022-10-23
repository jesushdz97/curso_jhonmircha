import { useModalState } from '@/app/store'
import { openModal, closeModal } from '@/features/modal/modalSlice'
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const MyModal = () => {
  const dispatch = useDispatch()
  const { show, message } = useModalState()

  const handleClose = () => dispatch(closeModal())

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title> Información </Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default MyModal
