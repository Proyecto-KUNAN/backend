import React, { useCallback, useEffect, useState } from 'react';
import { useAPISession } from './useAPISession';

export const usePotentialClient = (sendingData) => {
  const session = useAPISession();
  const [result, setResult] = useState('');

  const insert = useCallback(() => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${session.access_token}`,
      },
      redirect: 'follow',
    };

    if (session && session.access_token) {
      fetch(`https://devphp7.democrm.com.ar/crminstalacionpaquetes/Api/V8/module/Leads?fields[Leads]=first_name,last_name,email1,phone_work,phone_mobile,website,description&filter[operator]=and&filter[email1][eq]=${sendingData.email}`, requestOptions)
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          setResult(result);
          if (result && result.data.length === 0) {
            fetch('https://devphp7.democrm.com.ar/crminstalacionpaquetes/Api/V8/module', {
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
            })
              .then((response) => response.text())
              .then((result) => console.log(result))
              .catch((error) => console.log('error', error));
          }
        })
        .catch((error) => console.log('error', error));
    }
  }, [sendingData, session]);

  return { insert };
};
