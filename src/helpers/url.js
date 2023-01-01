export const domain = 'https://ecommerce.main-gate.appx.uz'
export const APP_VERSION = '/v1'
export const APP_MODE = '/dev'

// Banners

export const BannersListUrl = '/events/list'

// Brands

export const BrandsListUrl = '/brand/list?page=1&featured=1&sort=id,asc'


// Categories

export const CategoriesListUrl = '/category/list'
export const GetCategoryWithSlug = (slug) => `/category/${slug}`

// Products

export const RecommendedProductsListUrl = '/product/list'
export const GetProductWithSlug = function (slug) {
    return `/product/${slug}`
}