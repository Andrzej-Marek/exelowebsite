import React, { useState } from "react";
import styled from "styled-components";
import media from "../../media";
import Header from "../HomePage/elements/Header";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import Axios from "axios";

const Wrapper = styled.div`
  overflow: hidden;
`;
const Content = styled.div``;

const ContactForm = styled.div`
  padding: 30px 0px;
  max-width: 500px;
  width: 100%;
  h2 {
    font-weight: 700;
    text-align: center;
    padding-bottom: 20px;
  }

  input {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.color.green};
    width: 100%;
    border-radius: 12px;
    color: white;
    ::placeholder {
      color: white;
      opacity: 0.7;
    }

    :hover,
    :active,
    :focus {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.color.green};
      color: white;
      box-shadow: none;
    }
  }

  textarea {
    border-radius: 12px;
    width: 100%;
    height: 120px;
    min-height: 120px;
    max-height: 120px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.color.green};
    color: white;
    ::placeholder {
      color: white;
      opacity: 0.7;
    }

    :hover,
    :active,
    :focus {
      background: transparent;
      border: 1px solid ${({ theme }) => theme.color.green};
      color: white;
      box-shadow: none;
    }
  }

  button {
    background: transparent;
    border: 2px solid ${({ theme }) => theme.color.green};
    width: 100%;
    border-radius: 12px;

    :hover,
    :active,
    :focus {
      transition: 0.5s;
      background: ${({ theme }) => theme.color.green};
      border: 2px solid ${({ theme }) => theme.color.green};
      box-shadow: none;
    }
  }

  ${media.laptop`
  padding: 30px 20px;
  `}
`;

const Hours = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;

  h2 {
    font-weight: 700;
    text-align: center;
    padding-bottom: 20px;
  }

  p {
    text-align: center;

    span {
      font-weight: 700;
    }
  }

  position: relative;
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: -100px;
    height: 300vh;
    width: 400vw;
    background: #363636;
    z-index: -1;
  }

  ${media.tablet`
  :before {
  left: -15px;

  }
  `}
`;

const Contact = () => {
  const [data, setData] = useState({
    email: "",
    title: "",
    message: ""
  });
  const [status, setStatus] = useState(false);
  const { email, title, message } = data;

  const submitHandler = e => {
    e.preventDefault();
    if (!email || !title || !message)
      return window.alert("Musisz wypelnic wszystkie pola");

    Axios.post("sendmail", { ...data })
      .then(res => {
        if (res.status === 200) {
          setStatus(true);
        }
      })
      .catch(err => console.log(err));
  };
  return (
    <Wrapper>
      <Header
        text={
          <div>
            MASZ PYTANIA? <br />
            ZADZWOŃ
          </div>
        }
      />
      <Content>
        <Container>
          <Row>
            <Col xs="12" md="6">
              <ContactForm>
                {status ? (
                  <h2>
                    WIADOMOŚĆ WYSŁANA <br /> <span> POMYŚLNIE </span>
                  </h2>
                ) : (
                  <>
                    <h2>
                      WYŚLIJ NAM <br /> <span> WIADOMOŚĆ </span>
                    </h2>
                    <Form onSubmit={submitHandler}>
                      <FormGroup>
                        <Input
                          type="email"
                          name="email"
                          placeholder="Podaj swój adres e-mail"
                          value={data.email}
                          onChange={e =>
                            setData({
                              ...data,
                              [e.target.name]: e.target.value
                            })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="text"
                          name="title"
                          placeholder="O co chcesz się zapytać? "
                          value={data.title}
                          onChange={e =>
                            setData({
                              ...data,
                              [e.target.name]: e.target.value
                            })
                          }
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          type="textarea"
                          name="message"
                          placeholder="Twoja wiadmość"
                          value={data.message}
                          onChange={e =>
                            setData({
                              ...data,
                              [e.target.name]: e.target.value
                            })
                          }
                        />
                      </FormGroup>
                      <Button>Wyślij !</Button>
                    </Form>
                  </>
                )}
              </ContactForm>
            </Col>
            <Col xs="12" md="6">
              <Hours>
                <h2>GODZINY</h2>
                <p>
                  Jesteśmy do Państwa dyspozycji <br />
                  od <span>poniedziałku do soboty</span> <br />w godzinach{" "}
                  <span>8:00 - 20:00.</span>
                </p>
              </Hours>
            </Col>
          </Row>
        </Container>
      </Content>
      <Map />
      <Footer />
    </Wrapper>
  );
};

export default Contact;
