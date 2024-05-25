import React from 'react'

const FormComponents = ({name,type,label,placeholder = "",...rest}) => {
  return (
    <div className='flex flex-col'>
        <label htmlFor={name} className='text-lg'>{label}</label>
        <input {...rest} type={type} id={name} name={name} placeholder={placeholder} className='px-2 py-3 border border-blue-500 rounded mt-2' />
    </div>
  )
}

export default FormComponents