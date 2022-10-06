import Image from 'next/future/image';
import React from 'react';

export default function Header() {
  return (
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
  );
}
