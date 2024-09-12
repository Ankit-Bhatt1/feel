'use client'
import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const CallToAction = () => {
    const {currentUser} = useAuth()
    if(currentUser){
        return(
            <div className='max-w-[600px] mx-auto flex items-center justify-center h-full pt-5'>
            <Link href={'/dashboard'}>
                <Button text='Go to dashboard' dark/>
            </Link>
            </div> 
        )
    }

  return (
    <div className='max-w-[600px] mx-auto flex items-center justify-center h-full pt-5'>
        <Link href={'/dashboard'}>
            <Button text='Login'/>
        </Link>
    </div>
  )
}

export default CallToAction