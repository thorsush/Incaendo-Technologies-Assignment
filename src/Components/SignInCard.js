import React, { Component } from 'react';
import { TextField } from '@mui/material';

export default class SignInCard extends Component {
    render() {
        return (
            <div className='sign_in_card'>
               <div className='form'>
                <div className='first_two'>
                    <TextField className='text_field' id="outlined-basic" label="Nome" variant="outlined" />
                <TextField className='text_field' id="outlined-basic" label="Cognome" variant="outlined" />
                </div>
                <TextField className='text_field email' id="outlined-basic" label="email" variant="outlined" />
                <button>Attiva</button>
                </div> 
            </div>
        )
    }
}
