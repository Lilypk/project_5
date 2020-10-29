import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
    
    .add('Primary', () => <Button 
        type='primary'
        label="Primary" />) 
    .add('Primary Hover', () => <Button 
        type='primary'
        hover
        label="Primary Hover" />) 
    .add('Primary Outline', () => <Button
        type='primary'
        outline
        label='Primary Outline' />)
    .add('Primary Faded', () => <Button
        type='primary'
        faded
        label='Primary Faded' />)
    .add('Large Primary', () => <Button
        type='primary'
        large
        label='Large Primary'/>)
    .add('Large Faded Primary', () => <Button
        type='primary'
        large
        faded
        label='Large Faded Primary'/>)
    .add('Large Outline Primary', () => <Button
        type='primary'
        large
        outline
        label='Large Outline Primary'/>)
    
    .add('Danger', () => <Button 
        type='danger'
        label="Danger" />) 
    .add('Danger Hover', () => <Button 
        type='danger'
        hover
        label="Danger Hover" />) 
    .add('Danger Outline', () => <Button
        type='danger'
        outline
        label='Danger Outline' />)
    .add('Danger Faded', () => <Button
        type='danger'
        faded
        label='Danger Faded' />)
    .add('Large Danger', () => <Button
        type='danger'
        large
        label='Large Danger'/>)
    .add('Large Faded Danger', () => <Button
        type='danger'
        large
        faded
        label='Large Faded Danger'/>)
    .add('Large Outline Danger', () => <Button
        type='danger'
        large
        outline
        label='Large Outline Danger'/>)

    .add('Success', () => <Button 
        type='success'
        label="Success" />) 
    .add('Success Hover', () => <Button 
        type='success'
        hover
        label="Success Hover" />) 
    .add('Success Outline', () => <Button
        type='success'
        outline
        label='Success Outline' />)
    .add('Success Faded', () => <Button
        type='success'
        faded
        label='Success Faded' />)
    .add('Large Success', () => <Button
        type='success'
        large
        label='Large Success'/>)
    .add('Large Faded Success', () => <Button
        type='success'
        large
        faded
        label='Large Faded Success'/>)
    .add('Large Outline Success', () => <Button
        type='success'
        large
        outline
        label='Large Outline Success'/>)

    .add('Warning', () => <Button 
        type='warning'
        label="Warning" />) 
    .add('Warning Hover', () => <Button 
        type='warning'
        hover
        label="Warning Hover" />) 
    .add('Warning Outline', () => <Button
        type='warning'
        outline
        label='Warning Outline' />)
    .add('Warning Faded', () => <Button
        type='warning'
        faded
        label='Warning Faded' />)
    .add('Large Warning', () => <Button
        type='warning'
        large
        label='Large Warning'/>)
    .add('Large Faded Warning', () => <Button
        type='warning'
        large
        faded
        label='Large Faded Warning'/>)
    .add('Large Outline Warning', () => <Button
        type='warning'
        large
        outline
        label='Large Outline Warning'/>)

    .add('Default', () => <Button 
        type='default'
        label="Default" />) 
    .add('Default Hover', () => <Button 
        type='default'
        hover
        label="Default Hover" />) 
    .add('Default Outline', () => <Button
        type='default'
        outline
        label='Default Outline' />)
    .add('Default Faded', () => <Button
        type='default'
        faded
        label='Default Faded' />)
    .add('Large Default', () => <Button
        type='default'
        large
        label='Large Default'/>)
    .add('Large Faded Default', () => <Button
        type='default'
        large
        faded
        label='Large Faded Default'/>)
    .add('Large Outline Default', () => <Button
        type='default'
        large
        outline
        label='Large Outline Default'/>)
    .add('Add to Cart', () => <Button
        type='cart'
        label='Add to Cart'
    />)
    .add('Add to Favorites', () => <Button

    />)
    .add('Heart', () => <Button

    />)
    .add('Cart', () => <Button 

    />)
    


    
    
    
    
    
    
    
        
    

    



