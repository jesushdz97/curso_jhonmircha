import { PEOPLE } from '@/routes'
import { usePeopleState } from '@/app/store'
import { useForm } from '@/hooks'
import { create, update } from '@/services/peopleService'
import { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { PeopleTemplate } from '.'
import { openModal } from '@/features/modal/modalSlice'
import InputPeople from './InputPeople'
import { useDispatch } from 'react-redux'

const styles = {
  height: { height: '25rem' },
  flexStyle: 'd-flex flex-column align-items-center justify-content-center p-4',
}

const initialForm = {
  name: '',
  lastname: '',
  age: '',
  sex: '',
}

const doFullname = (name, lastname) => `${name} ${lastname}`.toUpperCase()

const PeopleForm = () => {
  const { form, setForm, resetForm, handleChange } = useForm(initialForm)
  const { dataToEdit } = usePeopleState()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOpenModal = (message) => dispatch(openModal(message))

  useEffect(() => {
    dataToEdit ? setForm(dataToEdit) : resetForm()
  }, [dataToEdit])

  const handleSubmit = async (event) => {
    event.preventDefault()

    dataToEdit
      ? (await update(form)) && handleOpenModal('¡Actualizado con éxito!')
      : (await create(form)) && handleOpenModal('!Registrado con éxito!')

    navigate(`/${PEOPLE}`)
  }

  let fullname = doFullname(dataToEdit?.name, dataToEdit?.lastname) || null

  return (
    <PeopleTemplate>
      <Container className={styles.flexStyle}>
        <h1 className='fw-lighter fs-1 mb-3'>
          {dataToEdit ? `EDITANDO A: ${fullname}` : 'FORMULARIO DE REGISTRO'}
        </h1>
        <form onSubmit={handleSubmit}>
          <Row xs={1} md={2} className='g-2 mb-3'>
            <InputPeople
              type='text'
              label='Nombre'
              name='name'
              handleChange={handleChange}
              value={form.name}
            />
            <InputPeople
              type='text'
              label='Apellido'
              name='lastname'
              handleChange={handleChange}
              value={form.lastname}
            />
            <InputPeople
              type='text'
              label='Edad'
              name='age'
              handleChange={handleChange}
              value={form.age}
            />
            <InputPeople
              type='text'
              label='Sexo'
              name='sex'
              handleChange={handleChange}
              value={form.sex}
            />
          </Row>
          <Button size='lg' type='submit'>
            {dataToEdit ? 'Editar' : 'Registrar'}
          </Button>
        </form>
      </Container>
    </PeopleTemplate>
  )
}

export default PeopleForm
