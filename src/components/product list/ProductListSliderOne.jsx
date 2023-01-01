import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Container } from '../GlobalStyles'
import ProductCardOne from '../product cards/ProductCardOne'
import { Box,SectionTitle } from '../index'
import { useSelector, useDispatch } from 'react-redux'
import { GetRecommendedProducts } from '../../redux/reducers/productsReducer'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

function ProductListSliderOne() {
    const { recommendedProducts, loading } = useSelector(
        (state) => state.productState
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetRecommendedProducts())
    }, [])

    return (
        <Box>
            <Container>
                <SectionTitle title="В Тренде" />
                {loading ? (
                    <ProductSkeleton
                        baseColor='#ebebeb'
                        highlightColor='#fff'
                        speed={2}
                    />

                ) : (
                    <StyledSwiper slidesPerView={5} spaceBetween={40}>
                        {recommendedProducts.map((product) => (
                            <SwiperSlide key={product.id}>
                                <ProductCardOne product={product} />
                            </SwiperSlide>
                        ))}
                    </StyledSwiper>
                )}
            </Container>
        </Box>
    )
}

export default ProductListSliderOne

const StyledSwiper = styled(Swiper)`
    padding:10px;
    margin-bottom: 35px;

`
const ProductSkeleton = styled(Skeleton)`
    margin-top: 10px;
    width: 238px;
    height: 300px;
    border-radius: 30px;
`