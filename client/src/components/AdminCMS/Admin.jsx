import React, { useState } from 'react';
import { Box, Heading } from '@chakra-ui/react'
import Login from './Login';
import AdminDashboard from './AdminDashboard';

const Admin = (props) => {
  const [success, setSuccess] = useState(false);
  const login = () => {
    setSuccess(true);
  }
  if (!success) return (
    <Login login={login}/>
  )
  if (success) return (
    <AdminDashboard />
  )
};

export default Admin;