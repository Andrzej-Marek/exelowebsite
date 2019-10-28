import React from "react";
import styled from "styled-components";
import media from "../../../media";
import service1 from "../../../img/service1.jpg";
import service2 from "../../../img/service2.jpg";

import { Container, Row, Col } from "reactstrap";

const Wrapper = styled.div`
  overflow-x: hidden;
`;
const StyledCol = styled(Col)`
  ${media.tablet`
    order: 2;
    `}
`;
const ContentWrapper = styled.div``;

const GreenTile = styled.div`
position: relative;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding: 20px 0;
min-height: 300px;
height: 100%;

h3 {
    text-align: center;
    font-weight: 700;
    z-index: 2;
}



:before {
    content: "";
    position: absolute;
    overflow: hidden;
    top: 0;
    left: -200vw;
    height: 100%;
    width: 600%;
    z-index: 0;
    background: ${({ theme }) => theme.color.green};
}
${media.tablet`


h3 {
    text-align: left;
    padding-left: 5px;
}
:before {
    left: 0;
}
`}

${media.laptop`
height: 100%;
padding-left: 20px;
`}


${media.desktop`


h3 {
    padding-left: 30px;
    font-size: 2rem;
}

`}
`;

const TileWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  ${media.tablet`
padding-top: 50px;
`}
`;

const Tile = styled.div`
  padding: 10px 0;
  text-align: center;

  p {
    padding: 10px 0;
    text-align: start;

    font-size: 12px;
    line-height: 150%;
    color: grey;
    margin: 0 auto;
    max-width: 400px;
  }

  span {
    color: ${({ theme }) => theme.color.green};
    font-weight: 700;
  }

  img {
    max-width: 100%;
  }

  h4 {
    font-weight: 700;
  }

  ${media.laptop`
span {
    font-size: 2rem;
}

h4 {
    font-size: 1.6rem;
}

`}

  ${media.desktop`
span {
    font-size: 2.3rem;
}

h4 {
    font-size: 2rem;
}

`}
`;

const ServiceSection = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <StyledCol xs="12" md="5" xl="4">
            <GreenTile>
              <h3>
                KOMPLEKSOWE <br /> USŁUGI DLA <br /> TWOJEGO <br /> SAMOCHODU
              </h3>
            </GreenTile>
          </StyledCol>
          <Col xs="12" md="7" xl="8">
            <TileWrapper>
              <Row>
                <Col xs="12" md="6">
                  <Tile>
                    <h4>
                      Mechanika <br /> <span> Pojazdowa </span>
                    </h4>
                    <img src={service1} alt="" />
                    <p>
                      Zajmiemy się każdym samochodem nieważne czy jest to fiat
                      126p, czy ferrari, każde auto, jak i klient będzie czuł
                      się u nas wyjątkowo.
                    </p>
                  </Tile>
                </Col>
                <Col xs="12" md="6">
                  <Tile>
                    <h4>
                      Klimatyzacja <br /> <span> Samochodowa </span>{" "}
                    </h4>
                    <img src={service2} alt="" />
                    <p>
                      Jako jedni z nielicznych zajmujemy się diagnostyką i
                      naprawami klimatyzacji samochodowej. Możesz być pewny, że
                      prześwietlimy cały układ „na wylot”.
                    </p>
                  </Tile>
                </Col>
              </Row>
            </TileWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ServiceSection;
