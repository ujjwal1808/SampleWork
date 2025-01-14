import { FaSearch, FaBell } from 'react-icons/fa';
import { FiFilter } from "react-icons/fi";

import logo from '../images/Logoo.png'
import { MdMenuBook } from "react-icons/md";

import Image from 'next/image';
export default function Header() {
    return (
        <header className="flex items-center bg-white shadow p-4 justify-between fixed w-full overflow-hidden">

            {/* Search Bar */}
            <div className='flex items-center w-6/12	'>
                <Image src={logo} alt="" />
                <div className="flex items-center bg-gray-100 p-2 ml-5 mr-5 w-5/12 rounded-xl">
                    <FaSearch className="text-gray-600" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="ml-2 bg-gray-100 w-full outline-none"
                    />

                </div>
                    <MdMenuBook className='w-5 h-5 mr-4'/>
                    <FiFilter className='w-5 h-5'/>

            </div>

            {/* Icons and User Avatar */}

            <div className="flex  items-center">
                {/* Notification Icon */}
                <div className="relative mx-2">
                    <FaBell className="text-gray-600" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </div>

                {/* User Avatar */}
                <div className="h-10 w-10 rounded-full bg-gray-300"></div>
            </div>
        </header>
    );
}
