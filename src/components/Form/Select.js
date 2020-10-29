import React from 'react'
import './Select.css'

const Select = (props) => {

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

return (<select type="select" 
 className= {classList} />

 
 
)


}

   
export default Select

