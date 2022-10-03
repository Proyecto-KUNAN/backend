import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { sessionState } from '../lib/atoms';

const raw = JSON.stringify({
  'grant_type': 'client_credentials',
  'client_id': process.env.NEXT_PUBLIC_CRM_CLIENT_ID,
  'client_secret': process.env.NEXT_PUBLIC_CRM_CLIENT_SECRET,
});

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: raw,
  redirect: 'follow',
};

export const useAPISession = (forceUpdate = false) => {
  const [session, setSession] = useRecoilState(sessionState);

  useEffect(() => {
    if ((session && session.expires_date && Date.now() > session.expires_date) || forceUpdate || Object.values(session).length === 0) {
      fetch('https://devphp7.democrm.com.ar/crminstalacionpaquetes/Api/access_token', requestOptions)
        .then((response) => response.json())
        .then((result) => {
          result.expires_date = Date.now() + result.expires_in;
          if (session != result) setSession(result);
          console.log(result);
        })
        .catch((error) => console.log('error', error));
    }
  }, []);

  return session;
};
