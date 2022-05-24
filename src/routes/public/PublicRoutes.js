import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import SignIn from '../../pages/sign-in/SignIn';
import Home from '../../pages/home/Home';
import SignUp from '../../pages/sign-up/signUp';
import DetailsPage from '../../pages/Details/DetailsPage';
import AddNewProduct from '../../pages/new-product/AddNewProduct';
import NewProduct from '../../pages/new-product/NewProduct';
import DetailsNewProductPage from '../../components/details/DetailsNewProductPage';
import Modify from '../../pages/new-product/Modify';

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/add" element={<AddNewProduct />} />
      <Route path="/new" element={<NewProduct />} />
      <Route path="/new/:id" element={<DetailsNewProductPage />} />
      <Route path="/new/modify/:id" element={<Modify />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/details/:id" element={<DetailsPage />} />
    </Routes>
  );
}
