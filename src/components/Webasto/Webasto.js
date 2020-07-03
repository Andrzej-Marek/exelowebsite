import React from "react";
import styled from "styled-components";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import Header from "../HomePage/elements/Header";
import webasto_imgs from "../../img/webasto_imgs.jpg";
import Footer from "../Footer/Footer";
const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  text-align: center;
  h2 {
    font-weight: 700;
    padding: 20px 0;
  }

  p {
    a {
      color: ${({ theme }) => theme.color.green};
      text-decoration: underline;
    }
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  img {
    width: 100%;
    height: auto;
    position: relative;
  }

  :before {
    content: "";
    position: absolute;
    left: -1000px;
    height: 100%;
    width: 2000%;
    background: #ededed;
  }
`;
const Webasto = () => {
  return (
    <Wrapper>
      <Header
        text={
          <div>
            OGRZEWANIA
            <br />
            POSTOJOWE
          </div>
        }
      />
      <Container>
        <ContentWrapper>
          <h2>
            OGRZEWANIA <span>POSTOJOWE </span>{" "}
          </h2>

          <p>
            Oferujemy{" "}
            <span> usługę montażu jak i serwisu urządzeń grzewczych.</span>
            Zajmujemy się wszystkimi typami pojazdów lądowych, od samochodów
            osobowych, przez samochody dostawcze aż po autobusy. Dzięki naszym
            doświadczeniu, pomożemy <span> dobrać urządzenie </span> dedykowane
            pod samochód jak i spełniające jak najbardziej oczekiwania klienta.
            Posiadamy też w swojej ofercie <span> tanie alternatywy, </span> dla
            osób mniej wymagających. W celu wycen prosimy o{" "}
            <Link to="/kontakt"> kontakt </Link>
          </p>

          <h2>
            FIRMY JAKIE <span>OBSŁUGUJEMY </span>{" "}
          </h2>
          <ImgWrapper>
            <img src={webasto_imgs} alt="" />
          </ImgWrapper>
        </ContentWrapper>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default Webasto;
