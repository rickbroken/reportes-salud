import React from 'react';

const ContInputText = ({label,placeholder}) => {
  return (
    <>
      <p>{label}:</p>
      <input 
        className='border-2 outline-gray-400 focus:shadow-md rounded py-1 px-2 w-full'
        type="text"
        placeholder={placeholder}
      />
    </>
  );
}
 
export default ContInputText;