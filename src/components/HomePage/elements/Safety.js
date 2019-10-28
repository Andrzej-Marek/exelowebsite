import React from "react";
import styled from "styled-components";
import media from "../../../media";
import background2 from "../../../img/background2.jpg";
import { Container, Row, Col } from "reactstrap";

const Wrapper = styled.div`
  background: url(${background2}) no-repeat;
  background-size: 100% 100%;

  background-position: center;

  height: 400px;

  ${media.laptop`
  background-attachment: fixed;
  height: 600px;
  `}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 700;
    text-align: center;
  }

  p {
    max-width: 450px;
    text-align: center;
  }
`;

const Safety = () => {
  return (
    <Wrapper>
      <Container style={{ height: "100%" }}>
        <ContentWrapper style={{ height: "100%" }}>
          <h2>
            BEZPIECZEŃSTWO <br />
            <span>NAJWAŻNIEJSZE </span>
          </h2>
          <p>
            Każdy pojazd pozostawiony w naszym warsztacie, objęty jest
            ubezpieczeniem. Co więcej, na wszelkie naprawy oraz nowe części
            udzielana jest <span> gwarancja. </span>
          </p>
        </ContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Safety;
