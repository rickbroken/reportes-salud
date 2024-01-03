'use client'
import React from 'react';
import InputSelect from './InputSelect';
import 'tailwindcss/tailwind.css';
import TypeSex from './TypeSex';
import ContInputText from './ContInputText';
import ContInputSelect from './ContInputSelect';

const FormReport = () => {
  const handleSubmit = () => {

  }

  
  return (
    <div className='w-full '>
      <form className="flex justify-between flex-wrap gap-2">
          <div className='w-3/12 overflow-hidden'>
            <p>TP:</p>
              <InputSelect />
          </div>

          <div className='w-8/12'>
            <ContInputText 
              label='Documento'
              placeholder='Escriba documento'
            />
          </div>

          <div className='w-full'>
            <ContInputText 
              label='Nombres y Apellidos'
              placeholder='Escriba nombres y apellidos'
            />
          </div>

          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <p>Sexo:</p>
                <TypeSex />
            </div>
            <div className='w-6/12 overflow-hidden'>
              <p>Fecha de reporte:</p>
                <input type="date" className='border-2 outline-gray-200 rounded py-[2px] px-2 w-full'/>
            </div>
          </div>

          <div className='flex gap-2 w-full'>
            <div className='w-6/12'>
              <ContInputText 
                label='Resguardo'
                placeholder='Resguardo'
              />
            </div>
            <div className='w-6/12'>
              <ContInputText 
                label='Comunidad'
                placeholder='Comunidad'
              />
            </div>
          </div>

          <div className='w-full'>
              <ContInputText 
                label='Direccion'
                placeholder='Direccion'
              />
          </div>

          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect 
                label='Acompañante'
              />
            </div>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect 
                label='Prioritario'
              />
            </div>
          </div>


          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect 
                label='Transporte Terrestre'
              />
            </div>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect 
                label='Transporte Fluvial'
              />
            </div>
          </div>


          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect 
                label='Cita programada'
              />
            </div>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect 
                label='Casa de paso'
              />
            </div>
          </div>

          <div className='w-full'>
            <p>Observaciones:</p>
              <textarea 
                className='border-2 outline-gray-400 focus:shadow-md rounded py-1 px-2 w-full min-h-24 max-h-28'
                type="text"
                placeholder="Escriba sus observaciones..."
              ></textarea>
          </div>

          <div className='w-full pt-6 pb-4 flex justify-center'>
            <button className='bg-green-600 text-white px-20 py-2 rounded shadow-md ' type='submit'>Enviar</button>
          </div>
        </form>
    </div>
  );
}
 
export default FormReport;