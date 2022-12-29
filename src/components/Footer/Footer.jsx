import React from 'react'
import styled from 'styled-components'
import { colors } from '../../helpers/colors'
import { Flex, Container, Box, Span, H4 } from '../index'

function Footer() {
    // const impus  = [
    //     {
    //         id:1,
    //         title:'Lorem Ipsum',
    //     },
    //     {
    //         id:2,
    //         title:'Lorem Ipsum',
    //     },
    //     {
    //         id:3,
    //         title:'Lorem Ipsum',
    //     },
    //     {
    //         id:4,
    //         title:'Lorem Ipsum',
    //     },
    //     {
    //         id:5,
    //         title:'Lorem Ipsum',
    //     },

    // ]
    return (
        <Wrapper>
            <Container>
                <Carts>
                    <CartBox>
                        <H4>Lorem Ipsum</H4>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                    </CartBox>
                    <CartBoxs>
                        <CartBox>
                            <H4>Lorem Ipsum</H4>
                            <Span>Lorem Ipsum</Span>
                            <Spans >Lorem Ipsum</Spans>

                        </CartBox>
                        <CartBox>
                            <H4>Lorem Ipsum</H4>
                            <Span>Lorem Ipsum</Span>
                            <Span>Lorem Ipsum</Span>
                        </CartBox>
                    </CartBoxs>
                    <CartBox >
                        <H4>Lorem Ipsum</H4>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                    </CartBox>
                    <CartBox >
                        <H4>Lorem Ipsum</H4>
                        <Span>Lorem Ipsum</Span>
                        <Span>Lorem Ipsum</Span>
                    </CartBox>
                </Carts>
            </Container>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.div`
    background-color: ${colors.blue[500]};
`
const Carts = styled(Flex)`
    justify-content: space-around;
    padding: 70px 0;
`
const CartBox = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    & H4{
       color :${colors.white} ;
       margin-bottom: 10px;
    }
    & Span{
        color: ${colors.gray};
        margin-bottom: 10px;
    }
`
const CartBoxs = styled.div`

`
const Spans = styled(Span)`
    margin-bottom: 41px;
`