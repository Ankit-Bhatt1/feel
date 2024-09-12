'use client'
import React, { useState } from 'react'
import Button from './Button'
import { Fugaz_One } from '@next/font/google';
import { useAuth } from '@/context/AuthContext';
const fugaz = Fugaz_One({ subsets: ['latin'] , weight: ['400']});
import PasswordLengthWarning from './PasswordLengthWarning';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isRegitser, setIsRegister] = useState(false)
  const [authenticating,setAuthenticating]= useState(false);
  const {signup,login} = useAuth()
  
  async function handleSubmit(){
    if(!email || !password || password.length < 6){
      return (
        alert('Password length less than 6')
      )
    }
    setAuthenticating(true)
    try {
      if(isRegitser){
        console.log('Singning up a new user')
        await signup(email, password)
      }else{
        console.log('Loggin in existing user')
        await login(email,password)
      }

    } catch (error) {
      console.log(error.message);
    }
    finally{
      setAuthenticating(false)
    }
  }

  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4 '>
      <h3 className={'text-4xl '+ fugaz.className}>{isRegitser ? 'Register':'Log In'}</h3>
      <p>You're one step away !</p>
      <input value={email} onChange={(e)=>{setEmail(e.target.value)}} className='w-full max-w-[400px] px-4 py-2 border border-solid hover:border-indigo-500 rounded-full focus:border-indigo-600 border-indigo-300' placeholder='Email'/>
      <input value={password} onChange={(e)=>{setPassword(e.target.value)}} className='w-full max-w-[400px] px-4 py-2 border border-solid hover:border-indigo-500 rounded-full focus:border-indigo-600 border-indigo-300' placeholder='Password' type='password'/>
      <div>
        <Button clickHandler={handleSubmit} text={authenticating ? ' Submiting ' : ' Submit'} full/> 
      </div>
      <p>{isRegitser ? `Already have an Account` : `Don't have an Account ?`} <button onClick={()=> setIsRegister(!isRegitser)} className='text-indigo-600 cursor-pointer'>{isRegitser ? 'Sign In' : 'SignUp'}</button></p> 
    </div>
  )
}

export default Login