import React, { useEffect } from 'react'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import Hero from './components/Hero/Hero'
import { ProductCard } from '../shared/components/cards/Card'
import Category from './components/category/Category'
import TrendingProduct from './components/products/TrendingProduct'
import Footer from '../shared/footer/Footer'
import { motion } from 'framer-motion'
const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'E-closet | The Biggest Ecommerce Platform'
    }, [])
    return (

        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>

            <DefaultWrapper>
                <Hero />
                <Category />
                <TrendingProduct />

            </DefaultWrapper>
        </motion.section >

    )
}

export default HomePage