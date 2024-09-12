'use client'
import React from 'react'
import Button from './Button'
import { useAuth } from '@/context/AuthContext'

const Logout = () => {
    const {logout} = useAuth();
  return (
    <div>
        <Button text='logout' clickHandler={logout}/>
    </div>
  )
}

export default Logout