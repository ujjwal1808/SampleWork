import Link from 'next/link'
import React from 'react'
import { FiHome } from 'react-icons/fi'
const Breadcrum = (props) => {
    return (
        <>
            <div className='flex w-full justify-between '>
                <div className='flex items-center gap-1 mb-4'>
                    <Link href="/main_dashboard" >
                        <FiHome className='w-5 h-5' />
                    </Link>
                    <Link href='/'>
                        <div className='text-sm'>
                            {props.Path}
                        </div>
                    </Link>
                </div>
                {props.Add && 
                <div >
                <Link href='/'>
                    <div className="flex items-center">
                        <div className='px-4 py-2 border border-1 border-[#BD9B58] rounded-l-lg bg-[#BD9B58] text-white'>+</div>
                        <div className='border border-1 border-[#BD9B58] px-4 py-2 rounded-r-lg bg-white text-[#BD9B58]'>{props.Add}</div>
                    </div>
                </Link>
                </div>
                }
                
            </div>
        </>
    )
}
export default Breadcrum