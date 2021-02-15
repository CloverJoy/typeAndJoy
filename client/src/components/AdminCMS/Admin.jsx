import React, { useState } from 'react';
import { Box, Heading, useToast } from '@chakra-ui/react'
import Login from './Login';
import AdminDashboard from './AdminDashboard';

const Admin = (props) => {
  const [success, setSuccess] = useState(false);
  const toast = useToast();
  const login = () => {
    setSuccess(true);
    toast({
      position: 'bottom-left',
      title: `Welcome Seradotwav!`,
      description: 'Succesfully login to admin dashboard',
      status: 'success',
      duration: 2222,
      isClosable: true,
    })
  }
  if (!success) return (
    <Login login={login}/>
  )
  if (success) return (
    <AdminDashboard />
  )
};

export default Admin;