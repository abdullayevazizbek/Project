import React from 'react'
import styled from 'styled-components'
import HeaderMain from './HeaderMain'
import HeaderTop from './HeaderTop'

function Header(props) {
    const { open, setOpen } = props
    return (
        <Headers>
            <HeaderTop />
            <HeaderMain open={open} setOpen={setOpen} />
        </Headers>
    )
}

export default Header

const Headers = styled.div`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
`