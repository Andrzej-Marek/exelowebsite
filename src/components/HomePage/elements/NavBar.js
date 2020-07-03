import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import styled from "styled-components";
import cross from "../../../img/cross.png";
import hamb from "../../../img/hamb.png";
import logo from "../../../img/logo.png";
import media from "../../../media";
const Wrapper = styled.div`
  padding: 20px 0;

  ${media.tablet`
position: absolute;
top: 0;
left: 0;
right: 0;
background: transparent;
z-index: 999;
padding: 10px 0;
`}

  h5 {
    font-weight: 700;
    margin: 0;
  }

  ${media.tablet`
h5 {
    font-size: 25px;
}
`}

  ${media.laptop`
h5 {
    font-size: 40px;
}
`}
`;
const HambIcon = styled.div`
  img {
    height: 30px;
  }
  ${media.tablet`
  img {
    display: none;
  }
`}
`;
const ContentWrapper = styled.div``;

const StyledTopRow = styled(Row)`
  transition: 0.3s;

  transform: ${({ top }) => (top ? "translateY(-50px)" : "translateY(0px)")};
  align-items: center;

  ${media.nav`
transform: ${({ top }) => (top ? "translateY(-70px)" : "translateY(0px)")};
`}
`;

const StyledCol = styled(Col)`
  display: flex;
  justify-content: flex-end;
`;

const Telephon = styled.div`
  display: none;

  ${media.tablet`
display: block;
p {
     margin: 0;
 }
`}
`;

const DownTabletMenu = styled.div`
  @media (max-width: 768px) {
    transition: 1s;
    display: block;
    transform: ${({ active }) =>
      active ? "translateY(0px)" : "translateY(-2000px)"};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: black;
    height: 100%;
    z-index: 66;
    position: fixed;

    img {
      position: absolute;
      top: 20px;
      right: 20px;
      height: 30px;
    }
  }

  ${media.tablet`
display: block;
width: 100%;
height: 60px;

img {
  display: none;
}
`}
`;

const NavComponentWrapper = styled.div`
  @media (max-width: 769px) {
    height: 100%;
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0;

      li {
        display: flex;
        flex-direction: column;
        list-style: none;
        font-weight: 700;
        position: relative;
        padding: 10px 0;

        a {
          color: white;

          :hover,
          :active,
          :focus {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
  }

  ${media.tablet`
  top: ${({ top }) => (top ? 0 : "70px")};
  transition: 0.3s;
  position: fixed;

  background: black;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  ul {
    display: flex;
    align-items: center;
    margin-bottom: 0;
    height: 100%;

    li {
      display: flex;
      justify-content: center;
      flex-direction: column;
      list-style: none;
      height: 100%;
      font-weight: 700;
      position: relative;

      &:after {
        content: "";
        border-right: 1px solid white;
        position: absolute;
        top: 0px;
        right: 0px;
        width: 2px;
        height: 100%;
      }

      a {
        color: white;

        :hover,
        :active,
        :focus {
          color: white;
          text-decoration: none;
        }
      }
    }
  }


`}
  ${media.nav`
top: ${({ top }) => (top ? 0 : "70px")};
`}
`;

const StyledLink = styled(Link)`
  ${media.tablet`
    padding: 0 20px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`}
`;

const Logo = styled.img`
  max-height: 30px;

  ${media.tablet`
  max-height: 50px;

  `}
`;
const NavBar = () => {
  const [active, toggleActive] = useState(false);
  const [pageOffset, setPageOffset] = useState(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    setPageOffset(window.pageYOffset);
  };
  return (
    <Wrapper>
      <ContentWrapper>
        <Container>
          <StyledTopRow top={pageOffset > 1 ? "true" : ""}>
            <Col>
              <Logo src={logo} alt="" />
            </Col>
            <StyledCol>
              <HambIcon>
                <img src={hamb} alt="" onClick={() => toggleActive(!active)} />
              </HambIcon>
              <Telephon>
                <p>
                  <Link to="/kontakt" style={{ color: "white" }}>
                    <b> Umów się na wizytę! </b>
                  </Link>
                </p>
              </Telephon>
            </StyledCol>
          </StyledTopRow>
        </Container>
        <DownTabletMenu active={active}>
          <img src={cross} alt="" onClick={() => toggleActive(!active)} />
          <NavComponentWrapper top={pageOffset > 1 ? "true" : ""}>
            <Container style={{ height: "100%" }}>
              <ul>
                <li>
                  <StyledLink to="/" onClick={() => toggleActive(false)}>
                    STRONA GŁÓWNA
                  </StyledLink>
                </li>
                <li>
                  <StyledLink onClick={() => toggleActive(false)} to="/onas">
                    O NAS
                  </StyledLink>
                </li>
                <li>
                  <StyledLink
                    onClick={() => toggleActive(false)}
                    to="/piaskowanie"
                  >
                    PIASKOWANIE I <br /> SZKIEŁKOWANIE
                  </StyledLink>
                </li>
                <li>
                  {" "}
                  <StyledLink
                    onClick={() => toggleActive(false)}
                    to="/ogrzewania"
                    style={{ textAlign: "center" }}
                  >
                    OGRZEWANIA <br /> POSTOJOWE
                  </StyledLink>
                </li>
                <li>
                  <StyledLink onClick={() => toggleActive(false)} to="/cennik">
                    CENNIK
                  </StyledLink>
                </li>
                <li>
                  {" "}
                  <StyledLink onClick={() => toggleActive(false)} to="/kontakt">
                    KONTAKT
                  </StyledLink>
                </li>
              </ul>
            </Container>
          </NavComponentWrapper>
        </DownTabletMenu>
      </ContentWrapper>
    </Wrapper>
  );
};

export default NavBar;
