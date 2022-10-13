import { Navbar } from '@/components'

const PeopleTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
export default PeopleTemplate
