import React from "react";
import styled from "styled-components";
import media from "../../media";
import { Container, Row, Col } from "reactstrap";
import img1 from "../../img/img1.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import img4 from "../../img/img4.jpg";
import Slider from "react-slick";

const Wrapper = styled.div`
  padding: 10px 0 0 0;
  text-align: center;
  h2 {
    text-transform: uppercase;
    font-weight: 700;
    padding: 0.3em;
  }
`;

const Content = styled.div`
  width: 100vw;
  height: 100%;
  background: white;
`;

const SliderItem = styled.div`
  padding: 10px 10px;
  display: flex !important;
  justify-content: center !important;
  /* flex-direction: column; */
  align-items: center !important;
  height: 100%;
  width: 100%;
  img {
    height: 40px;
    margin: 0 10px;
    padding: 0;
  }

  ${media.laptop`
  img {
    height: 60px;
  }
  `}
`;

const DownContent = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: center;

  p {
    text-align: center;
    padding: 10px 0;
    margin-bottom: 0;
    font-size: 14px;
  }
`;
const Footer = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    // centerMode: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Wrapper>
      <h2>
        Nasi <span>parnerzy</span>
      </h2>
      <Content>
        <Slider {...settings}>
          <SliderItem>
            <img src={img1} alt="" />
          </SliderItem>
          <SliderItem>
            <img src={img2} alt="" />
          </SliderItem>
          <SliderItem>
            <img src={img3} alt="" />
          </SliderItem>
          <SliderItem>
            <img src={img4} alt="" />
          </SliderItem>
        </Slider>
      </Content>
      <DownContent>
        <p>
          Strony internetowe EXELO Andrzej Marek ©&nbsp;2019 All Rights Reserved
        </p>
      </DownContent>
    </Wrapper>
  );
};

export default Footer;
