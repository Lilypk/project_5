import React from 'react'
import './Form.css'

const Form = (props) => {

    let classList = ''

    let types = ['email', 'select']

    if(types.includes(props.type)){
        classList+= ` form-${props.type}`
    }
    if(props.medium) {
        classList += ` form-${props.type}-medium`
    }
    // if(props.outline) {
    //     classList += ` button-${props.type}-outline`
    // }
    // if(props.faded) {
    //     classList += ` button-${props.type}-faded`
    // }
    // if(props.large){
    //     classList += ` button-large`
    // }
  

   return (
   <input  className={classList}>
       {props.label}
        
    </input>
)
   }

export default Form; 