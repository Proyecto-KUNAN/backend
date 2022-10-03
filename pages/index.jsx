import Head from 'next/head';
import Image from 'next/future/image';
import React, { useCallback, useState } from 'react';
import useValidation from '../hooks/useValidation';
import { useAPISession } from '../hooks/useAPISession';
import { usePotentialClient } from '../hooks/usePotentialClient';

export default function Index() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState(null);
  const [web, setWeb] = useState('');
  const [industry, setIndustry] = useState('');
  const [ventaIndirencta, setVentaIndirencta] = useState(false);
  const [consulta, setConsulta] = useState('');

  const nameValid = useValidation(name, /^[a-zA-Z]{2,30}$/);
  const lastNameValid = useValidation(lastName, /^[a-zA-Z]{2,30}$/);
  const emailValid = useValidation(email, /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/);
  const phoneValid = useValidation(phone, /^[0-9]{0,16}$/);
  const webValid = useValidation(web, /^[a-zA-Z0-9\_\-]+\.[a-zA-Z-.]+$/);
  const consultaValid = useValidation(consulta, /^.[^\{\}\<\>\[\]\"\`]{0,400}$/);

  const { insert } = usePotentialClient();

  const handlerSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!nameValid || !lastNameValid || !emailValid || !phoneValid || !webValid || !consultaValid) return;
      insert({
        name,
        email,
        lastName,
        phone,
        web,
        consulta,
      });
    },
    [consulta, consultaValid, email, emailValid, insert, lastName, lastNameValid, name, nameValid, phone, phoneValid, web, webValid]
  );

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
              <Image className='' src='/img/kunan-logo.png' alt='' fill style={{ objectFit: 'contain' }} />
            </a>
          </div>
          <div className='col-3 h-screen-10'>
            <a className='d-inline-block h-100 w-100 position-relative ' href='https://docs.suitecrm.com/developer/api/developer-setup-guide/' target='_blank' rel='noreferrer'>
              <Image className='my-auto' src='/img/suitecrm-logo.png' alt='' fill style={{ objectFit: 'contain' }} />
            </a>
          </div>
        </div>
      </div>

      <form className='row gap-4 p-4' onSubmit={handlerSubmit}>
        <div className='row justify-content-center m-0 p-0'>
          <div className='col-6  '>
            <label htmlFor='nombre'>Nombre:</label>
            <input type='text' className={`form-control ${nameValid ? 'is-valid' : 'is-invalid'}`} id='nombre' placeholder='Ingrese su nombre' aria-label='Ingrese su nombre' onChange={(e) => setName(e.target.value)} />
            <div className='valid-feedback'>Correcto!</div>
            <div className='invalid-feedback'>Ingrese su Nombre!</div>
          </div>

          <div className='col-6'>
            <label htmlFor='apellido'>Apellido:</label>
            <input type='text' className={`form-control ${lastNameValid ? 'is-valid' : 'is-invalid'}`} id='apellido' placeholder='Ingrese su apellido' aria-label='Ingrese su apellido' onChange={(e) => setLastName(e.target.value)} />

            <div className='valid-feedback'>Correcto!</div>
            <div className='invalid-feedback'>Ingrese su Apellido!</div>
          </div>
        </div>
        <div className='row justify-content-center m-0 p-0'>
          <div className='col-6'>
            <label htmlFor='telefono'>Telefono:</label>
            <input type='text' className={`form-control ${phoneValid ? 'is-valid' : 'is-invalid'}`} id='telefono' placeholder='Ingrese un telefono' aria-label='Ingrese un telefono' onChange={(e) => setPhone(e.target.value)} />

            <div className='valid-feedback'>Telefono Correcto!</div>
            <div className='invalid-feedback'>Ingrese un numero de telefono, sin simbolos!</div>
          </div>

          <div className='form-group col-6 justify-content-center'>
            <label htmlFor='exampleInputEmail1'>Email</label>
            <input type='email' className={`form-control ${emailValid ? 'is-valid' : 'is-invalid'}`} aria-describedby='emailHelp' placeholder='Ingrese un email' onChange={(e) => setEmail(e.target.value)} />

            <div className='valid-feedback'>Email correcto!</div>
            <div className='invalid-feedback'>Ingrese una direccion de Email valido !</div>
          </div>
        </div>
        <div className='row justify-content-center m-0 p-0'>
          <div className='col-6'>
            <label htmlFor='web'>Sitio Web</label>
            <input type='text' className={`form-control ${webValid ? 'is-valid' : 'is-invalid'}`} id='web' placeholder='Ingrese su sitio web' aria-label='First name' onChange={(e) => setWeb(e.target.value)} />

            <div className='valid-feedback'>Correcto!</div>
            <div className='invalid-feedback'>Ingrese un sitio web valido!</div>
          </div>
          <div className='col-6'>
            <label htmlFor='industria'>¿A que industria pertenece?</label>
            <select className='form-select form-select-xl' aria-label='Default select example' onChange={(e) => setIndustry(e.target.value)}>
              <option value='1'>Agro</option>
              <option value='2'>Tecnologia</option>
              <option value='3'>Otra</option>
            </select>
          </div>
        </div>
        <div className='row justify-content-start ms-3 m-0 p-0'>
          <div className='form-check col'>
            <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' onChange={(e) => setVentaIndirencta(e.target.value)} />
            <label className='form-check-label' htmlFor='flexCheckDefault'>
              ¿Trabaja con venta indirecta?
            </label>
          </div>
        </div>
        <div className='row justify-content-center m-0 p-0'>
          <div className='col'>
            <label htmlFor='exampleFormControlTextarea1' className='form-label'>
              Consulta
            </label>
            <textarea className={`form-control ${consultaValid ? 'is-valid' : 'is-invalid'}`} id='exampleFormControlTextarea1' rows='3' placeholder='Escriba su consulta aqui ...' onChange={(e) => setConsulta(e.target.value)}></textarea>

            <div className='valid-feedback'>Correcto!</div>
            <div className='invalid-feedback'>Ingrese una consulta</div>
          </div>
        </div>
        <div className='row justify-content-center m-0 p-1'>
          <div className='col d-grid p-0'>
            <button type='submit' className='btn btn-primary m-2'>
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
