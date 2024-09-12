import React from 'react';

const Loading = () => {
  return (
    <div className='flex flex-col flex-1 justify-center items-center'>
      <i className="fa-solid fa-spinner fa-spin" style={{ fontSize: '30px' }}></i>
    </div>
  );
};

export default Loading;