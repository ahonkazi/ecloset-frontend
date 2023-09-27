import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { BiShow, BiDotsVerticalRounded } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'
const AddressItem = () => {
    const [enableMenu, setEnableMenu] = useState(false)
    return (
        <div className="address-item relative px-4 py-6 sm:px-4 sm:py-4 bg-gray-100 rounded text-gray-600 font-WorkSans flex items-center justify-between">
            <div className="flex gap-4">
                <p className='font-medium min-w-[70px] sm:min-w-[100px]'>Default</p>
                <p>Bhendabari,south road 200m from center</p>
            </div>
            <div className="sm:flex hidden shrink-0 gap-4 text-xl">

                <button className='h-7 w-7 duration-300 active:scale-95  active:bg-gray-300 flex items-center justify-center rounded-full'>
                    <BiShow />
                </button>
                <button className='h-7 hover:text-rose-500 w-7 duration-300 active:scale-95  active:bg-gray-300 flex items-center justify-center rounded-full'>
                    <MdOutlineDeleteOutline />
                </button>
            </div>
            <div className={`${enableMenu ? 'bg-gray-200' : ''} absolute h-7 w-7 right-1  sm:hidden top-1 flex items-center justify-center rounded-full active:scale-95 duration-300 hover:bg-gray-200`}>
                <button onClick={() => setEnableMenu(!enableMenu)}><BiDotsVerticalRounded /></button>
            </div>
            <AnimatePresence>
                {enableMenu && (
                    <motion.div className='absolute top-8 right-4 rounded sm:hidden shadow-1   bg-gray-200' style={{ 'overflow': 'clip' }} initial={{ width: 0, height: 0 }} animate={{ width: 'auto', height: 'auto' }} exit={{ width: 0, height: 0 }} >
                        <div className="menu-area w-[120px] shrink-0 ">
                            <button onClick={() => setEnableMenu(false)} className='w-full text-start duration-300 px-4 py-2 flex items-center justify-between group hover:opacity-80'>
                                <span>Show</span>
                                <span>
                                    <BiShow />
                                </span>
                            </button>
                            <button onClick={() => setEnableMenu(false)} className='w-full text-start duration-300 px-4 py-2 flex items-center justify-between group  hover:opacity-80'>
                                <span>Remove</span>
                                <span className=''>
                                    <MdOutlineDeleteOutline className='group-hover:text-rose-500 duration-300' />
                                </span>
                            </button>

                        </div>
                    </motion.div>
                )}

            </AnimatePresence>

            <div className="modal-area flex items-center justify-center w-screen h-screen fixed bg-black top-0 left-0 z-[200] bg-opacity-50">
                <div className="modal-wrapper select-text px-4 py-8 w-[700px] h-[600px] bg-white rounded-md">
                    <div className="modal-header text-center">
                        <h2 className='text-2xl'>Add new address</h2>
                    </div>
                </div>
            </div>
        </div>)
}

export default AddressItem