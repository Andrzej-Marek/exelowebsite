import React, { useState, useEffect } from "react";

import Header from "./elements/Header";
import ServiceSection from "./elements/ServiceSection";
import TakeCare from "./elements/TakeCare";
import Safety from "./elements/Safety";
import Map from "../Map/Map";
import Footer from "../Footer/Footer";
import PromotionModal from "../PromotionModal/PromotionModal";

const HomePage = ({ history }) => {
  // const [modal, toggleModal] = useState(
  //   sessionStorage.getItem("modalOpen") && false
  // );

  // const togglePromotionModalHandler = () => {
  //   sessionStorage.setItem("modalOpen", "false");
  //   toggleModal(false);
  // };

  return (
    <>
      {/* <PromotionModal open={modal} toggle={togglePromotionModalHandler} /> */}
      <Header
        text={
          <div>
            TWÓJ SERWIS
            <br />
            SAMOCHODOWY
          </div>
        }
        history={history}
      />
      <ServiceSection />
      <TakeCare />
      <Safety />
      <Map />
      <Footer />
    </>
  );
};

export default HomePage;
