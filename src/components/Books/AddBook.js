import { Button, Dialog, Grid } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import FormController from "../Form/FormController";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
const BookContainer = styled.div`
  padding: 1rem 2rem;
  .button {
    background: green;
    color: #fff;
    padding: 0.2rem 1rem;
    :hover {
      background: #5f94b4;
    }
  }
`;
const DialogContainer = styled.div`
  padding: 1rem 2rem 1.9rem 2rem;
  h3 {
    text-align: center;

    font-size: 1.4rem;
    color: blue;
  }
  .errors {
    color: red;
    margin: 0.2rem 0rem 0rem 0.8rem;
  }
`;
const AddBook = () => {
  const [open, setopen] = useState(false);
  const handleClose = () => {
    setopen(false);
  };
const {books}=useSelector(state=>state.bookItems)
const dispatch=useDispatch();

  const formik = useFormik({
    initialValues: {
  
      title: "",
      author: "",
      price: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title Required!"),
      author: Yup.string().required("Author Required !"),
      price: Yup.string()
        .matches(/^[0-9\b]+$/, "Alowed only number")
        .required("Price Required !"),
    }),
    onSubmit: (values) => {
      
dispatch({
  type:"ADD_BOOK",
  payload:values
})
      formik.resetForm();
    },
  });
  return (
    <>
      <BookContainer>
        <Button
          size="small"
          className="button"
          onClick={() => {
            setopen(true);
          }}
        >
          Add Book
        </Button>
      </BookContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        BackdropProps={{ invisible: true }}
        PaperProps={{
          style: {
            maxWidth: "450px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "15px",
          },
        }}
      >
        <DialogContainer>
          <h3>Add Book</h3>

          <Grid container spacing={2} pt={2}>
            <Grid item xs={12}>
              <FormController
                control="textfield"
                label="Title"
                name="title"
                {...formik.getFieldProps("title")}
              />
            </Grid>
            <div className="errors">
              
              {formik.touched.title ? formik.errors.title : ""}{" "}
            </div>
            <Grid item xs={12}>
              <FormController
                control="textfield"
                label="Author"
                name="author"
                {...formik.getFieldProps("author")}
              />
            </Grid>
            <div className="errors">
              {" "}
              {formik.touched.author ? formik.errors.author : ""}{" "}
            </div>
            <Grid item xs={12}>
              <FormController
                control="textfield"
                label="Price"
                name="price"
                {...formik.getFieldProps("price")}
              />
            </Grid>
            <div className="errors">
              {" "}
              {formik.touched.price ? formik.errors.price : ""}{" "}
            </div>
            <Grid item xs={12}>
              <Button
                size="small"
                variant="contained"
                onClick={formik.handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </DialogContainer>
      </Dialog>
    </>
  );
};

export default AddBook;
