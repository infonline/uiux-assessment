import * as React from 'react';
import { createComponent } from '@lit-labs/react';
import { IoButton } from './IoButton.js';

export const IoButtonReact = createComponent(
    React,
    'io-button',
    IoButton,
    {
        onclick: 'click'
    }
);