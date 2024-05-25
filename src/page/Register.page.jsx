import React, { useEffect, useState } from 'react'
import { ButtonComponents, ContainerComponents, ErrorComponents, FormComponents } from '../components';
import { useNavigate } from 'react-router-dom';
import useApi from '../hook/useApi';
import { Register } from '../service/auth.service';
import LoadingComponents from '../components/Loading.components';

const RegisterPage = () => {
  const nav = useNavigate();
  const {handleDealApi,loading,data,error} = useApi(Register);
  const [formData,setFormData] = useState({name:"",email:"",password:"",password_confirmation:""});
  useEffect(() => {
    if(data){
      nav("/")
    }
  },[data]);
  const handleInputChange = (e) => {
    setFormData((pre) => ({...pre,[e.target.name] : e.target.value}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleDealApi(formData);
    
  }

  
  return (
    <ContainerComponents>
      {loading ? <LoadingComponents/> : 
      <div className='center'>
      <div className='w-2/6 h-auto'>
          <h1 className='font-serif text-4xl text-center mb-10'>Login Your Contact</h1>
          {error && <ErrorComponents>{error}</ErrorComponents>} 
           <form className='space-y-2 mt-5' onSubmit={handleSubmit}>
            <FormComponents onChange={handleInputChange} value={formData.name} name="name" type="text" label={"Enter Username"} />
            <FormComponents onChange={handleInputChange} value={formData.email} label={"Enter Your Email"} type="email" name="email" placeholder='example@gmail.com' />
            <FormComponents onChange={handleInputChange} value={formData.password} name="password" type="password" label={"Enter Your Password"} />
            <FormComponents onChange={handleInputChange} value={formData.password_confirmation} name="password_confirmation" type="password" label={"Confirm Your Password"} />
            <ButtonComponents type="submit" style={"!rounded-lg"} >
              Login
            </ButtonComponents>
          </form> 
          
          <p>
            You have a account pls login  
            <button onClick={() => nav("/")} className='text-blue-500 underline'> Login</button>
          </p>
      </div>
  </div>  }
      
    </ContainerComponents>
  )
}

export default RegisterPage;