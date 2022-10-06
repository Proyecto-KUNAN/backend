import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import { faVolumeMute } from '@fortawesome/free-solid-svg-icons';

function Switch() {
    console.log("Switch1");
}

export default function SpeakerSwitch() {
    const [state, setState] = useState(true);

    return (
        <>
        {/* <a onClick={Switch} className='btn btn-link p-0 m-0'><FontAwesomeIcon icon={faVolumeHigh} id='icon-volume' className='w-100' height={44.25}/></a> */}
        <FormGroup switch style={{ marginBlock: 'auto'}}>
            <Label check>Speaker</Label>
            <Input type="switch" role="switch" />
            
        </FormGroup>
        
        </>
    )
}
