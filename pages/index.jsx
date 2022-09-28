import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

export default function index() {
  return (
    <div>
      <Head>
        <link rel='icon' href='/img/favicon.png' />
        <title>Proyecto KUNAN</title>
      </Head>

      <div className='container h-25'>
        <div className='row p-3'>
          <div className='col-3'>
            <a className='' href='https://www.kunan.com.ar/' target='_blank' rel='noreferrer'>
              <Image className='float-start' src='/img/kunan-logo.png' alt='' layout='intrinsic' width='615px' height='190px' />
            </a>
          </div>
          <div className='col-3'>
            <a className='' href='https://docs.suitecrm.com/developer/api/developer-setup-guide/' target='_blank' rel='noreferrer'>
              <Image className='float-end' src='/img/suitecrm-logo.png' alt='' layout='intrinsic' width='396px' height='90px' />
            </a>
          </div>
        </div>
      </div>

      <div className='container  border border-success border-3 bg-light '>
        <div className=' p-3 row justify-content-center'>
          <div className='col-6  '>
            <label htmlFor='nombre'>NOMBRE</label>
            <input type='text' className='form-control' id='nombre' placeholder='INGRESE SU NOMBRE' aria-label='First name' />
          </div>
        </div>
        <div className='p-3 row justify-content-center'>
          <div className='col-6'>
            <label htmlFor='apellido'>APELLIDO</label>
            <input type='text' className='form-control' id='apellido' placeholder='INGRESE SU APELLIDO' aria-label='First name' />
          </div>
        </div>
        <div className='p-3 row justify-content-center'>
          <div className='col-6'>
            <label htmlFor='telefono'>TELEFONO</label>
            <input type='text' className='form-control' id='telefono' placeholder='INGRESE SU TELEFONO' aria-label='First name' />
          </div>
        </div>
        <div className='form-group p-3 row justify-content-center'>
          <div className='col-6'>
            <label htmlFor='exampleInputEmail1'>EMAIL</label>
            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='INGRESE SU EMAIL' />
            <small id='emailHelp' className='form-text text-muted'>
              {"We'll never share your email with anyone else."}
            </small>
          </div>
        </div>
        <div className='p-3 row justify-content-center'>
          <div className='col-6'>
            <label htmlFor='sitioweb'>SITIO WEB</label>
            <input type='text' className='form-control' id='sitioweb' placeholder='INGRESE SU SITIO WEB' aria-label='First name' />
          </div>
        </div>
        <div className=' p-3 row justify-content-center '>
          <div className='col-6'>
            <label htmlFor='industria'>INDUSTRIA A LA QUE PERTENECE </label>
            <select className='form-select form-select-xl' aria-label='Default select example'>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>otro..</option>
            </select>
          </div>
        </div>
        <div className='  row justify-content-center '>
          <label className=' p-3 col-6' htmlFor='check'>
            TRABAJA CON VENTA INDIRECTA{' '}
          </label>
          <div className='form-check m-2 col-6'>
            <input className='form-check-input m-2 ' type='radio' name='flexRadioDefault' id='flexRadioDefault1' />
            <label className='form-check-label  ' htmlFor='flexRadioDefault1'>
              SI
            </label>
          </div>
          <div className='form-check m-2 col-6'>
            <input className='form-check-input m-2 ' type='radio' name='flexRadioDefault' id='flexRadioDefault2' defaultChecked='true' />
            <label className='form-check-label ' htmlFor='flexRadioDefault2'>
              NO
            </label>
          </div>
        </div>
        <div className='  row justify-content-center '>
          <div className='col-6'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              CONSULTA
            </label>
            <textarea className='form-control' id='exampleFormControlTextarea1' rows='3'></textarea>
          </div>
        </div>
        <div className='row justify-content-center'>
          <div className='col-6'>
            <button type='submit' className='btn btn-primary m-2'>
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
