import React, { useRef, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import Button from '@material-ui/core/Button';

import { useAuth } from '../../contexts/AuthContext';

import validator from 'validator';

import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import heroImage from '../../images/HeroImage.avif';
import './stylesAM.css';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function Signin() {
  const classes = useStyles();

  const emailRef = useRef();
  const pswrdRef = useRef();

  const { signin } = useAuth();
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await signin(emailRef.current.value, pswrdRef.current.value);
      history.push('/restaurant-details');
    } catch {
      setError('Account login failed');
    }
    setLoading(false);
  }

  return (
    <SignInContainer className="containerDiv">
      <Card className={`${classes.root}, centerMe`}>
        <div className="applyPaddingSides">
          <h2>Sign In</h2>
          {error}
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
              <TextField
                inputRef={pswrdRef}
                id="password-required"
                label="Password"
                type="password"
                required
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
              LOG IN
            </Button>
          </form>
          <PasswrdContainer className="applyMarginBottom">
            <Link to="/forgot-password">Forgotten password?</Link>
          </PasswrdContainer>
        </div>
      </Card>
    </SignInContainer>
  );
}

const SignInContainer = styled.div`
  background-image: url('${heroImage}');
  background-size: cover;
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

const PasswrdContainer = styled.div`
  padding-top: 10px;
`;
