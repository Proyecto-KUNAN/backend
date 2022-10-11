import React, { useState } from 'react';
import { usePotentialClient } from '../hooks/usePotentialClient';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import Main from '../components/layouts/Main';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { editConsultObjState } from '../lib/atoms';
import Form from '../components/Form';
import SpeakerSwitch from '../components/SpeakerSwitch';

export default function Index() {
  const router = useRouter();

  const [consultId, setConsultId] = useState('');

  const [modalVisibility, setModalVisibility] = useState(false);
  const toggle = () => setModalVisibility(!modalVisibility);

  const [notificationModalVisibility, setNotificationModalVisibility] = useState(false);
  const toggleNotification = () => setNotificationModalVisibility(!notificationModalVisibility);

  const [notificationMessage, setNotificationMessage] = useState('Consulta añadida con exito');

  const { insert, eliminate } = usePotentialClient();

  const [editConsultObj, setEditConsultObj] = useRecoilState(editConsultObjState);

  const handlerSubmit = async (data, isValid, e) => {
    if (!isValid) return;
    const final = await insert({
      name: data.name,
      email: data.email,
      lastName: data.lastName,
      phone: data.phone,
      web: data.web,
      consulta: data.consulta,
    });
    console.log(final);
    if (final && !final.status) {
      setEditConsultObj(final.data[0]);
      setConsultId(final.data[0].id);
      toggle();
    } else {
      setNotificationMessage('Consulta añadida con exito');
      toggleNotification();
    }
  };

  return (
    <Main>
      <Modal isOpen={modalVisibility}>
        <ModalHeader toggle={toggle}>Consulta Existente</ModalHeader>
        <ModalBody>Ya hay una consulta registrada con su email. ¿Desea editarla o eliminarla?</ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              router.push(`/consult/${consultId}?action=edit`);
            }}>
            Editar
          </Button>{' '}
          <Button
            color='secondary'
            onClick={() => {
              toggle();
              eliminate({ id: consultId });
              setNotificationMessage('Consulta eliminada con exito');
              toggleNotification();
            }}>
            Eliminar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={notificationModalVisibility}>
        <ModalHeader toggle={toggleNotification}>Notificaion</ModalHeader>
        <ModalBody>{notificationMessage}</ModalBody>
      </Modal>

      <div className='d-flex'>
        <div className='col-6 d-flex justify-content-start gap-4 p-4'>
          <h1 className='display-6 m-0'>Añadir una consulta</h1>
        </div>
        <div className='col-6 d-flex justify-content-end gap-4 p-4'>
          <SpeakerSwitch />
        </div>
      </div>

      <Form onSubmit={handlerSubmit} />
    </Main>
  );
}
