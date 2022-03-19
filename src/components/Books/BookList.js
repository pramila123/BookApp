import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import Buttons from '../Form/Buttons';
const BookListContainer=styled.div`
display:flex;
justify-content:center;
.head
{
    background:#5F94B4;
    color:#fff;
    font-size:1.1rem;
}
`;
const BookList = () => {
    const {books}=useSelector(state=>state.bookItems);
const dispatch=useDispatch();
const removeItem=(id)=>
{
    dispatch({
        type:"REMOVE",
        payload:id
    }) 
    console.log(id)  
}
console.log(books)

  return (
   <BookListContainer>
<Table >
<TableHead >
    <TableRow className='head'>
<TableCell className='head'>S.N</TableCell>
<TableCell className='head'>Title</TableCell>
<TableCell className='head'>Author</TableCell>
<TableCell className='head'>Price</TableCell>
<TableCell className='head'>Action</TableCell>
    </TableRow>
</TableHead>
<TableBody>
    {
        books.map((item,index)=>
        {
            return(
                <TableRow key={index}>
               <TableCell>{index+1}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>{item.price}</TableCell>
                
                <TableCell>
                    <Button>Edit</Button>
                   <Button onClick={()=>removeItem(index)}>Delete </Button>
                </TableCell>
            </TableRow>
            )
        })
    }
   
</TableBody>
</Table>
   </BookListContainer>
  )
}

export default BookList