import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import WidgetOptions from './WidgetOptions';
import HeaderOptions from './HeaderOptions';
import ContactOptions from './ContactOptions';
import HoursOptions from './Hours/HoursOptions';

export default function RestaurantDetails() {
  const [siteData, setSiteData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // user changes

  useEffect(() => {
    axios('/siteData')
      .then((response) => {
        setSiteData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {!loading && <HeaderOptions data={_.get(siteData, ['headerData'], '')} />}
      {!loading && (
        <WidgetOptions data={_.get(siteData, ['reserveData'], '')} />
      )}
      {!loading && (
        <ContactOptions data={_.get(siteData, ['contactData'], '')} />
      )}
      {!loading && <HoursOptions data={_.get(siteData, ['hoursData'], '')} />}
    </div>
  );
}
