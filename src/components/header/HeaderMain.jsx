import React from 'react'
import styled from 'styled-components'
import { CategoryIcon, Logo, SearchIcon, OrderBtnIcon, HearteBtnIcon, BacketBtnIcon, RegistrationBtnIcon } from '../../assets/icons'
import { colors } from './../../helpers/colors'
import { Box, Container, SemiSpan, Span } from '../index'
import { useDispatch, useSelector } from 'react-redux'
import { CategoryOpenAC } from '../../redux/reducers/modalReducer'

function HeaderMain() {
    const { categoryModal } = useSelector((state) => state.modalState)
    const dispatch = useDispatch()
    return (
        <Wrapper>
            <Container>
                <HeaderMainWrapp>
                    <Box mr='64px'>
                        <Logo />
                    </Box>

                    <Wrapp>
                        <CategoryMenuBtn
                            onClick={() => dispatch(CategoryOpenAC())}
                        >
                            <CategoryIcon />
                            <Span color={colors.white}>Категории</Span>
                        </CategoryMenuBtn>

                        <SearchWrapper>
                            <SearchInput placeholder='Введите запрос...' />
                            <SearchBtn>
                                <SearchIcon />
                            </SearchBtn>
                        </SearchWrapper>
                        <IconsWrap>
                            <IconsWrapBtns>
                                <OrderBtnIcon />
                                <SemiSpan>
                                    Мои заказы
                                </SemiSpan>
                            </IconsWrapBtns>
                            <IconsWrapBtns>
                                <HearteBtnIcon />
                                <SemiSpan>
                                    Избранное
                                </SemiSpan>
                            </IconsWrapBtns>
                            <IconsWrapBtns>
                                <BacketBtnIcon />
                                <SemiSpan>
                                    Корзина
                                </SemiSpan>
                            </IconsWrapBtns>
                            <RegistrationBtn>
                                <RegistrationBtnIcon />
                                <SemiSpan>
                                    Регистрация
                                </SemiSpan>
                            </RegistrationBtn>
                        </IconsWrap>
                    </Wrapp>
                </HeaderMainWrapp>
            </Container>
        </Wrapper>
    )
}

export default HeaderMain

const Wrapper = styled.div`
    padding: 16px 0;
    background-color: ${colors.white};
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`
const CategoryMenuBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 36px;
    background: ${colors.blue['600']};
    border-radius: 0px 20px 0px 0px;
`
const HeaderMainWrapp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`



const SearchWrapper = styled.div`
    overflow: hidden;
    margin: 0 14px;
    width: 450px;
    display: flex;
    height: 36px;
    border: 1px solid ${colors.blue['700']};
    border-radius: 10px;
`

const SearchInput = styled.input`
    flex-grow: 1;
    padding: 6px 0 6px 26px;
    border: none;
    outline: none;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;

    &::placeholder {
        color: '#BEBEBE';
    }
`
const Wrapp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const SearchBtn = styled.button`
    width: 62px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.blue['700']};
    border-radius: 10px;
`
const IconsWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const IconsWrapBtns = styled.button`
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const RegistrationBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 7px 13px ;
    border: none;
    border-radius: 5px;
    background-color: ${colors.blue['500']};
    color: ${colors.white};
    
`