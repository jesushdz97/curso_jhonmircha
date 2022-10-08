import { Modal } from './components'
import Loader from './components/Loader'
import { CrudApiContextProvider } from './context'
import { CrudApi } from './page'

const App = () => {
  return (
    <CrudApiContextProvider>
      <CrudApi />
      <Loader />
    </CrudApiContextProvider>
  )
}
export default App
