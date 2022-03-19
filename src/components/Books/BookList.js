import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const BookListContainer = styled.div`
  display: flex;
  justify-content: center;
  .head {
    background: #5f94b4;
    color: #fff;
    font-size: 1.1rem;
  }
`;
const BookList = () => {
  const { books } = useSelector((state) => state.bookItems);
  
  const dispatch = useDispatch();

  
  
  const removeItem = (id) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
    console.log(id);
  };
  const updateItem = (id, items) => {
    dispatch({
      type: "Update",
      payload: [id, items],
    });
   console.log(id,items)
  };

  return (
    <BookListContainer>
      <Table>
        <TableHead>
          <TableRow className="head">
            <TableCell className="head">S.N</TableCell>
            <TableCell className="head">Title</TableCell>
            <TableCell className="head">Author</TableCell>
            <TableCell className="head">Price</TableCell>
            <TableCell className="head">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((item, index) => {
            return (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.title}</TableCell>
                <TableCell>{item.author}</TableCell>
                <TableCell>{item.price}</TableCell>

                <TableCell>
                  <Button onClick={() => updateItem(index, item)}>Edit</Button>
                  <Button onClick={() => removeItem(index)}>Delete </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </BookListContainer>
  );
};

export default BookList;
