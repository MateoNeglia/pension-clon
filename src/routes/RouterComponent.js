import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResetPassword from '../views/Login/ResetPassword/ResetPassword.js';
import ForgotPassword from '../views/Login/ForgotPassword/ForgotPassword.js';
import Login from '../views/Login/Login.js';

export default function RouterComponent() {
    return (
      <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Login />} />
      </Routes>
    );
  }