'use client'
import React, { useState } from 'react';
import InputSelectTpDoc from './InputSelectTpDoc';
import 'tailwindcss/tailwind.css';
import TypeSex from './TypeSex';
import ContInputText from './ContInputText';
import ContInputSelect from './ContInputSelect';
import InputTextarea from './InputTextarea';

const FormReport = () => {
  const [data, setData] = useState(
    {
      tpDoc: '',
      documento: '',
      nombYApell:'',
      sexo: '',
      fechaReporte: '',
      resguardo: '',
      comunidad: '',
      direccion: '',
      acompanante: '',
      prioritario: '',
      terrestre: '',
      fluvial: '',
      citaProgramada: '',
      casaDePaso: '',
      observaciones: ''
    }
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };


  return (
    <div className='w-full '>
      <form onSubmit={handleSubmit} className="flex justify-between flex-wrap gap-2">
          <div className='w-3/12 overflow-hidden'>
            <p>TP:</p>
              <InputSelectTpDoc setData={setData} />
          </div>

          <div className='w-8/12'>
            <ContInputText 
              label='Documento'
              placeholder='Escriba documento'
              id='documento'
              setData={setData}
            />
          </div>

          <div className='w-full'>
            <ContInputText 
              label='Nombres y Apellidos'
              placeholder='Escriba nombres y apellidos'
              id='nombYApell'
              setData={setData}
            />
          </div>

          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <p>Sexo:</p>
                <TypeSex setData={setData} />
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
                id='resguardo'
                setData={setData}
              />
            </div>
            <div className='w-6/12'>
              <ContInputText 
                label='Comunidad'
                placeholder='Comunidad'
                id='comunidad'
                setData={setData}
              />
            </div>
          </div>

          <div className='w-full'>
              <ContInputText 
                label='Direccion'
                placeholder='Direccion'
                id='direccion'
                setData={setData}
              />
          </div>

          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect
                label='Acompañante'
                id='acompanante'
                setData={setData} 
              />
            </div>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect
                label='Prioritario'
                id='prioritario'
                setData={setData} 
              />
            </div>
          </div>


          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect
                label='Transporte Terrestre'
                id='terrestre'
                setData={setData} 
              />
            </div>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect
                label='Transporte Fluvial'
                id='fluvial'
                setData={setData} 
              />
            </div>
          </div>


          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect
                label='Cita programada'
                id='citaProgramada'
                setData={setData} 
              />
            </div>
            <div className='w-6/12 overflow-hidden'>
              <ContInputSelect
                label='Casa de paso'
                id='casaDePaso'
                setData={setData} 
              />
            </div>
          </div>

          <div className='w-full'>
            <InputTextarea 
              setData={setData}
            />
          </div>

          <div className='w-full pt-6 pb-4 flex justify-center'>
            <button className='bg-green-600 text-white px-20 py-2 rounded shadow-md ' type='submit'>Enviar</button>
          </div>
        </form>
    </div>
  );
}
 
export default FormReport;