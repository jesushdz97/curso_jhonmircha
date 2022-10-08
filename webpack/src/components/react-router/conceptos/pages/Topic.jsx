import React from 'react'
import { useParams } from 'react-router-dom'

const Topic = () => {
  const { topic } = useParams()

  return (
    <>
      <h6 className='text-uppercase'>
        TOPIC: <i> {topic} </i>
      </h6>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis,
        omnis ut quod ratione obcaecati itaque iure in quaerat nam accusamus vel
        dignissimos impedit a? Dolorum, nihil non. Quidem, harum aliquam.
      </p>
    </>
  )
}

export default Topic
