import { add, sub } from '@/features/counter/counterSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

export const CounterRedux = () => {
  const state = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div className='p-4 font-extralight'>
      <h1 className='text-6xl font-medium mb-10'>Contador Redux</h1>
      <div className='flex justify-center gap-4'>
        <button className='btn bg-blue-700' onClick={() => dispatch(add(5))}>
          +5
        </button>
        <button className='btn bg-blue-500' onClick={() => dispatch(add(1))}>
          +
        </button>
        <h2 className='text-5xl font-normal'> {state} </h2>
        <button className='btn bg-red-500' onClick={() => dispatch(sub(1))}>
          -
        </button>
        <button className='btn bg-red-700' onClick={() => dispatch(sub(5))}>
          -5
        </button>
      </div>
    </div>
  )
}
