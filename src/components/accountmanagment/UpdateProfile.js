import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';

import { useAuth } from '../../contexts/AuthContext';

import validator from 'validator';

import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 400,
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function UpdateProfile() {
  const classes = useStyles();

  const emailRef = useRef();
  const nameRef = useRef();
  const pswrdRef = useRef();
  const pswrdConfRef = useRef();

  const { currentUser, updatePassword, updateEmail, updateName } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const history = useHistory();

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (pswrdRef.current.value !== pswrdConfRef.current.value) {
      return setError('Passwords do not match');
    }

    setLoading(true);
    setError('');

    const promises = [];

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (pswrdRef.current.value) {
      promises.push(updatePassword(pswrdRef.current.value));
    }
    if (nameRef.current.value) {
      promises.push(updateName(nameRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push('/user-dashboard');
      })
      .catch(() => {
        setError('failed to update account');
      })
      .finally(() => setLoading(false));

    try {
      setError('');
      setLoading(true);
      history.push('/');
    } catch {
      setError('Account creation failed');
    }
    setLoading(false);
  }

  return (
    <>
      <div>
        <strong>NOT COMPLETE</strong>
      </div>
      <Card className={classes.root}>
        <h2>Update Details</h2>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          //   onSubmit={handleSubmit}
        >
          <div>
            <TextField
              inputRef={emailRef}
              id="email-required"
              label="Email"
              required
              defaultValue={currentUser.email}
              onChange={(e) => validateEmail(e)}
              error={emailError.length > 0}
            />
            <TextField
              inputRef={nameRef}
              id="name-optional"
              label="Name"
              defaultValue={currentUser.displayName}
            />
            <TextField
              inputRef={pswrdRef}
              id="password-required"
              label="Password"
              type="password"
              required
              placeholder="leave blank to keep old password"
            />
            <TextField
              inputRef={pswrdConfRef}
              id="password-confirmation"
              label="Password Confirmation"
              type="password"
              error={error.length > 0}
              helperText={error}
              required
              placeholder="leave blank to keep old password"
            />
          </div>

          <Button
            disabled={loading}
            size="large"
            variant="outlined"
            color="primary"
            type="submit"
          >
            UPDATE
          </Button>
        </form>
      </Card>
      <Link to="/user-dashboard">Cancel</Link>
    </>
  );
}
