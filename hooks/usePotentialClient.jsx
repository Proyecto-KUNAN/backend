import React, { useCallback, useEffect, useState } from 'react';
import { useAPISession } from './useAPISession';

export const usePotentialClient = () => {
  const session = useAPISession();

  const insert = useCallback(
    async (sendingData) => {
      let finalResult = '';
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        redirect: 'follow',
      };

      if (session && session.access_token) {
        let result = await fetch(`https://devphp7.democrm.com.ar/crminstalacionpaquetes/Api/V8/module/Leads?fields[Leads]=first_name,last_name,email1,phone_work,phone_mobile,website,description&filter[operator]=and&filter[email1][eq]=${sendingData.email}`, requestOptions);
        result = await result.json();

        finalResult = { ...result, message: 'La consulta ya existe', status: 0 };
        if (result && result.data.length === 0) {
          let result = await fetch('https://devphp7.democrm.com.ar/crminstalacionpaquetes/Api/V8/module', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.access_token}`,
            },
            body: JSON.stringify({
              'data': {
                'type': 'Leads',
                'attributes': {
                  'first_name': sendingData.name,
                  'last_name': sendingData.lastName,
                  'email1': sendingData.email,
                  'phone_work': sendingData.phone,
                  'website': sendingData.web,
                  'description': sendingData.consulta,
                },
              },
            }),
            redirect: 'follow',
          });
          result = await result.json();
          finalResult = { ...result, message: 'Consulta agregada con exito', status: 1 };
        }
        return finalResult;
      }
    },
    [session]
  );

  const update = useCallback(
    async (sendingData) => {
      let finalResult = '';
      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        redirect: 'follow',
      };

      if (session && session.access_token) {
        let result = await fetch(`https://devphp7.democrm.com.ar/crminstalacionpaquetes/Api/V8/module/Leads?fields[Leads]=first_name,last_name,email1,phone_work,phone_mobile,website,description&filter[operator]=and&filter[email1][eq]=${sendingData.email}`, requestOptions);
        result = await result.json();

        finalResult = { ...result, message: 'La consulta ya existe', status: false };
        console.log(result);
        const uuid = result.data[0].id;
        if (result && result.data[0] && result.data[0].id) {
          let result = await fetch('https://devphp7.democrm.com.ar/crminstalacionpaquetes/Api/V8/module', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${session.access_token}`,
              'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, PUT, DELETE',
              'User-Agent': 'PostmanRuntime/7.29.2',
            },
            body: JSON.stringify({
              'data': {
                'type': 'Leads',
                'id': uuid,
                'attributes': {
                  'first_name': sendingData.name,
                  'last_name': sendingData.lastName,
                  'phone_work': sendingData.phone,
                  'website': sendingData.web,
                  'description': sendingData.consulta,
                },
              },
            }),
            redirect: 'follow',
          });
          result = await result.json();
          console.log(result);
          finalResult = { ...result, message: 'Consulta agregada con exito', status: true };
        }
        return finalResult;
      }
    },
    [session]
  );

  const eliminate = useCallback(
    (sendingData) => {
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        redirect: 'follow',
      };

      if (session && session.access_token) {
        fetch(`https://devphp7.democrm.com.ar/crminstalacionpaquetes/Api/V8/module/Leads/${sendingData.id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`,
          },
          redirect: 'follow',
        })
          .then((response) => response.text())
          .then((result) => {
            return result;
          })
          .catch((error) => {
            return error;
          });
      }
    },
    [session]
  );

  return { insert, update, eliminate };
};
