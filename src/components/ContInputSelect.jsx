import React from 'react';

const ContInputSelect = ({label}) => {
  return (
    <>
      <p>{label}:</p>
      <select className='w-full border-2 py-1 rounded'>
        <option value="">Selecione un opcion</option>
        <option value="SI">SI</option>
        <option value="NO">NO</option>
      </select>
    </>
  );
}
 
export default ContInputSelect;