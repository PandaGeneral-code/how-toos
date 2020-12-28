import React from "react";

import GlowingText from "./screens/GlowingText/GlowingText";
import RootWrapper from "./styled";

const App = () => {
  return (
    <RootWrapper>
      <GlowingText>
        <div>Hello from the other side.</div>
      </GlowingText>
    </RootWrapper>
  );
};

export default App;
