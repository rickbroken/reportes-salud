'use client'
import React from 'react';
import InputSelect from './InputSelect';
import 'tailwindcss/tailwind.css';
import TypeSex from './TypeSex';

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
            <p>Documento:</p>
              <input 
                className='border-2 outline-gray-400 focus:shadow-md rounded py-1 px-2 w-full'
                type="text"
                placeholder="Escriba el documento"
              />
          </div>

          <div className='w-full'>
            <p>Nombres y Apellidos:</p>
              <input 
                className='border-2 outline-gray-400 focus:shadow-md rounded py-1 px-2 w-full'
                type="text"
                placeholder="Escriba los nombres y apellidos"
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
              <p>Resguardo:</p>
              <input 
                className='border-2 outline-gray-400 focus:shadow-md rounded py-1 px-2 w-full'
                type="text"
                placeholder="Escriba el Resguardo"
              />
            </div>
            <div className='w-6/12'>
              <p>Comunidad:</p>
              <input 
                className='border-2 outline-gray-400 focus:shadow-md rounded py-1 px-2 w-full'
                type="text"
                placeholder="Escriba el Comunidad"
              />
            </div>
          </div>

          <div className='w-full'>
            <p>Direccion:</p>
              <input 
                className='border-2 outline-gray-400 focus:shadow-md rounded py-1 px-2 w-full'
                type="text"
                placeholder="Escriba otra direccion"
              />
          </div>

          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <p>Acompañante:</p>
              <select className='w-full border-2 py-1 rounded'>
                <option value="">Selecione un opcion</option>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
              </select>
            </div>
            <div className='w-6/12 overflow-hidden'>
              <p>Prioritario:</p>
              <select className='w-full border-2 py-1 rounded'>
                <option value="">Selecione un opcion</option>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
              </select>
            </div>
          </div>


          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <p>Transporte terrestre:</p>
              <select className='w-full border-2 py-1 rounded'>
                <option value="">Selecione un opcion</option>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
              </select>
            </div>
            <div className='w-6/12 overflow-hidden'>
              <p>Transporte Fluvial:</p>
              <select className='w-full border-2 py-1 rounded'>
                <option value="">Selecione un opcion</option>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
              </select>
            </div>
          </div>


          <div className='flex gap-2 w-full'>
            <div className='w-6/12 overflow-hidden'>
              <p>Cita programada:</p>
              <select className='w-full border-2 py-1 rounded'>
                <option value="">Selecione un opcion</option>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
              </select>
            </div>
            <div className='w-6/12 overflow-hidden'>
              <p>Casa de paso:</p>
              <select className='w-full border-2 py-1 rounded'>
                <option value="">Selecione un opcion</option>
                <option value="SI">SI</option>
                <option value="NO">NO</option>
              </select>
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