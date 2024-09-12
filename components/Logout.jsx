'use client'
import React from 'react'
import Button from './Button'
import { useAuth } from '@/context/AuthContext'
import { usePathname} from 'next/navigation'
import Link from 'next/link'

const Logout = () => {
    const {logout,currentUser} = useAuth();
    const pathname = usePathname();
    // console.log(pathname);

    if(!currentUser){
      return null;
    }

    if(pathname === '/'){
      return(
        <Link href={'/dashboard'}>
          <Button text="Go to Dashboard" dark/>
        </Link>
      )
    }


  return (
    <div>
        <Button text='Logout' clickHandler={logout}/>
    </div>
  )
}

export default Logout