import React from 'react';
import HomePage from '../pages/home/HomePage';
import Slider from '../components/slider/Slider';
import { BrowserRouter, Route, Routes as Rotas, Navigate } from 'react-router-dom'

//Pagina de erro Global
import ErrorPage from '../pages/error/ErrorPage';

const Routes = () => {

  return (
<BrowserRouter>
    <Rotas>
        <Route path='*' element={<ErrorPage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/sliders' element={<Slider/>} />
    </Rotas>
</BrowserRouter>
  )
}

export default Routes
