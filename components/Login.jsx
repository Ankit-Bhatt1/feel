import React from 'react'
import Button from './Button'
import { Fugaz_One } from '@next/font/google';
const fugaz = Fugaz_One({ subsets: ['latin'] , weight: ['400']});

const Login = () => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center gap-4 '>
      <h3 className={'text-4xl '+ fugaz.className}>Log In / Register</h3>
      <p>You're one step away !</p>
      <input className='w-full max-w-[400px] px-4 py-2 border border-solid hover:border-indigo-500 rounded-full focus:border-indigo-600 border-indigo-300' placeholder='Email'/>
      <input className='w-full max-w-[400px] px-4 py-2 border border-solid hover:border-indigo-500 rounded-full focus:border-indigo-600 border-indigo-300' placeholder='Password' type='password'/>
      <div>
        <Button text="Submit" full/> 
      </div>
      <p>Don't have an Account ? <span className='text-indigo-600 cursor-pointer'>SignUp</span></p> 
    </div>
  )
}

export default Login