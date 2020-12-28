import React from "react";

import Wrapper, { GlowingHeading } from "./styled";

const GlowingText = ({ children }) => {
  return (
    <Wrapper>
      <GlowingHeading>{children}</GlowingHeading>
    </Wrapper>
  );
};

export default GlowingText;
