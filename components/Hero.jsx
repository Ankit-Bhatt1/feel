import { Fugaz_One } from '@next/font/google';
import React from 'react'
const fugaz = Fugaz_One({ subsets: ['latin'] , weight: ['400']});
import Button from './Button';
import Calender from './Calender';
const Hero = () => {
  return (
    <div className = 'py-10 sm:py-14 mid:py-20'>
      <h1 className={'text-5xl sm:text-text-1xl mid:text-7xl text-center ' + fugaz.className}>
        <span className='textGradient'>Feel </span>  helps you track your <span className='textGradient'> daily</span> mood !
      </h1>
      <h2 className={'mt-3 text-2xl sm:text-2xl mid:text-6xl text-center ' + fugaz.className}>
        <span>😀 😢 😡 😱 😴 😐 😔 😂 🤔</span>
      </h2>
      <p className={'mt-6 text-lg sm:text-xl md:text-2xl text-center font-sans '}>Create your mood record and see how you feel on <span className='font-medium '>" every day of every year ".</span></p>
      <div className='py-5 grid grid-cols-2 gap-4 w-fit mx-auto'>
        <Button text='SignUp'/>
        <Button text='Login' dark/>
      </div>
      <Calender demo/>
    </div>
  )
}

export default Hero