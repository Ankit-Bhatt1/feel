'use client'
import React, { useState } from 'react'
import { baseRating, gradients } from '@/utils/data';

const months = {
  "January": "Jan",
  "February": "Feb",
  "March": "Mar",
  "April": "Apr",
  "May": "May",
  "June": "Jun",
  "July": "Jul",
  "August": "Aug",
  "September": "Sep",
  "October": "Oct",
  "November": "Nov",
  "December": "Dec"
};


const now = new Date();

const dayList = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const Calender = (props) => {
  const now = new Date();
  const currMonth = now.getMonth()
  const [selectedMonth, setSelectedMonth] = useState(Object.keys(months)[currMonth]);
  
  const[selectedYear,setSelectedYear] = useState(now.getFullYear())

  function handleIncrementMonth(){
    // sets value +1 -1 
    // if we hit bounds the  months, then we can adjust that is displayed instead
  }
  
  console.log("selected month ", selectedMonth)
  
  const {demo , data , handleSetMood} = props
  // const year = 2024;
  // const month = 'September';
  const monthNow = new Date(selectedYear, Object.keys(months).indexOf(selectedMonth),1)
  const firstDayofMonth = monthNow.getDay();
  const DaysInMonth = new Date(selectedYear, Object.keys(months).indexOf(selectedMonth)+1,0).getDate();
  // const totalDaysInMonth = DaysInMonth.getDate();
  const daysToDisplay = firstDayofMonth + DaysInMonth;

  const numRows = (Math.floor(daysToDisplay / 7)) + (daysToDisplay % 7 ? 1 : 0)


  return (
    <div className=' flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10'>
      
      {[...Array(numRows).keys()].map((row,rowIndex) => {
        return(
          <div key={rowIndex} className= ' grid grid-cols-7  gap-1 sm:gap-1 '>
            {dayList.map((dayOfWeek, daysOfWeekIndex) => {
              let dayIndex = (rowIndex * 7) + daysOfWeekIndex -(firstDayofMonth -1);
              
              let dayDisplay = dayIndex > DaysInMonth ? false : (row === 0 && daysOfWeekIndex<firstDayofMonth) ? false : true
              
              let isToday = dayIndex === now.getDate()

              if(!dayDisplay){
                return(
                  <div className='bg-white ' key={daysOfWeekIndex}/> 
                )
              }
              
              
              

              return(
                <div
                
                className={' text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg text-indigo-600'
                  +
                (isToday ? ' border-black ' : ' border-indigo-300')
                } 
                
                key={daysOfWeekIndex}>
                  <p>{dayIndex}</p>
                  {isToday && (!demo) ? <span className='text-[0.50rem] relative -top-2'>🟢</span> : ''}
                </div>
              )
            })}
          </div>
        )
      })}
    
    </div>
  )
}

export default Calender