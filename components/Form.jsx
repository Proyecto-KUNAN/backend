import React, { useEffect, useState } from 'react';
import useAudio from '../hooks/useAudio';
import useValidation from '../hooks/useValidation';

export default function Form({ onSubmit = (data, isValid, event) => {}, initialData = { name: '', lastName: '', email: '', phone: '', web: '', industry: 0, ventaIndirencta: false, consulta: '' }, disabledInput = { name: false, lastName: false, email: false, phone: false, web: false, industry: false, ventaIndirencta: false, consulta: false }, focus = true }) {
  const [name, setName] = useState(initialData.name);
  const [email, setEmail] = useState(initialData.email);
  const [lastName, setLastName] = useState(initialData.lastName);
  const [phone, setPhone] = useState(initialData.phone);
  const [web, setWeb] = useState(initialData.web);
  const [industry, setIndustry] = useState(initialData.industry);
  const [ventaIndirencta, setVentaIndirencta] = useState(initialData.ventaIndirencta);
  const [consulta, setConsulta] = useState(initialData.consulta);

  const nameValid = useValidation(name, /^[a-zA-Z]{2,30}$/);
  const lastNameValid = useValidation(lastName, /^[a-zA-Z]{2,30}$/);
  const emailValid = useValidation(email, /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/);
  const phoneValid = useValidation(phone, /^[0-9]{0,16}$/);
  const webValid = useValidation(web, /^[a-zA-Z0-9\_\-]+\.[a-zA-Z-.]+$/);
  const consultaValid = useValidation(consulta, /^.[^\{\}\<\>\[\]\"\`]{0,400}$/);

  const { createAttr } = useAudio('/audio.wav');

  const handlerSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, lastName, email, phone, web, industry, ventaIndirencta, consulta }, nameValid && lastNameValid && emailValid && phoneValid && webValid && consultaValid, e);
  };

  useEffect(() => {
    if (focus) {
      document.getElementById('nombre').click();
      document.getElementById('nombre').focus();
    }
  }, [focus]);

  return (
    <form className='row gap-4 p-4' onSubmit={handlerSubmit}>
      <div className='row m-0 p-0'>
        <div className='col-6  ' {...createAttr()}>
          <label htmlFor='nombre'>Nombre:</label>
          <input type='text' className={`form-control ${nameValid ? 'is-valid' : 'is-invalid'}`} id='nombre' placeholder='Ingrese su nombre' aria-label='Ingrese su nombre' onChange={(e) => setName(e.target.value)} defaultValue={initialData.name} disabled={disabledInput.name} />
          <div className='valid-feedback'>Correcto!</div>
          <div className='invalid-feedback'>Ingrese su Nombre!</div>
        </div>

        <div className='col-6' {...createAttr()}>
          <label htmlFor='apellido'>Apellido:</label>
          <input type='text' className={`form-control ${lastNameValid ? 'is-valid' : 'is-invalid'}`} id='apellido' placeholder='Ingrese su apellido' aria-label='Ingrese su apellido' onChange={(e) => setLastName(e.target.value)} defaultValue={initialData.lastName} disabled={disabledInput.lastName} />

          <div className='valid-feedback'>Correcto!</div>
          <div className='invalid-feedback'>Ingrese su Apellido!</div>
        </div>
      </div>
      <div className='row justify-content-center m-0 p-0'>
        <div className='col-6' {...createAttr()}>
          <label htmlFor='telefono'>Telefono:</label>
          <input type='text' className={`form-control ${phoneValid ? 'is-valid' : 'is-invalid'}`} id='telefono' placeholder='Ingrese un telefono' aria-label='Ingrese un telefono' onChange={(e) => setPhone(e.target.value)} defaultValue={initialData.phone} disabled={disabledInput.phone} />

          <div className='valid-feedback'>Telefono Correcto!</div>
          <div className='invalid-feedback'>Ingrese un numero de telefono, sin simbolos!</div>
        </div>

        <div className='form-group col-6 justify-content-center' {...createAttr()}>
          <label htmlFor='exampleInputEmail1'>Email</label>
          <input type='email' className={`form-control ${emailValid ? 'is-valid' : 'is-invalid'}`} aria-describedby='emailHelp' placeholder='Ingrese un email' onChange={(e) => setEmail(e.target.value)} defaultValue={initialData.email} disabled={disabledInput.email} />

          <div className='valid-feedback'>Email correcto!</div>
          <div className='invalid-feedback'>Ingrese una direccion de Email valido !</div>
        </div>
      </div>
      <div className='row justify-content-center m-0 p-0'>
        <div className='col-6' {...createAttr()}>
          <label htmlFor='web'>Sitio Web</label>
          <input type='text' className={`form-control ${webValid ? 'is-valid' : 'is-invalid'}`} id='web' placeholder='Ingrese su sitio web' aria-label='First name' onChange={(e) => setWeb(e.target.value)} defaultValue={initialData.web} disabled={disabledInput.web} />

          <div className='valid-feedback'>Correcto!</div>
          <div className='invalid-feedback'>Ingrese un sitio web valido!</div>
        </div>
        <div className='col-6' {...createAttr()}>
          <label htmlFor='industria'>¿A que industria pertenece?</label>
          <select className='form-select form-select-xl' aria-label='Default select example' onChange={(e) => setIndustry(e.target.value)} defaultValue={initialData.industry} disabled={disabledInput.industry}>
            <option value='1'>Agro</option>
            <option value='2'>Tecnologia</option>
            <option value='3'>Otra</option>
          </select>
        </div>
      </div>
      <div className='row justify-content-start ms-3 m-0 p-0'>
        <div className='form-check col' {...createAttr()}>
          <input className='form-check-input' type='checkbox' id='flexCheckDefault' onChange={(e) => setVentaIndirencta(e.target.value)} defaultValue={initialData.ventaIndirencta} disabled={disabledInput.ventaIndirencta} />
          <label className='form-check-label' htmlFor='flexCheckDefault'>
            ¿Trabaja con venta indirecta?
          </label>
        </div>
      </div>
      <div className='row justify-content-center m-0 p-0'>
        <div className='col' {...createAttr()}>
          <label htmlFor='exampleFormControlTextarea1' className='form-label'>
            Consulta
          </label>
          <textarea className={`form-control ${consultaValid ? 'is-valid' : 'is-invalid'}`} id='exampleFormControlTextarea1' rows='3' placeholder='Escriba su consulta aqui ...' onChange={(e) => setConsulta(e.target.value)} defaultValue={initialData.consulta} disabled={disabledInput.consulta}></textarea>

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
  );
}
