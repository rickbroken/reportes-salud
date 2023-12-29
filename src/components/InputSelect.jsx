import React from 'react';
import 'tailwindcss/tailwind.css';

const InputSelect = () => {
  return (
    <select className='w-full border-2 py-1 rounded'>
      <option value="">Selecione un documento</option>
      <option value="CN">CN</option>
      <option value="RC">RC</option>
      <option value="TI">TI</option>
      <option value="CC">CC</option>
      <option value="PPT">PPT</option>
    </select>
  );
}
 
export default InputSelect;