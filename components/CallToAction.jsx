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
                <Button className="text-center" text='Go to dashboard'/>
            </Link>
            </div> 
        )
    }

  return (
    <div className='py-5 grid grid-cols-2 gap-4 w-fit mx-auto'>
        <Link href={'/dashboard'}>
            <Button text='Login' dark/>
        </Link>
    </div>
  )
}

export default CallToAction