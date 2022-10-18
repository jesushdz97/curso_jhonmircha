import { useForm } from '@/hooks'
import { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { PeopleTemplate } from '.'
import InputPeople from './InputPeople'

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

const PeopleForm = () => {
  const { form, resetForm, handleChange } = useForm(initialForm)

  const edit = true
  const person = 'Jesus Hernandez'

  const handleSubmit = () => {}

  useEffect(() => {}, [])

  return (
    <PeopleTemplate>
      <Container className={styles.flexStyle}>
        <h1 className='fw-lighter fs-1 mb-3'> TEXTO </h1>
        <form onSubmit={() => console.log('algo')}>
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
            {edit ? 'Editar' : 'Registrar'}
          </Button>
        </form>
      </Container>
    </PeopleTemplate>
  )
}

export default PeopleForm
