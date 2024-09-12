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

const monthsArr = Object.keys(months)

const Calender = (props) => {
  const {demo , completeData , handleSetMood} = props
 
  
  const now = new Date();
  const currMonth = now.getMonth()
  const [selectedMonth, setSelectedMonth] = useState(Object.keys(months)[currMonth]);
  
  const[selectedYear,setSelectedYear] = useState(now.getFullYear())

  const numericMonth = monthsArr.indexOf(selectedMonth)
  const data = completeData?.[selectedYear]?.[numericMonth] || {}
  console.log('this month data ', completeData?.[selectedYear]?.[selectedMonth])
  function handleIncrementMonth(val){
    // sets value +1 -1 
    // if we hit bounds the  months, then we can adjust that is displayed instead
    if((numericMonth + val) < 0 ){
      // set the month value = 11 and decrement the year
      setSelectedYear( curr => curr - 1)
      setSelectedMonth(monthsArr[monthsArr.length-1])
    }else if((numericMonth + val) > 11){
      // set month = 0 and increment the month 
      setSelectedYear( curr => curr + 1)
      setSelectedMonth(monthsArr[0])
    }else{
      setSelectedMonth(monthsArr[numericMonth+val])
    }
  }
  
  console.log("selected month", selectedMonth)
  
  
  // const year = 2024;
  // const month = 'September';
  const monthNow = new Date(selectedYear, Object.keys(months).indexOf(selectedMonth),1)
  const firstDayofMonth = monthNow.getDay();
  const DaysInMonth = new Date(selectedYear, Object.keys(months).indexOf(selectedMonth)+1,0).getDate();
  // const totalDaysInMonth = DaysInMonth.getDate();
  const daysToDisplay = firstDayofMonth + DaysInMonth;

  const numRows = (Math.floor(daysToDisplay / 7)) + (daysToDisplay % 7 ? 1 : 0)


  return (
    <div className='flex flex-col pt-10 '>
      <div className='grid grid-cols-3'>
        <button onClick={() => handleIncrementMonth(-1)} className='mr-auto hover:text-[1.15rem] transition-all duration-100 ease-in-out'> <i className="fa-solid fa-chevron-left"></i> </button>
        <p className='text-center whitespace-nowrap capitalize font-bold text-lg textGradient'>{selectedMonth} , {selectedYear}</p>
        <button onClick={() => handleIncrementMonth(+1)} className='ml-auto hover:text-[1.15rem] transition-all duration-100 ease-in-out'><i className="fa-solid fa-chevron-right"></i></button>
      </div>

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
              
              let color = demo ?
                                    gradients.indigo[baseRating[dayIndex]] :
                                    dayIndex in data ?
                                        gradients.indigo[data[dayIndex]] :
                                        'white'
              

              return(
                <div style={{ background: color }}
                
                className={' text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg text-indigo-600'
                  +
                (isToday ? ' border-black ' : ' border-indigo-300')+
                (color === 'white' ? ' text-indigo-400' : ' text-white')
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

    </div>
  )
}

export default Calender