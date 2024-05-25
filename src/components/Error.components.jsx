import React from 'react'

const ErrorComponents = ({children}) => {
  return (
    <div className='text-red-500 bg-white px-2 py-3 rounded shadow'>{children}</div>
  )
}

export default ErrorComponents