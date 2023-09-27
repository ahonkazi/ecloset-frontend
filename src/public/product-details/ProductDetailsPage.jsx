import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import DefaultWrapper from '../shared/components/wrappers/DefaultWrapper'
import Breadcrumb from '../shared/components/breadcrumb/Breadcrumb'
import ProductBreadCrumb from './components/breadcrumb/ProductBreadCrumb'
import ProductInfoWrapper from './components/ProductInfoWrapper/ProductInfoWrapper'
import ProductDetailsTab from './components/ProductDetailsTab/ProductDetailsTab'
import SimilerProducts from './components/SimilerProducts/SimilerProducts'
const ProductDetailsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.title = 'E-closet | Black Short Tops'

    }, [])
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <DefaultWrapper>
                <ProductBreadCrumb />
                <ProductInfoWrapper />
                <ProductDetailsTab />
                <SimilerProducts />
            </DefaultWrapper>
        </motion.section>
    )
}

export default ProductDetailsPage