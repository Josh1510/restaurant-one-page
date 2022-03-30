import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';
import validateEmail from '../../utils/validateEmail';
import { Email } from '@material-ui/icons';

export default function ContactOptions(data) {
  const [address, setAddress] = useState(_.get(data, ['data', 'address'], ''));
  const [phone, setPhone] = useState(_.get(data, ['data', 'phone'], ''));
  const [email, setEmail] = useState(_.get(data, ['data', 'email'], ''));

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(`email is ${email}`);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    if (validateEmail(event.target.value)) {
      setEmail(event.target.value);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    console.log(
      `address = ${address} , & phone = ${phone} , & email = ${email}`
    );

    axios
      .put('/siteDatacontactData', {
        address: address,
        phone: phone,
        email: email,
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ContactOptionsContainer>
      <ContactOptionsHeader>Contact Details</ContactOptionsHeader>

      <StyledForm onSubmit={handleSubmit}>
        <TextField
          required
          id="standard-required"
          label="Address"
          defaultValue={address}
          variant="standard"
          onChange={handleAddressChange}
          //error={error}
          disabled={loading}
        />
        <TextField
          required
          id="standard-required"
          label="Phone Number"
          defaultValue={phone}
          variant="standard"
          onChange={handlePhoneChange}
          //error={error}
          disabled={loading}
        />
        <TextField
          required
          id="standard-required"
          label="Email Address"
          defaultValue={email}
          variant="standard"
          onChange={handleEmailChange}
          error={error}
          helperText={error && 'Please check your email is valid'}
          disabled={loading}
        />
        <StyledInput type="submit"></StyledInput>
      </StyledForm>
    </ContactOptionsContainer>
  );
}

const ContactOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 10px;
`;

const ContactOptionsHeader = styled.div`
  padding 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(max(16px, 3vw), 75px);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-bottom:10px
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-top: 10px;
`;
