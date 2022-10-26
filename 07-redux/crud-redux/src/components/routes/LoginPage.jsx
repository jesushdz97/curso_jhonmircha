import { toogleLogin as login } from '@/features/auth/authSlice'
import { Container, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
  const dispatch = useDispatch()

  return (
    <Container
      fluid
      className='d-flex justify-content-center align-items-center min-vh-100 bg-primary'
    >
      <Button
        variant='dark'
        className='fs-1 px-5'
        onClick={() => dispatch(login())}
      >
        Login
      </Button>
    </Container>
  )
}

export default LoginPage
