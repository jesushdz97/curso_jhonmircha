import logoJs from '@/assets/logo-js.png'
import { toogleLogin as logout } from '@/features/auth/authSlice'
import { resetPeople } from '@/features/people/peopleSlice'
import { ROOT } from '@/routes'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(resetPeople())
    dispatch(logout())
  }

  return (
    <nav className='container-fluid shadow bg-primary mb-5'>
      <div className='container d-flex justify-content-between align-items-center py-3'>
        <Link to={ROOT}>
          <img
            src={logoJs}
            alt=''
            className='rounded'
            style={{ width: '4rem' }}
          />
        </Link>

        <h4 className='d-none d-md-block text-white fw-bold'>
          Jesus Hernandez
        </h4>
        <button className='btn btn-dark fw-semibold' onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  )
}
export default Navbar
