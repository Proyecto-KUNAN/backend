import React, { useState } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { useRecoilState } from 'recoil';
import { speakerState } from '../lib/atoms';

export default function SpeakerSwitch() {
  const [speaker, setSpeaker] = useRecoilState(speakerState);

  return (
    <>
      {/* <a onClick={Switch} className='btn btn-link p-0 m-0'><FontAwesomeIcon icon={faVolumeHigh} id='icon-volume' className='w-100' height={44.25}/></a> */}
      <FormGroup switch style={{ marginBlock: 'auto' }}>
        <Label check>Speaker</Label>
        <Input
          type='switch'
          role='switch'
          defaultChecked={speaker}
          onChange={(e) => {
            console.log(e.target);
            setSpeaker(e.target.checked);
          }}
        />
      </FormGroup>
    </>
  );
}
