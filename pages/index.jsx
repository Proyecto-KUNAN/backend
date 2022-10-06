import Head from 'next/head';
import Image from 'next/future/image';
import React, { useCallback, useState } from 'react';
import useValidation from '../hooks/useValidation';
import { useAPISession } from '../hooks/useAPISession';
import { usePotentialClient } from '../hooks/usePotentialClient';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Main from '../components/layouts/Main';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { editConsultObjState } from '../lib/atoms';
import Form from '../components/Form';

export default function Index() {
  const router = useRouter();

  const [consultId, setConsultId] = useState('');

  const [modalVisibility, setModalVisibility] = useState(false);
  const toggle = () => setModalVisibility(!modalVisibility);

  const { insert } = usePotentialClient();

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
    }
  };

  return (
    <Main>
      <Modal isOpen={modalVisibility}>
        <ModalHeader toggle={toggle}>Consulta Existente</ModalHeader>
        <ModalBody>Ya hay una consulta registrada con su email. ¿Desea editarla?</ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={() => {
              router.push(`/consult/${consultId}?action=edit`);
            }}>
            Editar
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            No
          </Button>
        </ModalFooter>
      </Modal>

      <div className='col-6 d-flex justify-content-start gap-4 p-4'>
        <h1 className='display-6 m-0'>Añadir una consulta</h1>
      </div>

      <Form onSubmit={handlerSubmit} />
    </Main>
  );
}
