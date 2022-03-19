import { TextField } from '@mui/material'
import React from 'react'

const TextFieldForm = ({name,label,...otherProps}) => {
    const textFieldConfig={
        varaint:"outlined",
        fullWidth:true,
        size:"small",
        ...otherProps
    }
  return (
   <>
   <TextField {...textFieldConfig} name={name} label={label}/>
   </>
  )
}

export default TextFieldForm