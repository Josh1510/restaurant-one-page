import React, { useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import styled from 'styled-components';

export default function WidgetOptions(data) {
  const [rid, setRid] = useState(_.get(data, ['data', 'rid'], ''));
  const [widgetStyle, setWidgetStyle] = useState(
    _.get(data, ['data', 'style'], '')
  );

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const numberRegex = new RegExp('^[0-9]+$');

  const handleChangeRid = (e) => {
    numberRegex.test(e.target.value) ? setError(false) : setError(true);
    if (!error) {
      setRid(e.target.value);
    }
  };

  const handleChangeWidget = (event) => {
    setWidgetStyle(event.target.value);
  };

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    console.log(`id = ${rid} , & style = ${widgetStyle}`);

    axios
      .put('/siteDatareserveData', {
        rid: rid,
        style: widgetStyle,
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
    <WidgetOptionsContainer>
      <WidgetOptionsHeader>Booking Widget Settings</WidgetOptionsHeader>

      <StyledForm onSubmit={handleSubmit}>
        <TextField
          required
          id="standard-required"
          label="OpenTable Restaurant ID"
          defaultValue={rid}
          variant="standard"
          onChange={handleChangeRid}
          error={error}
          helperText={error && 'RID should be numbers only'}
          disabled={loading}
        />
        <FormControl sx={{ m: 1, minWidth: 400 }}>
          <InputLabel id="demo-simple-select-readonly-label">
            Widget Style
          </InputLabel>
          <Select
            style={{ width: 200 }}
            label="Widget Style"
            defaultValue={widgetStyle}
            onChange={handleChangeWidget}
            disabled={loading}
          >
            <MenuItem value={'standard'}>Standard</MenuItem>
            <MenuItem value={'tall'}>Tall</MenuItem>
            <MenuItem value={'wide'}>Wide</MenuItem>
          </Select>
        </FormControl>
        <StyledInput type="submit" disabled={loading}></StyledInput>
      </StyledForm>
    </WidgetOptionsContainer>
  );
}

const WidgetOptionsHeader = styled.div`
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

const WidgetOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 10px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-top: 10px;
`;
