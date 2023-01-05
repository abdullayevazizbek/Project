import React from 'react'
import { Banner, ProductListSliderOne,Brands,ProductListSliderTwo,Registration } from '../components'
import Page from '../components/page/Page'

function Home() {

    return (
        <Page>
            <Banner />
            <ProductListSliderOne />
            <ProductListSliderTwo/>
            <Brands/>
            <Registration/>
        </Page>
    )
}

export default Home