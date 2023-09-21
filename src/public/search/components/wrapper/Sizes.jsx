import React, { useContext } from 'react'
import { GetSharedContext } from '../../../shared/context/Context'
import { FilterHeading } from '../typography/Typography'

const Sizes = () => {
    const context = useContext(GetSharedContext)
    return (
        <div className="Sizes">
            <FilterHeading>Sizes</FilterHeading>
            <ul className='mt-4 flex flex-wrap gap-2'>
                {
                    context.productSizes.map((item, index) =>
                        <li className='px-4 py-2 border border-gray-200 text-gray-800 font-WorkSans  text-sm text-center cursor-pointer'>{item}</li>
                    )
                }
            </ul>
        </div>)
}

export default Sizes