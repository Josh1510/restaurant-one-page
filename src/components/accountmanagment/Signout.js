import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function SignOut() {
  const [error, setError] = useState('');
  const { signout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      await signout();
      history.push('/');
    } catch {
      setError('Sign Out Failed');
    }
  }

  return (
    <>
      {error}
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
