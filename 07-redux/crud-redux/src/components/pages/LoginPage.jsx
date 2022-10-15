import { toogleLogin as login } from '@/features/auth/authSlice'
import { useDispatch } from 'react-redux'

const LoginPage = () => {
  const dispatch = useDispatch()
  return (
    <div className='d-flex justify-content-center align-items-center min-vh-100 bg-primary'>
      <button
        className='btn btn-large btn-dark fs-1 px-5'
        onClick={() => dispatch(login())}
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage
