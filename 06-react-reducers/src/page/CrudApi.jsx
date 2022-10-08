import { CrudApiForm, CrudApiTable, Header } from '../components'
import Loader from '../components/Loader'

const CrudApi = () => {
  return (
    <>
      <Header />
      <CrudApiForm />
      <CrudApiTable />
      <Loader />
    </>
  )
}
export default CrudApi
