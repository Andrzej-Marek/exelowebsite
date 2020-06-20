import Axios from "axios";
import moment from "moment";
import "moment/locale/pl";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import styled from "styled-components";
import media from "../../media";
import Header from "../HomePage/elements/Header";

moment.locale("pl");

const Wrapper = styled.div``;
const ContentWrapper = styled.div`
  padding: 20px 0;
  h2 {
    font-weight: 700;
    text-align: center;
  }
`;
const DatePickWrapper = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input {
    border: 1px solid ${({ theme }) => theme.color.green};
    border-radius: 12px;
    background: transparent;
    color: white;
    text-align: center;
    padding: 10px 20px;
  }
`;

const InfoP = styled.p`
  padding-top: 5px;
  margin: 0;
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const CalendarWrapper = styled.div`
  text-align: center;

  h3 {
    font-weight: 700;
    font-size: 24px;
  }

  p {
    font-size: 12px;
  }
`;

const TimeSelectContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
`;

const CustomHour = styled.div`
  margin: 5px;
  padding: 5px;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.4s;
  color: ${({ reserved, theme }) => (reserved ? "#ff0000" : theme.color.green)};
  opacity: ${({ reserved }) => (reserved ? 0.8 : 1)};

  :hover {
    transform: translateY(-5px) scale(1.05);
  }
`;

const InfoContentWrapper = styled.div`
  padding: 20px;
`;
const Error = styled.p`
  font-size: 18px;
  color: #ff0000;
  margin: 0;
  text-align: left;
  margin-top: 5px;
`;

const SendSuccessMessage = styled.div`
  text-align: center;
  padding-top: 40px;
  h2 {
    font-weight: 700;
  }

  p {
    padding: 10px 0;
  }
`;
const HOUR_TIMES = [
  {
    hour: "8:00",
    value: 8
  },

  {
    hour: "9:00",
    value: "9"
  },
  {
    hour: "10:00",
    value: "10"
  },
  {
    hour: "11:00",
    value: "11"
  },
  {
    hour: "12:00",
    value: "12"
  },
  {
    hour: "13:00",
    value: "13"
  },
  {
    hour: "14:00",
    value: "14"
  },
  {
    hour: "15:00",
    value: "15"
  },
  {
    hour: "16:00",
    value: "16"
  },
  {
    hour: "17:00",
    value: "17"
  },
  {
    hour: "18:00",
    value: "18"
  },
  {
    hour: "19:00",
    value: "19"
  },
  {
    hour: "20:00",
    value: "20"
  }
];

const OnlineBooking = () => {
  const [day, setDay] = useState(null);
  const [choosedHour, setChoosedHour] = useState(null);
  const [bookingDates, setBookingDates] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    error: "",
    status: false,
    phone: "",
    message: ""
  });

  const onSelectedDate = async date => {
    setChoosedHour(null);
    setDay(date);
    setBookingDates(null);

    try {
      setLoading(true);
      const res = await Axios.post("/calendar/day-info", moment(date).format());
      let arrayWithBookingHours = [];
      res.data.map(el => {
        arrayWithBookingHours.push(moment(el.start).get("hour"));
      });
      setBookingDates(arrayWithBookingHours);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const displayHoursHandler = bookingDates => {
    return HOUR_TIMES.map(el => {
      let reserved = bookingDates.includes(parseFloat(el.value));
      return (
        <CustomHour
          key={el.hour}
          reserved={reserved}
          onClick={() => onHourClickHandler(el.value, reserved)}
        >
          {el.hour}
        </CustomHour>
      );
    });
  };

  const onHourClickHandler = (hour, reserved) => {
    if (reserved) return window.alert("Ta godzina jest już zarezerwowana.");
    setChoosedHour(hour);
  };

  const submitHandler = async e => {
    e.preventDefault();
    console.log(data);
    const { phone, message } = data;
    if (!phone)
      return setData({ ...data, error: "Musisz podać numer telefonu" });

    let dataToSend = {
      date: moment(day).add(choosedHour, "h")._d,
      phone,
      desc: message
    };

    try {
      let res = await Axios.post("/calendar/create-event", dataToSend);
      if (res.status === 200) {
        setData({
          error: "",
          status: true,
          phone: "",
          message: ""
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Wrapper>
      <Header
        text={
          <div>
            UMÓW SIĘ
            <br />
            ONLINE
          </div>
        }
      />
      <Container>
        {data.status ? (
          <SendSuccessMessage>
            <h2>
              DZIĘKUJEMY <span> ZA REZERWACJĘ </span>
            </h2>
            <p>
              Zapraszamy {moment(day).format("DD-MM-YYYY")} o godzinie:{" "}
              <span>{choosedHour}:00 </span>
            </p>

            <p>
              Coś wypadło? Interesuje Cię inny termin? Skontaktuj się z nami pod
              numerem tel: <span> +48 794 965 465 </span>
            </p>
          </SendSuccessMessage>
        ) : (
          <ContentWrapper>
            <h2>
              SPRAWDŹ <span> TERMINY </span>
            </h2>
            <DatePickWrapper>
              <DatePicker
                dateFormat="dd/MM/yyyy"
                placeholderText="Wybierz dzień"
                selected={day}
                onChange={onSelectedDate}
                minDate={new Date()}
                maxDate={moment().add(20, "d")._d}
              />
              {day && (
                <InfoP>
                  Wybrałeś dzień:{" "}
                  <span>
                    {moment(day)
                      .format("dddd")
                      .toUpperCase()}
                  </span>
                </InfoP>
              )}
              {choosedHour && (
                <InfoP>
                  Wybrałeś godzinę: <span> {choosedHour}:00 </span>
                </InfoP>
              )}
            </DatePickWrapper>

            <CalendarWrapper>
              <h3>Dostępne godziny:</h3>
              <p>
                Wybierz dostępną godzinę, następnie podaj swój adres e-mail Oraz
                wybierz rodzaj usługi
              </p>

              <TimeSelectContent>
                {bookingDates && displayHoursHandler(bookingDates)}
              </TimeSelectContent>

              <InfoContentWrapper>
                {choosedHour && day && (
                  <ContactForm>
                    {data.status ? (
                      <h2>
                        WIADOMOŚĆ WYSŁANA <br /> <span> POMYŚLNIE </span>
                      </h2>
                    ) : (
                      <>
                        <h2>
                          Potwierdź <span> rezerwację </span>
                        </h2>

                        <Form onSubmit={submitHandler}>
                          <FormGroup>
                            <Input
                              type="text"
                              name="phone"
                              placeholder="Podaj swój numer telefonu"
                              value={data.phone}
                              onChange={e =>
                                setData({
                                  ...data,
                                  [e.target.name]: e.target.value
                                })
                              }
                            />
                            <Error>{data.error ? data.error : null}</Error>
                          </FormGroup>

                          <FormGroup>
                            <Input
                              type="textarea"
                              name="message"
                              placeholder="Napisz nam wiadość ( opcjonalnie )"
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
                )}
              </InfoContentWrapper>
            </CalendarWrapper>
          </ContentWrapper>
        )}
      </Container>
    </Wrapper>
  );
};

const ContactForm = styled.div`
  padding: 30px 0px;
  max-width: 500px;
  margin: 0 auto;
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
      font-size: 14px;
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
      font-size: 14px;
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

export default OnlineBooking;
