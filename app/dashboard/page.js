import React from 'react'
import Main from '@/components/Main';
import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import { useAuth } from '@/context/AuthContext';
import Loading from '@/components/Loading';

export const metadata = {
    title: "Feel ⋅ Dashboard",
  };

  const page = () => {
    // const {currentUser,loading} = useAuth

  //   let children = (
  //       <Login/>
  //     )

  //   if(loading){
  //     children=(<Loading/>)
  //   }

  //   if(currentUser){
  //       children = (<Dashboard/>)
  //     }

    return (
        <Main>
          <Dashboard/>
        </Main>
  )
}

export default page