import React from 'react'

const ProfileWrapperInfo = () => {
    return (
        <div className='py-4 bg-white font-WorkSans px-4 gap-4 rounded grid md:grid-cols-2'>
            <div className="about">
                <h2 className='text-xl md:text-2xl font-medium text-slate-800 '>About Samsung</h2>
                <p className='text-sm md:text-base leading-6 mt-2 md:mt-3 text-slate-600'>
                    Samsung was founded as a grocery trading store on March 1, 1938, by Lee Byung-Chull. He started his business in Taegu, Korea, trading noodles and other goods produced in and around the city and exporting them to China and its provinces. (The company name, Samsung, came from the Korean for “three stars.”)                </p>
            </div>
            <div className=" rounded overflow-hidden">
                <ul className='h-full flex gap-0.5 flex-col justify-center'>
                    <li className='profileWrapperList'>
                        <h2 className='profileWrapperListTitle'>Total Products</h2>
                        <p className='shrink-0  text-slate-500'>1.5k</p>
                    </li>
                    <li className='profileWrapperList'>
                        <h2 className='profileWrapperListTitle'>Total Reviews</h2>
                        <p className='shrink-0  text-slate-500'>4k</p>
                    </li>
                    <li className='profileWrapperList'>
                        <h2 className='profileWrapperListTitle'>Location</h2>
                        <p className='shrink-0  text-slate-500'>Dhaka,Bangladesh</p>
                    </li>
                    <li className='profileWrapperList'>
                        <h2 className='profileWrapperListTitle'>Joined On</h2>
                        <p className='shrink-0  text-slate-500'>May 4,2017</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProfileWrapperInfo