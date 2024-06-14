import React from "react";
import { Button, Typography } from "@equinor/eds-core-react";
import styled from "styled-components";
import mcLogo from "./mclogo.png";
import commLogo from "./commlogo2.png";

const LandingPageWrapper = styled.main`
  width: 100vw;
  & h4 {
    margin-top: 0;
    margin-bottom: 12px;
  }
`;
const AppSection = styled.section`
  height: 50vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const CommAppSection = styled(AppSection)`
  background-color: #ffecf0;
`;

const LogoImage = styled.img`
  width: 60px;
  object-fit: contain;
`;

function App() {
  return (
    <LandingPageWrapper>
      <AppSection>
        <LogoImage src={mcLogo} />
        <Typography variant={"h4"}>Mechanical Completion</Typography>
        <a href={"https://apps.procosys.equinor.com/mc"}>
          <Button color={"danger"}>Go to app</Button>
        </a>
      </AppSection>
      <CommAppSection>
        <LogoImage src={commLogo} />
        <Typography variant={"h4"}>Commissioning</Typography>
        <a href={"https://apps.procosys.equinor.com/comm"}>
          <Button color={"danger"}>Go to app</Button>
        </a>
      </CommAppSection>
    </LandingPageWrapper>
  );
}

export default App;
