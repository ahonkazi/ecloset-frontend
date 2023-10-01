import React, { useEffect, useState } from 'react'
import { PageAnimation, PageAnimationProfile } from '../../public/shared/components/page/PageAnimation'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const ProfileRefundsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageAnimationProfile>
      <div className="wrapper min-h-[510px] ">
        <div className="overflow-x-auto " style={{ 'scrollbarWidth': 'thin' }}>

          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>

                <th scope="col" className="px-6 py-3">
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Qantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
                <th scope="col" className="px-6 py-3">

                </th>
              </tr>
            </thead>
            <tbody>
              {[...new Array(8)].map((item, index) =>
                <tr className="bg-white border-b   hover:bg-gray-50">

                  <td scope="row" className="flex items-center px-6 py-4 whitespace-nowrap ">
                    5_dth9yi00ldk932jd8fhk
                  </td>
                  <td className="px-6 py-4">
                    pending
                  </td>
                  <td className="px-6 py-4">
                    40
                  </td>
                  <td className="px-6 py-4">
                    $450
                  </td>
                  <td className="px-2 py-3">
                    <Link to={'/profile/orders'} className='group'>
                      <button className='group-hover:bg-gray-200 duration-200 py-2 px-4 rounded'>
                        <AiOutlineArrowRight />
                      </button>
                    </Link>
                  </td>
                </tr>)}


            </tbody>
          </table>
        </div>
        <div className="flex text-gray-500 mt-4 font-WorkSans justify-end gap-4 items-center">
          <div className="">
            <p>1 of <span>10</span> </p>
          </div>
          <div className="flex text-xl gap-4 items-center">
            <button>
              <MdChevronLeft />
            </button>
            <button>
              <MdChevronRight />
            </button>
          </div>
        </div>
      </div>
    </PageAnimationProfile>
  )
}

export default ProfileRefundsPage