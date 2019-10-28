import React from "react";
import styled from "styled-components";
import media from "../../../media";
import { Container, Row, Col } from "reactstrap";
import item1 from "../../../img/item1.png";
import item2 from "../../../img/item2.png";
import item3 from "../../../img/item3.png";
import item4 from "../../../img/item4.png";

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Loading from "../../Loading/Loading";

const Wrapper = styled.div`
  overflow: hidden;
`;

const LeftTile = styled.div`
  position: relative;
  color: black;
  padding: 0 10px;

  h3 {
    color: black;
    text-align: center;
    position: relative;
    font-weight: 700;
    padding: 10px 0 20px 0;
  }

  p {
    text-align: center;
    position: relative;
    :after {
      content: "";
      position: absolute;
      border-bottom: 1px solid grey;
      bottom: -5px;
      width: 100%;
      left: 0;
    }
  }

  :before {
    content: "";
    position: absolute;
    top: -200px;
    height: 200vw;
    right: -200px;

    width: 400vw;
    background: #ededed;
    z-index: 0;
  }

  ${media.tablet`
  padding: 10px 10px;
  p {
    text-align: left;
  }


  :before {
    right: 0px;
  }
  `}
`;

const ItemWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Item = styled.div`
  background: white;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 2;
  display: flex;
  align-items: center;

  p {
    color: black;
    margin: 0;
    padding-left: 20px;
    font-weight: 700;
  }

  img {
    padding-left: 10px;
    height: 50%;
    width: auto;
  }

  :before {
    content: "";
    position: absolute;
    width: 400vw;
    background: white;
    left: -100vw;
    height: 100%;
    z-index: -1;
    border-left: 2px solid ${({ theme }) => theme.color.green};
  }

  :nth-child(odd) {
    :before {
      border-top: 1px solid ${({ theme }) => theme.color.green};
      border-bottom: 1px solid ${({ theme }) => theme.color.green};
    }
  }

  :nth-child(1) {
    :before {
      border-top: none;
      border-bottom: 1px solid ${({ theme }) => theme.color.green};
    }
  }

  ${media.tablet`
  
  :before {
    left: 0;
  }
  `}
`;

const TakeCare = () => {
  const TakeCareList = () => {
    const { loading, error, data } = useQuery(gql`
      {
        takecares {
          name
        }
      }
    `);

    if (loading) return <Loading />;
    if (error) return <p>Error :(</p>;
    if (data) return data.takecares.map(el => <p key={el.name}>{el.name}</p>);
  };

  const TakeCareListTwo = () => {
    const { loading, error, data } = useQuery(gql`
      {
        takecaretwoes {
          name
        }
      }
    `);

    if (loading) return <Loading />;
    if (error) return <p>Error :(</p>;
    if (data)
      return data.takecaretwoes.map(el => <p key={el.name}>{el.name}</p>);
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs="12" md="8" style={{ padding: 0 }}>
            <LeftTile>
              <h3>Zajmujemy się:</h3>
              <Row>
                <Col xs="12" md="6">
                  {TakeCareList()}
                </Col>
                <Col xs="12" md="6">
                  {TakeCareListTwo()}
                </Col>
              </Row>
            </LeftTile>
          </Col>
          <Col xs="12" md="4" style={{ padding: 0 }}>
            <ItemWrapper>
              <Item>
                <img src={item1} alt="" />
                <p>
                  SAMOCHODY <span> OSOBOWE </span>
                </p>
              </Item>
              <Item>
                <img src={item2} alt="" />
                <p>
                  SAMOCHODY <span> CIĘŻAROWE </span>
                </p>
              </Item>
              <Item>
                <img src={item3} alt="" />
                <p>
                  POJAZDY <span> BUDOWLANE </span>
                </p>
              </Item>
              <Item>
                <img src={item4} alt="" />
                <p>
                  POJAZDY <span> UŻYTKOWE </span>
                </p>
              </Item>
            </ItemWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default TakeCare;
