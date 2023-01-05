import React from 'react'
import styled from 'styled-components'
import { colors } from '../../helpers/colors'
import { H4, H5, SemiSpan } from '../index'

function Registration() {
    return (
        <Wrapper>
            <RegistrationPanel>
                <RegistrationPanelNav>
                    <H4>Войти / Регистрация</H4>
                </RegistrationPanelNav>
                <RegistrationPanelMain>
                    <Telephone>
                        <SemiSpan>
                            Номер телефона
                        </SemiSpan>
                        <TelephoneInput placeholder='+998907134713' />
                    </Telephone>
                    <Telephone>
                        <SemiSpan>
                            Пароль
                        </SemiSpan>
                        <TelephoneInput type={'password'} placeholder='**********'  />
                    </Telephone>
                    <Telephone>
                        <SemiSpan>
                            Подтвердите пароль
                        </SemiSpan>
                        <TelephoneInput type={'password'} placeholder='**********' />
                    </Telephone>
                </RegistrationPanelMain>
                <RegistrationPanelFooter>
                    <ParolBtn>
                        <H5>Получить код</H5>
                    </ParolBtn>
                </RegistrationPanelFooter>
            </RegistrationPanel>
        </Wrapper>


    )
}

export default Registration

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
    background-color: rgba(87, 87, 87, 0.4);
    margin: 0 auto;
`

const RegistrationPanel = styled.div`
    position: fixed;
    top: 30%;
    left: 40%;
    width: 349px;
    height: 425px;
    padding: 30px 18px;
    background-color: ${colors.white};
    border-radius: 10px;
`
const RegistrationPanelNav = styled.div`
    margin-bottom: 20px;
    padding: 0 57px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const RegistrationPanelMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 70px;

`

const Telephone = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const TelephoneInput = styled.input`
    width: 100%;
    height: 40px;
    margin: 6px 0;
    padding: 10px 0 10px 17px;
    background-color: ${colors.inputbg};
    border: 1px solid ${colors.inputborder};
    border-radius: 10px;
    outline: none;
    
    & ::placeholder{
        color: ${colors.inputcolors};
    }
`
const RegistrationPanelFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const ParolBtn = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    background-color: ${colors.blue['600']};
    color: ${colors.white};
`