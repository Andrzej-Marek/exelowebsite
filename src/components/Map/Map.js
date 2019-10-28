import React from "react";
import styled from "styled-components";
import media from "../../media";
import { Container, Row, Col } from "reactstrap";
import fb from "../../img/fb.png";
import google from "../../img/google.png";

const Wrapper = styled.div`
  overflow: hidden;
`;

const MapWrapper = styled.div`
  height: 100%;
  min-height: 300px;
  width: 100%;
  iframe {
    height: 100%;
    width: 100%;
  }
  .mapouter {
    position: relative;
    text-align: right;
    height: 100%;
    width: 100%;
  }
  .gmap_canvas {
    overflow: hidden;
    background: none !important;
    height: 100%;
    width: 100%;
  }

  ${media.laptop`
  
  min-height: 400px;
  `}
`;

const ContactTile = styled.div`
  position: relative;
  color: white;
  height: 100%;
  padding: 20px 5px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-weight: 700;
  }
  p {
    margin-bottom: 0;
  }

  h3 {
    font-weight: 700;
    padding: 40px 0 20px 0;
  }

  :before {
    content: "";
    position: absolute;
    left: -100px;
    right: -100px;
    top: 0;
    width: 400vw;
    height: 100%;
    background: ${({ theme }) => theme.color.green};
    z-index: -1;
  }

  ${media.tablet`

  :before {
  left: 0px;

  }
  `}
`;

const SocialIcons = styled.div`
  padding: 0 0 10px 0;
  img {
    height: 40px;
    width: auto;
    margin: 0 10px;
  }
`;

const Map = () => {
  return (
    <Wrapper>
      <Row>
        <Col xs="12" md="6" lg="7" style={{ paddingRight: 0 }}>
          <MapWrapper>
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=Warszowice%20Pszczy%C5%84ska%20116&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                />
              </div>
            </div>
          </MapWrapper>
        </Col>
        <Col xs="12" md="6" lg="5" style={{ paddingLeft: 0 }}>
          <ContactTile>
            <h2>Kontakt</h2>
            <p>ul. Pszczyńska 116</p>
            <p>43-254 Warszowice</p>

            <h3>+48 794 965 465</h3>
            <SocialIcons>
              <a
                href="https://www.facebook.com/ExeloSerwisSamochodowy"
                target="_blank"
              >
                <img src={fb} alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.google.com/search?rlz=1C5CHFA_enPL817PL817&ei=oiJMXZ_yNuSJrwT_t5HICA&q=Serwis+Klimatyzacji+Warszowice+%2F+%C5%BBory+%7C+EXELO%2C+Pszczy%C5%84ska%2C+Warszowice%2C+%C5%9Bl%C4%85skie&oq=Exelo+warszowice+s&gs_l=psy-ab.1.0.38.1068.1164..2154...0.0..0.121.219.1j1......0....1..gws-wiz.......35i302i39.Sxvqc3rBYEw"
              >
                <img src={google} alt="" />
              </a>
            </SocialIcons>
            <p style={{ padding: "0 10px" }}>
              <i>
                Nie chcesz czekać w kolejce ? <br /> Zadzwoń i umów się na
                konkretną godzinę!
              </i>
            </p>
          </ContactTile>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default Map;
