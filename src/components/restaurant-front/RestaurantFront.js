import React, { useRef, useEffect, useState } from "react";
import Menu from "./Menu";
import Header from "./header/Header";
import styled from "styled-components";
import "../../styles/styles.css";
import axios from "axios";
import Reserve from "./reserve/Reserve";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

export default function RestaurantFront() {
  const [siteData, setSiteData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios("/siteData")
      .then((response) => {
        setSiteData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <FrontContainer>
      {!loading && <Header data={siteData} />}
      <Menu />
      {!loading && <Reserve data={siteData} />}
      {!loading && <Contact data={siteData} />}
      <Footer />
    </FrontContainer>
  );
}

const FrontContainer = styled.div`
  overflow: hidden;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
`;
