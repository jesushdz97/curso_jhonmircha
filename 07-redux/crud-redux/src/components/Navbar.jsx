import logoJs from '@/assets/logo-js.png'
import { toogleLogin as logout } from '@/features/auth/authSlice'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()
  return (
    <nav className='container-fluid shadow bg-primary'>
      <div className='container d-flex justify-content-between align-items-center py-3'>
        <img
          src={logoJs}
          alt=''
          className='rounded'
          style={{ width: '4rem' }}
        />
        <h4 className='d-none d-md-block text-white fw-bold'>
          Jesus Hernandez
        </h4>
        <button
          className='btn btn-dark fw-semibold'
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div>
    </nav>
  )
}
export default Navbar
