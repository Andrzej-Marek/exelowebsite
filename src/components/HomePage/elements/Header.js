import React from "react";
import styled from "styled-components";
import media from "../../../media";
import { Container, Row, Col } from "reactstrap";
import bacground from "../../../img/background.jpg";
import NavBar from "./NavBar";

const Wrapper = styled.div`
  background-image: url(${bacground});
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-size: cover;
  background-position: center;
  height: 40vw;
  max-height: 700px;
`;

const ContentWrapper = styled.div`
  display: none;
  h2 {
    margin: 0;
  }

  ${media.tablet`
display: block;
height: 100%;

`}
`;

const RightSection = styled.div`

${media.tablet`
    height: 100%;
    width: 100%;
    background-color: rgba(61, 61, 61, 0.6);

    display: flex;
    flex-direction: column;
    justify-content: center;
    

    h2 {
        padding-left: 30px;
        padding-top: 30px;
        font-weight: 700;
        font-size: 35px;
    }
    `}


        ${media.laptop`

        h2 {

            font-size: 50px ;
        }
        `}

        ${media.desktop`
        h2 {

            font-size: 60px;
        }
        `}

        ${media.large`
        h2 {

            font-size: 100px;
        }
        `}


`;

const Header = ({ text, history }) => {
  return (
    <Wrapper>
      <NavBar history={history} />
      <ContentWrapper>
        <Row style={{ height: "100%", margin: 0, padding: 0 }}>
          <Col ms="6" style={{ margin: 0, padding: 0 }} />
          <Col ms="6" style={{ height: "100%", margin: 0, padding: 0 }}>
            <RightSection>
              <h2>{text}</h2>
            </RightSection>
          </Col>
        </Row>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;
