import React from "react";
import loading from "../../img/loading.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    height: 40px;
  }
`;
const Loading = () => {
  return (
    <Wrapper>
      <img src={loading} alt="" />
    </Wrapper>
  );
};

export default Loading;
