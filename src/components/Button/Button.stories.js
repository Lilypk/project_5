import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';


function helloWorld() {
    alert('Button Component Executed props.onClick')
}

storiesOf('Button', module)
    .add('Primary', () => <Button 
        type='primary'
        onClick={helloWorld}
        label="Primary" />) 
    .add('Large Primary', () => <Button
        type='primary'
        large
        label='Large Primary Button'/>)
    
    
    .add('Success', () => <Button 
        type='success'
        label="Success" />) 
    .add('Large Success', () => <Button
        type='success'
        large
        label='Large Success Button'/>)
        
    
    
    // .add('Primary', () => <Button 
    //     type='primary'
    //     label="Primary" />) 
    // .add('Large Primary', () => <Button
    // type='primary'
    // large
    // label='Large Primary Button'/>)
    
    // .add('Primary', () => <Button 
    //     type='primary'
    //     label="Primary" />) 
    // .add('Large Primary', () => <Button
    // type='primary'
    // large
    // label='Large Primary Button'/>)
    



