import React from "react";
import styled from "styled-components";
import { colors } from "../../helpers/colors";

function LoginModal() {
    return (
        <Wrapper>Login Modal</Wrapper>
    )
}
export default LoginModal

const Wrapper  = styled.div`
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%, -50%);
    background-color: ${colors.white};
    border-radius: 10px;
    padding: 30px 18px;
`