import React from 'react'
import Main from '@/components/Main';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';

export const metadata = {
    title: "Brodle ⋅ Dashboard",
  };

  const page = () => {
    const isAuthenticated = true ;

    let children = (
        <Login/>
      )

    if(isAuthenticated){
        children = (<Dashboard/>)
      }

    return (
        <Main>
          {children}
        </Main>
  )
}

export default page