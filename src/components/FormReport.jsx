'use client'

import React, { useEffect, useState } from 'react';
import InputSelectTpDoc from './InputSelectTpDoc';
import 'tailwindcss/tailwind.css';
import TypeSex from './TypeSex';
import ContInputText from './ContInputText';
import ContInputSelect from './ContInputSelect';
import InputTextarea from './InputTextarea';
import InputDateReport from './InputDateReport';
import { saveData } from '@/functions/saveData';
import { Icon } from '@iconify/react';
import AlertSaving from '@/elements/AlertSaving';
import InputDateReportFPP from './InputDateReportFPP';
import ContTypeReport from './ContTypeReport';

const FormReport = () => {
  const [status, setStatus] = useState(false);
  const [saving, setSaving] = useState(false);

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
      observaciones: '',
      recibeLlamada: ''
    }
  );


  const handleSubmit = async(e) => {
    e.preventDefault();
    setSaving(true);
    await saveData(data).then((res)=>{
      console.log(res);
      if(res.status === 200){
        setStatus(res.status);
        setSaving(false);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else if(res.status !== 200){
        setStatus(res.status);
        setSaving(false);
        setTimeout(() => {
          setStatus(false);
        }, 3000);
      }
    })

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
              <InputDateReport 
                setData={setData}
              />
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
              <ContTypeReport
                label='Tipo de Reporte'
                id='tpReporte'
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
            <div className='w-6/12'>
              <ContInputText 
                label='Quien recibe reporte'
                placeholder='Escriba su nombre aqui'
                id='recibeLlamada'
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
            <button
              disabled={saving}
              className='bg-green-600 text-white px-20 py-2 rounded shadow-md flex justify-center items-center' 
              type='submit'
            >
              {saving ?
                <Icon width={25} color='white' icon="line-md:loading-twotone-loop" />
                :
                'Enviar'
              }
            </button>
          </div>

          {status === 200 ? 
            <AlertSaving
              text='Guardado exitosamente :)'
              colorIcon='2bd35e'
              icon='line-md:circle-to-confirm-circle-twotone-transition'
            />
            : status !== false && status !== 200 &&
            <AlertSaving
              text='Hubo un error al intentar enviar, guarde la informacion e intente mas tarde'
              colorIcon='#e44444'
              icon='line-md:cancel-twotone'
            />
          }
        </form>
    </div>
  );
}
 
export default FormReport;