import { LOGIN } from '@/routes'
import { useNavigate } from 'react-router-dom'

const styles = {
  container:
    'd-flex flex-column justify-content-center align-items-center bg-primary text-white fw-bold min-vh-100',
}

const PageNotFound = () => {
  const navigate = useNavigate()

  setTimeout(() => {
    navigate(-1)
  }, 1500)

  return (
    <div className={styles.container}>
      <h1 className='fs-1 lh-lg'>página no encontrada</h1>
    </div>
  )
}
export default PageNotFound
