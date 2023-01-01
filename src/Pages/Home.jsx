import React from 'react'
import { Banner, ProductListSliderOne,Brands,ProductCardTwo } from '../components'
import Page from '../components/page/Page'

function Home() {

    return (
        <Page>
            <Banner />
            <ProductListSliderOne />
            <ProductCardTwo/>
            <Brands/>
        </Page>
    )
}

export default Home