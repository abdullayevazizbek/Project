import React from 'react'
import styled from 'styled-components'
import BrandsButtonIcon from '../../assets/images/Brands/BrandsButtonIcon'
import { colors } from '../../helpers/colors'
import { Box, Flex, Container, SectionTitle, H1, H5, SemiSpan } from '../index'
// import bannerImg from '../../assets/images/banner_img.png'
// import { SamsungLogo,AppleLogo,HonorLogo,HuaweiLogo,XiomiLogo} from '../../assets/images/Brands/index'

function Brands() {
    const brand = [
        {
            id: 1,
            img: '',
            title: 'Samsung',
        },
        {
            id: 2,
            img: '',
            title: 'APPLE',
        },
        {
            id: 3,
            img: '',
            title: 'XIAOMI',
        },
        {
            id: 4,
            img: '',
            title: 'HUAWEI',
        },
        {
            id: 5,
            img: '',
            title: 'HONOR',
        },
        {
            id: 6,
            img: '',
            title: 'SAMSUNG',
        },
    ]
    return (
        <Wrapper>
            <Container>
                <SectionTitle title='Бренды' />
                <BrandsWrap>
                    <BrandsMain>
                        {
                            brand.map((item) => (
                                <BrandsCarts key={item.id}>
                                    <BrandsCart>
                                        <H1>{item.title}</H1>
                                        {/* <H1>{item.title}</H1> */}
                                    </BrandsCart>
                                    <H5>{item.title}</H5>
                                </BrandsCarts>
                            ))
                        }
                    </BrandsMain>
                    <BrandsButton>
                        <BrandsButtonIcon />
                        <SemiSpan>Показать еще</SemiSpan>
                    </BrandsButton>
                </BrandsWrap>
            </Container>
        </Wrapper>
    )
}

export default Brands

const Wrapper = styled(Box)`
    width: 100%;
`

const BrandsMain = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BrandsCarts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BrandsWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const BrandsCart = styled(Flex)`
    align-items: center;
    justify-content: center;
    width:214px;
    height: 74px;
    background-color: ${colors.white};
    box-shadow: 0px 4px 10px rgba(73, 118, 232, 0.1);
    margin-bottom: 10px;
`
export const BrandsButton = styled.button`
    width: 215px;
    height: 48px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 13px 35px;
    background: ${colors.white};
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(73, 118, 232, 0.1);
    margin: 35px 0;
`