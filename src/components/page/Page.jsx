import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { CategoryCloseAC } from '../../redux/reducers/modalReducer'
import Categories from '../categories/Categories'
import Footer from '../Footer/Footer'
import Header from '../header/Header'
import LoginModal from '../LoginModal/LoginModal.'

function Page(props) {
    const { children } = props
    const dispatch = useDispatch()
    const ref = useRef()
    useOnClickOutside(ref, () => dispatch(CategoryCloseAC()))
    return (
        <>
            <Header />
            <Categories customRef={ref} />
            <LoginModal/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    )
}

export default Page


const Main = styled.div`
    padding-top: 150px;
    flex: 1 1 auto;
`