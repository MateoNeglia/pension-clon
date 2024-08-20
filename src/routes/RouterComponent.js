import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResetPassword from '../views/Login/ResetPassword/ResetPassword.js';
import ForgotPassword from '../views/Login/ForgotPassword/ForgotPassword.js';
import CreatePassword from '../views/Login/CreatePassword/CreatePassword.js';
import EmailConfirmation from '../views/Login/EmailConfirmation/EmailConfirmation.js';
import MainDashboard from '../views/Dashboard/MainDashboard.js';
import Login from '../views/Login/Login.js';
import MainDashboard from '../views/Dashboard/MainDashboard.js';

export default function RouterComponent() {
    return (
      <Routes>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/email-confirmation" element={<EmailConfirmation />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<MainDashboard/>} />

      </Routes>
    );
  }