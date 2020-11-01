import React from 'react'
import './Number.css'

// const Number = (props) => {

// return (<input type='number'
// className= {props.size} />


// )


// }

const Number = (props) => {

    let classList = ''
    
    if(props.faded){
        classList+= ' faded'
    }
    if(props.small){
        classList+= ' small'
    }
    if(props.medium){
        classList+= ' medium'
    }
    if(props.large){
        classList+= ' large'
    }
    
    return (<number type="number" 
     className= {classList} />
    
     
     
    )
    
    
    }



export default Number