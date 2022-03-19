import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

const Buttons = ({id}) => {
const dispatch=useDispatch();
console.log(id)
  return (
    <>
 <Button onClick={()=>
                {
                  dispatch({
                      type:"REMOVE",
                      payload:id
                  })  
                }}>Remove</Button>
    </>
  )
}

export default Buttons