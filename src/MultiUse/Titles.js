import media from "../media";
import styled from "styled-components";

export const H2 = styled.h2`
        padding-left: 20px;
        font-weight: 700;
        font-size: 25px;

        ${media.tablet`
        padding-left: 30px;
        font-weight: 700;
        font-size: 35px;
        `}

        ${media.laptop`
        font-size: 50px !important;
        `}

        ${media.desktop`
        font-size: 60px !important;
        `}
`