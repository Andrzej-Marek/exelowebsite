import React from "react";
import styled from "styled-components";
import media from "../../media";
import Header from "../HomePage/elements/Header";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loading from "../Loading/Loading";
import { Row, Col, Container } from "reactstrap";
import Footer from "../Footer/Footer";

const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  h1 {
    color: ${({ theme }) => theme.color.green};
    text-align: center;
    font-weight: 700;
    padding: 20px 0;
  }
`;
const Content = styled.div`
  background: ${({ green }) => (green ? "#73B712" : "transparent")};
  padding-bottom: 30px;
  h2 {
    font-weight: 700;
    padding: 20px 0 10px 0;
    text-align: center;
  }

  h5 {
    text-align: center;
    color: white;
    padding-top: 30px;
  }
`;

const StyledRow = styled(Row)`
  border-bottom: 1px solid ${({ green }) => (green ? "white" : "grey")};
  padding: 10px 0 5px 0;
`;
const StyledCol = styled(Col)`
  p {
    margin-bottom: 0;
  }

  :nth-child(1) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  :nth-child(2) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: right;
  }

  ${media.tablet`
  :nth-child(1) {
    p {
      padding-left: 20px;
    }
  }

  :nth-child(2) {

    p {
      padding-right: 20px;
    }
  }
  `}
`;

const Prices = ({ history }) => {
  const AirCondition = () => {
    const { loading, error, data } = useQuery(gql`
      {
        airconditions {
          service
          price
        }
      }
    `);

    if (loading) return <Loading />;
    if (error)
      return <p>Twoja przeglądarka nie obsługe wersji tej strony :( </p>;
    if (data)
      return data.airconditions.map((el) => (
        <StyledRow green key={el.service}>
          <StyledCol xs="9">
            <p>{el.service}</p>
          </StyledCol>
          <StyledCol xs="3">
            <p>{el.price}</p>
          </StyledCol>
        </StyledRow>
      ));
  };

  const Mechanic = () => {
    const { loading, error, data } = useQuery(gql`
      {
        mechanics {
          service
          price
        }
      }
    `);

    if (loading) return <Loading />;
    if (error)
      return <p>Twoja przeglądarka nie obsługe wersji tej strony :( </p>;
    if (data)
      return data.mechanics.map((el) => (
        <StyledRow key={el.service}>
          <StyledCol xs="8">
            <p>{el.service}</p>
          </StyledCol>
          <StyledCol xs="4">
            <p>{el.price}</p>
          </StyledCol>
        </StyledRow>
      ));
  };

  return (
    <Wrapper>
      <Header
        text={
          <div>
            CENNY KTÓRE
            <br />
            NIE PRZERAŻAJĄ
          </div>
        }
        history={history}
      />

      <ContentWrapper>
        <h1>CENNIK</h1>
        <Content>
          <Container>
            <h2>Klimatyzacja</h2>
            {AirCondition()}
          </Container>
        </Content>
        <Content green>
          <Container>
            <h2>Mechanika</h2>
            {Mechanic()}
          </Container>
        </Content>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

export default Prices;
