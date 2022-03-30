import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { TextField } from '@material-ui/core';
import styled from 'styled-components';

export default function HeaderOptions(data) {
  const [restaurantName, setRestaurantName] = useState(
    _.get(data, ['data', 'restaurantName'], '')
  );
  const [restaurantImage, setRestaurantImage] = useState(
    _.get(data, ['data', 'image'], '')
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChangeName = (e) => {
    setRestaurantName(e.target.value);
  };

  const handleChangeImage = (event) => {
    setRestaurantImage(event.target.value);
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    console.log(`name = ${restaurantName} , & imagelink = ${restaurantImage}`);

    axios
      .put('/siteDataheaderData', {
        restaurantName: restaurantName,
        image: restaurantImage,
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
    <HeaderOptionsContainer>
      <HeaderOptionsHeader>Brand details</HeaderOptionsHeader>

      <StyledForm onSubmit={handleSubmit}>
        <TextField
          required
          id="standard-required"
          label="Restaurant Name"
          defaultValue={restaurantName}
          variant="standard"
          onChange={handleChangeName}
          error={error}
          disabled={loading}
        />

        {/* Image upload feature not completed. */}
        <TextField
          required
          id="standard-required"
          label="NOT COMPLETED - Upload Image"
          defaultValue={restaurantImage}
          variant="standard"
          onChange={handleChangeImage}
          error={error}
          helperText={error && 'RID should be numbers only'}
          disabled
        />
        <StyledInput type="submit" disabled={loading}></StyledInput>
      </StyledForm>
    </HeaderOptionsContainer>
  );
}

const HeaderOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 10px;
`;

const HeaderOptionsHeader = styled.div`
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
