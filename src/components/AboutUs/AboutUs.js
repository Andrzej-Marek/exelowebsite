import React from "react";
import { Container } from "reactstrap";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Header from "../HomePage/elements/Header";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loading from "../Loading/Loading";

const Wrapper = styled.div``;
const Content = styled.div`
  h2,
  p {
    text-align: center;
  }

  h2 {
    font-weight: 700;
    padding: 20px 0;
  }

  p {
    line-height: 35px;
    font-weight: 700;
  }
`;

const AboutUs = () => {
  return (
    <Wrapper>
      <Header
        text={
          <div>
            O NAS <br />
            SŁÓW KILKA
          </div>
        }
      />
      <Container>
        <Content>
          <h2>
            O <span>NAS</span>
          </h2>
          <p>
            Jesteśmy <span>młodym zespołem</span> oraz dynamicznie rozwijającą
            się firmą. Jako że sami spotkaliśmy się z wieloma warsztatami,
            których jedyną wartością był pieniądz oraz szybki zysk,
            postanowiliśmy stworzyć <span>coś unikatowego</span>, coś gdzie
            zadowolenie klienta będzie na pierwszym miejscu. Wierzymy, że jeśli
            klient będzie zadowolony to tak samo my, będziemy w stanie coś
            osiągnąć. Tak właśnie powstał projekt EXELO s.c jako kolejny odział
            firmy EXELO.
          </p>
        </Content>
        <Content>
          <h2>
            CZYM SIĘ <br /> <span>ZAJMUJEMY ?</span>
          </h2>
          <p>
            Jako nieliczni oferujemy Państwu{" "}
            <span>pełny serwis klimatyzacji</span> samochodowej i nie chodzi nam
            tu tylko o nabicie czynnika, ale również o diagnozę i naprawę
            niesprawnego układu! <span> Ogrzewania postojowe </span> również nie
            są dla nas żadną zagadką. Zakładamy, naprawiamy, diagnozujemy,
            krótko mówiąc pełny serwis. Poza tym zajmujemy się{" "}
            <span> naprawami bieżącymi </span>
            pojazdów mechanicznych, jak i elektrycznych oraz wymianą części
            eksploatacyjnych. Świadczymy również{" "}
            <span> usługi wulkanizacji </span> oraz serwisu, jak i sprzedaży
            opon / felg. U nas mogą Państwo również przechować opony / felgi /
            opony z felgami.
          </p>
        </Content>
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default AboutUs;
