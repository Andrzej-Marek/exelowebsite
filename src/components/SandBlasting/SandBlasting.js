import React from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import styled from "styled-components";
import webasto_imgs from "../../img/webasto_imgs.jpg";
import Footer from "../Footer/Footer";
import Header from "../HomePage/elements/Header";
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
const SandBlasting = () => {
  return (
    <Wrapper>
      <Header
        text={
          <div>
            SZKIEŁKOWANIE
            <br />I PIASKOWANIE
          </div>
        }
      />
      <Container>
        <ContentWrapper>
          <h2>
            Szkiełkowanie <span> Aluminium </span>{" "}
          </h2>

          <p>
            Oferujemy usługę <span>szkiełkowania aluminium i stali</span>,{" "}
            części motocyklowe, samochodowe, głowice, felgi, bębny, pokrywy
            silników, całe kartery silnika. Do szkiełkowania używamy wysokiej
            jakości ścierniwa w postaci <span>kulek szklanych</span>, dzięki
            czemu czyszczony element, odzyskuje swój pierwotny fabryczny wygląd
            i strukturę powierzchni.
          </p>

          <h2>
            Piaskowanie <span> Stali </span>{" "}
          </h2>

          <p>
            W naszej ofercie znajduje się również{" "}
            <span>piaskowanie stali.</span>
          </p>
          <h2>
            Szybki czas <span> realizacji </span>{" "}
          </h2>

          <p>
            <span> Przyjmujemy elementy aż do 1 metra</span> ( szerokości /
            długości / wysokości )! Dzięki zastosowaniu maszyny kabinowej,
            możemy zaproponować Państwu niezwykła prezycję w niskiej cenie.
            <span>
              Czas realizacji w większości przypadkach nie przekracza 24h!
            </span>
          </p>

          <h2>
            Dowiedz sie <span> więcej </span>{" "}
          </h2>

          <p>
            Interesuje Cię wycena?{" "}
            <Link to="/kontakt"> Skontaktuj się z nami! </Link>
          </p>
        </ContentWrapper>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default SandBlasting;
