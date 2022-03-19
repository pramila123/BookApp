import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import AddBook from '../Books/AddBook'
import BookList from '../Books/BookList'
import Navbar from '../Navbar/Navbar'
import store from '../Redux/store'

import { Provider } from 'react-redux'
const AppRouter = () => {
  return (
   <>
   <Router>
     <Provider store={store}>
      <Navbar/>
      <AddBook/>
      <BookList/>
      </Provider>
   </Router>
   </>
  )
}

export default AppRouter