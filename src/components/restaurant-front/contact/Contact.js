import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import OpenHoursPrinter from '../../utils/arrayPrinter/OpenHoursPrinter';
// images
import callIcon from '../../../images/call_icon.svg';
import emailIcon from '../../../images/email_icon.svg';
import addressIcon from '../../../images/place_icon.svg';

export default function Contact(props) {
  console.log(props);
  return (
    <ContactContainer id="contactContainer">
      <ContactHeader>CONTACT</ContactHeader>
      <ContactDetailsContainer>
        {_.get(props, ['data', 'contactData', 'phone'], '') !== '' && (
          <ContactDetails>
            <StyledImg src={callIcon} alt="call" />
            Call: {_.get(props, ['data', 'contactData', 'phone'], '')}
          </ContactDetails>
        )}
        {_.get(props, ['data', 'contactData', 'email'], '') !== '' && (
          <ContactDetails>
            <StyledImg src={emailIcon} alt="email" />
            Email: {_.get(props, ['data', 'contactData', 'email'], '')}
          </ContactDetails>
        )}
        {_.get(props, ['data', 'contactData', 'address'], '') !== '' ? (
          <ContactDetails>
            <StyledImg src={addressIcon} alt="address" />
            Address: {_.get(props, ['data', 'contactData', 'address'], '')}
          </ContactDetails>
        ) : (
          'Please log in and add your address'
        )}
        <OpenHoursPrinter props={_.get(props, ['data', 'hoursData'], '')} />
      </ContactDetailsContainer>
    </ContactContainer>
  );
}

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
`;

const ContactHeader = styled.div`
  padding 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: min(max(16px, 10vw), 75px);
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
`;

const StyledImg = styled.img`
  width: 30px;
  height: 30px;
  margin-bottom: -10px;
`;
const ContactDetailsContainer = styled.div`
  padding-bottom: 20px;
`;
const ContactDetails = styled.div`
  padding-top: 14px;
`;
