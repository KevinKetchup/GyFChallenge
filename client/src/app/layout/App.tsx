import { createTheme, ThemeProvider } from "@mui/material"
import { Routes, Route } from "react-router-dom"
import AddProduct from "../../features/AddProduct"
import Catalog from "../../features/Catalog"
import HomePage from "../../features/HomePage"
import Header from "./Header"
import React from 'react';

function App() {

  const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: 'light' === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  return(
    <>
    <ThemeProvider theme={theme}>
    <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/AddProduct' element={<AddProduct />} />
        <Route path='/Catalog' element={<Catalog />} />
      </Routes>
    </ThemeProvider>
    </>
  )

}

export default App;