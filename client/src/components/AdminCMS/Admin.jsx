import React, { useState } from 'react';
import { Box, Heading, } from '@chakra-ui/react'
import Login from './Login';
import AdminDashboard from './AdminDashboard';

const Admin = (props) => {
  const [success, setSuccess] = useState(false);
  const [credential, setCredential] = useState({user: ''});
  const login = () => {
    setSuccess(true);
  }
  const getLoginInfo = (data) => {
    setCredential(data);
  };

  if (!success) return (
    <Login getLoginInfo={getLoginInfo} login={login}/>
  )
  if (success) return (
    <AdminDashboard credential={credential} />
  )
};

export default Admin;