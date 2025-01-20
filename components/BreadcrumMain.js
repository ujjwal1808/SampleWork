"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { LuNotebookText } from "react-icons/lu";
import { FaPen } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { HiOutlineSpeakerphone } from "react-icons/hi";

import { FiHome } from "react-icons/fi";

const Breadcrum = () => {
    const [isShown, setIsShown] = useState(false);
    
    return (
        <div>
            <div className="mb-5 flex items-center">
                <Link href="/main_dashboard">
                    <FiHome className='w-5 h-5' />
                </Link>
                <div type="text" className={`w-full flex items-center gap-3 border border-gray-300 bg-white mx-2 py-1 rounded-md`} onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
                    <LuNotebookText className='ml-3 w-5' />

                    <input type="text" placeholder=' Add a note here that you want all of your Users to see.' className='w-full py-1 rounded-md text-sm' />
                    {isShown &&
                    (<>
                    <FaPenToSquare className={`ml-3 w-6 h-6 `} />
                    <HiOutlineSpeakerphone className='mr-3 w-6  h-6 ' />
                    </>)
                    }
                </div>

                <div className='border border-[#BD9B58] bg-[#BD9B58]  rounded-md flex gap-2 items-center'>
                    <div className='pl-3'>
                        <FaPen className='text-white' />
                    </div>
                    <button className='py-1.5 px-3 bg-white rounded-r-md '>
                        Customize
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Breadcrum