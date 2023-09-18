import React from 'react'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import Hero from './components/Hero/Hero'
import { ProductCard } from '../shared/components/cards/Card'
import Category from './components/category/Category'
import TrendingProduct from './components/products/TrendingProduct'
const HomePage = () => {
    return (
        <>
            <DefaultWrapper>
                <Hero />
                <Category />
                <TrendingProduct />
            </DefaultWrapper>
        </>
    )
}

export default HomePage