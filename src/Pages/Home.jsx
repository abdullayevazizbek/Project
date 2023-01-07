import React from 'react'
import { Banner, ProductListSliderOne,Brands,ProductListSliderTwo } from '../components'
import Page from '../components/page/Page'

function Home() {

    return (
        <Page>
            <Banner />
            <ProductListSliderOne />
            <ProductListSliderTwo/>
            <Brands/>
        </Page>
    )
}

export default Home