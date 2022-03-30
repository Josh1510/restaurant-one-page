import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';

import { useAuth } from '../../contexts/AuthContext';

import validator from 'validator';

import { Link } from 'react-router-dom';

import './stylesAM.css';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();

  const emailRef = useRef();

  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [message, setMessage] = useState('');

  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('Enter valid Email!');
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Email Sent! Check your emails for further instructions');
    } catch {
      setError('Password reset failed');
    }
    setLoading(false);
  }

  return (
    <div className="containerDiv">
      <Card className={`${classes.root}, centerMe`}>
        <div className="applyPaddingSides">
          <h2>Forgot Password?</h2>
          {error}
          {message}
          <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="textFieldContainer, applyMarginBottom">
              <TextField
                inputRef={emailRef}
                id="email-required"
                label="Email"
                required
                onChange={(e) => validateEmail(e)}
                error={emailError.length > 0}
                fullWidth
              />
            </div>

            <Button
              disabled={loading}
              size="large"
              variant="outlined"
              color="primary"
              type="submit"
            >
              Reset Password
            </Button>
          </form>
        </div>
        <div className="applyMarginBottom">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
        <div className="applyMarginBottom">
          know your login details? <Link to="/signin">Sign In</Link>
        </div>
      </Card>
    </div>
  );
}
