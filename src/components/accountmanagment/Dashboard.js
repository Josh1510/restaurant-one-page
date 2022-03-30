import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

export default function Dashboard() {
  const [error, setError] = useState('');
  const { currentUser, signout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      await signout();
      history.push('/signin');
    } catch {
      setError('Sign Out Failed');
    }
  }

  return (
    <>
      {error}
      <p>Logged in as: {currentUser.email}</p>
      <p>username: {currentUser.displayName}</p>
      <Button
        onClick={handleLogout}
        size="large"
        variant="outlined"
        color="primary"
        type="submit"
      >
        Sign Out
      </Button>
    </>
  );
}
