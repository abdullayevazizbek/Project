import React from 'react'
import { Banner, ProductListSliderOne,Brands,ProductCardTwo } from '../components'
import Page from '../components/page/Page'
import Registration from '../components/Registration/Registration'

function Home() {

    return (
        <Page>
            <Banner />
            <ProductListSliderOne />
            {/* <ProductCardTwo/> */}
            <Brands/>
            <Registration/>
        </Page>
    )
}

export default Home