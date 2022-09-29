import Head from 'next/head';
import Image from 'next/future/image';
import React from 'react';

export default function index() {
  return (
    <div>
      <Head>
        <link rel='icon' href='/img/favicon.png' />
        <title>Proyecto KUNAN</title>
      </Head>

      <div className='h-25 border-bottom border-dark'>
        <div className='row p-3 justify-content-between'>
          <div className='col-3 h-screen-10'>
            <a className='d-inline-block h-100 w-100 position-relative' href='https://www.kunan.com.ar/' target='_blank' rel='noreferrer'>
              <Image className='' src='/img/kunan-logo.png' alt='' fill style={{ objectFit: 'contain' }} /* width={615} height={190} */ />
            </a>
          </div>
          <div className='col-3 h-screen-10'>
            <a className='d-inline-block h-100 w-100 position-relative ' href='https://docs.suitecrm.com/developer/api/developer-setup-guide/' target='_blank' rel='noreferrer'>
              <Image className='my-auto' src='/img/suitecrm-logo.png' alt='' fill style={{ objectFit: 'contain' }} /* width={396} height={90} */ />
            </a>
          </div>
        </div>
      </div>

      <div className='row gap-4 p-4'>
        <div className='row justify-content-center m-0 p-0'>
          <div className='col-6  '>
            <label htmlFor='nombre'>Nombre:</label>
            <input type='text' className='form-control' id='nombre' placeholder='Ingrese su nombre' aria-label='Ingrese su nombre' />
          </div>
          <div className='col-6'>
            <label htmlFor='apellido'>Apellido:</label>
            <input type='text' className='form-control' id='apellido' placeholder='Ingrese su apellido' aria-label='Ingrese su apellido' />
          </div>
        </div>
        <div className='row justify-content-center m-0 p-0'>
          <div className='col-6'>
            <label htmlFor='telefono'>Telefono:</label>
            <input type='text' className='form-control' id='telefono' placeholder='Ingrese un telefono' aria-label='Ingrese un telefono' />
          </div>
          <div className='form-group col-6 justify-content-center'>
            <label htmlFor='exampleInputEmail1'>Email</label>
            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Ingrese un email' />
          </div>
        </div>
        <div className='row justify-content-center m-0 p-0'>
          <div className='col-6'>
            <label htmlFor='web'>Sitio Web</label>
            <input type='text' className='form-control' id='web' placeholder='Ingrese su sitio web' aria-label='First name' />
          </div>
          <div className='col-6'>
            <label htmlFor='industria'>¿A que industria pertenece?</label>
            <select className='form-select form-select-xl' aria-label='Default select example'>
              <option value='1'>Agro</option>
              <option value='2'>Tecnologia</option>
              <option value='3'>Otra</option>
            </select>
          </div>
        </div>
        <div className='row justify-content-start ms-3 m-0 p-0'>
          <div class='form-check col'>
            <input class='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
            <label class='form-check-label' htmlFor='flexCheckDefault'>
              ¿Trabaja con venta indirecta?
            </label>
          </div>
        </div>
        <div className='row justify-content-center m-0 p-0'>
          <div className='col'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              Consulta
            </label>
            <textarea className='form-control' id='exampleFormControlTextarea1' rows='3' placeholder='Escriba su consulta aqui ...'></textarea>
          </div>
        </div>
        <div className='row justify-content-center m-0 p-1'>
          <div className='col d-grid p-0'>
            <button type='submit' className='btn btn-primary m-2'>
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
