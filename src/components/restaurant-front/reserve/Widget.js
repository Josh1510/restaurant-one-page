import React, { useState, useEffect, Component } from "react";

import styled from "styled-components";
import ScriptTag from "react-script-tag";

export default function Widget(props) {
  const preferedStyle = props.data.reserveData.style.toString();
  const rid = props.data.reserveData.rid.toString();

  //TODO implement logic to change widget style on window resize if required.

  return (
    <WidgetContainer>
      <ScriptTag
        type="text/javascript"
        src={`https://www.opentable.com/widget/reservation/loader?rid=${rid}&type=standard&theme=${preferedStyle}&iframe=true&domain=com&lang=en-US&newtab=false&ot_source=Restaurant%20website`}
      />
    </WidgetContainer>
  );
}

const WidgetContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 900px;
`;
