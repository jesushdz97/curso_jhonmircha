import { readAllPeople } from '@/features/people/peopleSlice'
import { useDispatch } from 'react-redux'

const resource = 'people'
const url = `http://localhost:5000/${resource}`

const useServices = () => {
  const dispatch = useDispatch()

  const peopleService = () => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        dispatch(readAllPeople(data))
      } catch (error) {}
    }

    return { fetchData }
  }

  return { peopleService }
}

export default useServices
