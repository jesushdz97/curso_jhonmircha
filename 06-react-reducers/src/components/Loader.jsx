import { useSelector } from '../context'

const Loader = () => {
  const isLoading = useSelector('isLoading')

  return (
    <div className={`my-modal ${isLoading && 'is-open'}`}>
      <div className='spinner-grow text-primary' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}
export default Loader
