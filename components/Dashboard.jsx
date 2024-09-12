'use client'
import React, { useEffect, useState } from 'react';
import { Fugaz_One } from '@next/font/google';
import Calender from './Calender';
import { useAuth } from '@/context/AuthContext';
import { doc, setDoc} from 'firebase/firestore';
import { db } from '@/firebase';
import Loading from './Loading';
import Login from './Login';

const fugaz = Fugaz_One({ subsets: ['latin'] , weight: ['400']});


const Dashboard = () => {
  const {currentUser , userDataObj, setuserDataObj, loading} = useAuth()
  const [data,setData] = useState({})
  const now = new Date();

  function countValues(){
    let total_number_of_days = 0;
    let sum_moods = 0;
    for(let year in data){
      for(let month in data[year]){
        for(let day in data[year][month]){
          let days_mood = data[year][month][day]
          total_number_of_days++
          sum_moods += days_mood
        }
      }
    }
    return { num_days : total_number_of_days, average_mood : sum_moods / total_number_of_days }
  }

  const statues = {
    ...countValues(),
    time_remaining: `${23-now.getHours()}hrs : ${60-now.getMinutes()}min `,
  };

  async function handleSetMood(mood){
    // update the current state
    // update the global state
    // update the firebase

    
    const day = now.getDate(); 
    const month = now.getMonth();
    const year = now.getFullYear();

    try {
    const newData = {...userDataObj}

    if(!newData?.[year]){
      newData[year]={}
    }
    if(!newData?.[year]?.[month]){
      newData[year][month]={}
    }

    newData[year][month][day] = mood
    setuserDataObj(newData)

    //update firebase

    const docRef = doc(db,'users',currentUser.uid);
    const res = await setDoc(docRef, {
      [year]:{
        [month]:{
          [day]:mood
          }
        }
      },{merge : true})
    } 
  catch (error) {
    console.log(error)
  }
  }

 

  const moods ={
    '&*@#&': '😭',
    'sad':'😢',
    'Existing':'😶',
    'Good':'😀',
    'Elated':'😍',
  }

  useEffect(()=>{
    if(!currentUser || !userDataObj){
      return
    }

    setData(userDataObj);

  },[currentUser,userDataObj])


  let children = (
    <Login/>
  )

if(loading){
  <Loading/>
}

if(currentUser){
    children = (<Dashboard/>)
  }

if(loading){
  return (
    <Loading/>
  )
}

if(!currentUser){
  return (
    <Login/>
  )
}

  return (
    <div className=" flex flex-col flex-1 ">
      <div className=" grid grid-cols-1 sm:grid-cols-3 bg-indigo-50 text-indigo-400 rounded-full px-5 text-center ">                                                       
        {Object.keys(statues).map((status, statusIndex) => {    {/* Object.keys(statues); // ['num_days', 'time_remaining', 'date']*/}
          return (
            <div key={statusIndex} className='p-4'>
              <p className='font-medium capitalize text-xs sm:text-sm truncate'>{status.replaceAll('_',' ')}</p>                                    
              <p className={'text-base sm:text-lg truncate '+ fugaz.className}>{statues[status]}{status === 'num_days' ? ' 🔥 ' : '  '}</p>
            </div>
          );
        })}
      </div>
      <h1 className={'text-3xl py-3 text-center '+ fugaz.className}>
          How do you <span className='textGradient'>feel</span> today ?
      </h1>

      <div className='grid grid-cols-2 sm:grid-cols-5 gap-4'>
        {Object.keys(moods).map((mood,index) => {
          return(
            <button onClick={(mood)=>{
              const currentMoodValue = index + 1;
              handleSetMood(currentMoodValue);
            }}
            className={'p-4 rounded-lg purpleShadow duration-200 bg-indigo-100 hover:bg-indigo-200 ' + (index === 4 ? ' col-span-2 sm:col-span-1 ' : ' ')} key={index}>
              <p className='text-xl'>{moods[mood]}</p>
              <p className={''+fugaz.className }>{mood}</p>
            </button>
          )
        })}
      </div>
      <Calender completeData={data} handleSetMood={handleSetMood}/>
      
    </div>
  );
};

export default Dashboard;
                                                                    // const arr = {
                                                                    //   a: 2,
                                                                    //   b: 3,
                                                                    //   c: 4,
                                                                    // };

                                                                    // console.log(Object.keys(arr).map((a, b) => arr[a]));
                                                                    // output : [2,3,4]