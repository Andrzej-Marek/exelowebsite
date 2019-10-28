import React from "react";
import styled from "styled-components";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import logo from "../../img/logo.png";
const CustomModal = styled(Modal)`
  .modal-content {
    background: ${({ theme }) => theme.color.grey} !important;
    color: white;
  }

  .modal-header {
    border-bottom: ${({ theme }) => theme.color.green} solid 1px;

    h5 {
      font-weight: 700;
    }
  }
  .close {
    color: ${({ theme }) => theme.color.green};
    text-shadow: none;
    opacity: 1;
  }

  .modal-body {
    img {
      display: block;
      height: 60px;
      width: auto;
      margin: 0 auto;
      margin-bottom: 20px;
    }

    p,
    h5 {
      text-align: center;
    }

    h5 {
      font-weight: 700;
      font-size: 24px;
    }
  }
`;
const PromotionModal = ({ open, toggle, className }) => {
  return (
    <CustomModal isOpen={open} toggle={toggle} className={className}>
      <ModalHeader toggle={toggle}>PROMOCJA!</ModalHeader>
      <ModalBody>
        <img src={logo} alt="" />
        <h5>- 20% na wymianę oleju</h5>
        <p>
          <small>
            Aby skorzystać z naszej oferty, wystaczy podczać ustalania terminu
            usługi, wspomnieć o promocji z naszej strony.
          </small>
        </p>
      </ModalBody>
    </CustomModal>
  );
};

export default PromotionModal;
