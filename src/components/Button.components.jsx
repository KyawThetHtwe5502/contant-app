import React from 'react'

const ButtonComponents = ({style,children,...rest}) => {
  return (
    <button {...rest} className={`px-2 py-3 bg-blue-500 w-full rounded ${style} text-white active:ring-2 active:ring-blue-700 duration-200`}>
        {children}
    </button>
  )
}

export default ButtonComponents;