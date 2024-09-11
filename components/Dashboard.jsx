import React from 'react';
import { Fugaz_One } from '@next/font/google';
import Calender from './Calender';
const fugaz = Fugaz_One({ subsets: ['latin'] , weight: ['400']});

const Dashboard = () => {
  const statues = {
    num_days: 14,
    time_remaining: '13:14:22',
    date: (new Date()).toDateString(),
  };

  const moods ={
    '&*@#&': '😭',
    'sad':'😢',
    'Existing':'😶',
    'Good':'😀',
    'Elated':'😍',
  }

  return (
    <div className=" flex flex-col flex-1 ">
      <div className=" grid grid-cols-1 sm:grid-cols-3 bg-indigo-50 text-indigo-400 rounded-full px-5 text-center ">                                                       
        {Object.keys(statues).map((status, statusIndex) => {    {/* Object.keys(statues); // ['num_days', 'time_remaining', 'date']*/}
          return (
            <div key={statusIndex} className='p-4'>
              <p className='font-medium uppercase'>{status.replaceAll('_','')}</p>                                    
              <p className={'py-3 text-base '+fugaz.className}>{statues[status]}</p>
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
            <button className={'p-4 rounded-lg purpleShadow duration-200 bg-indigo-100 hover:bg-indigo-200 ' + (index === 4 ? ' col-span-2 sm:col-span-1 ' : ' ')} key={index}>
              <p className='text-xl'>{moods[mood]}</p>
              <p className={''+fugaz.className }>{mood}</p>
            </button>
          )
        })}
      </div>
      <Calender/>
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