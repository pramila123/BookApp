import React from 'react'
import TextFieldForm from './TextFieldForm'

const FormController = (props) => {
    const {control,...otherProps}=props
  switch(control)
  {
      case "textfield":
          return <TextFieldForm {...otherProps}/>
          default:
              return null
  }
}

export default FormController