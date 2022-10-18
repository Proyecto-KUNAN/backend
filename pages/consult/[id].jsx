import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Main from '../../components/layouts/Main';
import { useRecoilValue } from 'recoil';
import { editConsultObjState } from '../../lib/atoms';
import Form from '../../components/Form';
import { usePotentialClient } from '../../hooks/usePotentialClient';
import SpeakerSwitch from '../../components/SpeakerSwitch';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

export default function ConsultId() {
  const router = useRouter();
  const { id, action } = router.query;
  const consultObj = useRecoilValue(editConsultObjState);

  const [notificationModalVisibility, setNotificationModalVisibility] = useState(false);
  const toggleNotification = () => setNotificationModalVisibility(!notificationModalVisibility);

  const [notificationMessage, setNotificationMessage] = useState('Consulta editada con exito');

  useEffect(() => {
    console.log(consultObj);
  }, []);

  const { update } = usePotentialClient();

  const handlerSubmit = async (data, isValid, e) => {
    if (!isValid) return;
    const final = await update({
      name: data.name,
      lastName: data.lastName,
      email: consultObj?.attributes?.email1,
      phone: data.phone,
      web: data.web,
      consulta: data.consulta,
    });
    console.log(final);
    if (final && !final.status) {
      setNotificationMessage('Ha surgido un error al editar su consulta');
      toggleNotification();
    } else {
      setNotificationMessage('Consulta editada con exito');
      toggleNotification();
    }
  };

  return (
    <Main>
      <Modal isOpen={notificationModalVisibility}>
        <ModalHeader toggle={toggleNotification}>Notificaion</ModalHeader>
        <ModalBody>{notificationMessage}</ModalBody>
      </Modal>

      <div className='d-flex'>
        <div className='col-6 d-flex justify-content-start gap-4 p-4'>
          <h1 className='display-6 m-0'>Editar una consulta</h1>
        </div>
        <div className='col-6 d-flex justify-content-end gap-4 p-4'>
          <SpeakerSwitch />
        </div>
      </div>

      <Form onSubmit={handlerSubmit} initialData={{ name: consultObj?.attributes?.first_name, lastName: consultObj?.attributes?.last_name, email: consultObj?.attributes?.email1, web: consultObj?.attributes?.website, phone: consultObj?.attributes?.phone_work, consulta: consultObj?.attributes?.description, industry: 0, ventaIndirencta: false }} disabledInput={{ name: false, lastName: false, email: true, phone: false, web: false, industry: false, ventaIndirencta: false, consulta: false }} />
    </Main>
  );
}
