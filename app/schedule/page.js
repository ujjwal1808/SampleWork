"use client"

import Breadcrum from '@/components/Breadcrum'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React, { useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

const page = () => {
    const [projectValue, setProjectValue] = React.useState();
    const [activeTab, setActiveTab] = useState('Gantt Chart');
    const headers = [
        { label: 'Task Name', width: 'w-48' },
        { label: 'Start Date', width: 'w-32' },
        { label: 'Duration', width: 'w-24' },
        { label: 'Predecessor', width: 'w-32' },
        { label: '+', width: 'w-12' },
    ];

    const decemberDays = [20, 21, 22, 23, 24];
    const weeks = [51, 52];
    return (
        <div>
            <Header />
            <Sidebar active='schedule' />
            <main className="justify-self-end w-5/6 p-6 bg-gray-100 h-full pt-24 ">
                <div className="mb-5 flex items-center">
                    <Breadcrum Path="> Project Management > Schedule" />
                </div>
                <div className="min-h-screen bg-gray-100 p-8">
                    <div className="bg-white rounded-md shadow-md">
                        {/* Tabs */}
                        <div className="flex border-b">
                            {['Gantt Chart', 'List View', 'Calendar'].map((tab) => (
                                <button
                                    key={tab}
                                    className={`flex-1 p-4 text-center font-medium border-b-2 transition-all duration-300 ${activeTab === tab
                                        ? 'border-yellow-500 text-yellow-600'
                                        : 'border-transparent text-gray-600 hover:text-gray-800'
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="p-6 ">
                            {activeTab === 'Gantt Chart' && (
                                <div className="p-4 max-w-6xl mx-auto">
                                    <div className="border  rounded-lg overflow-hidden">
                                        <div className="flex">
                                            {/* Left side headers */}
                                            <div className="flex-none">
                                                <div className="flex bg-gray-200">
                                                    {headers.map((header, index) => (
                                                        <div
                                                            key={index}
                                                            className={`${header.width} p-2 border-r border-gray-300 font-medium`}
                                                        >
                                                            {header.label}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Right side calendar */}
                                            <div className="flex-1">
                                                <div className="bg-gray-200">
                                                    {/* December header */}
                                                    <div className="text-center border-b border-gray-300 p-2">
                                                        December
                                                    </div>

                                                    {/* Week numbers */}
                                                    <div className="flex">
                                                        {weeks.map((week, index) => (
                                                            <div
                                                                key={week}
                                                                className="flex-1 text-center border-b border-gray-300 p-1"
                                                            >
                                                                {week}
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Days */}
                                                    <div className="flex">
                                                        {decemberDays.map((day, index) => (
                                                            <div
                                                                key={day}
                                                                className="flex-1 text-center border-r border-gray-300 p-1"
                                                            >
                                                                {day}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Grid body - empty in this case */}
                                        <div className="h-96 bg-white"></div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'List View' && (
                                <div className="text-gray-600 justify-self-center">
                                    <table>
                                        <thead>
                                            <tr className='border border-gray-300 bg-gray-200  rounded-lg' >
                                                <th className=' font-medium text-black px-6 border border-gray-300 p-4'>#</th>
                                                <th className=' font-medium text-black px-6 border border-gray-300 p-4'>WBS</th>
                                                <th className=' font-medium text-black px-6 border border-gray-300 p-4'>Project/Task</th>
                                                <th className=' font-medium text-black px-6 border border-gray-300 p-4'>Employee</th>
                                                <th className=' font-medium text-black px-6 border border-gray-300 p-4'>Assigned Contract</th>
                                                <th className=' font-medium text-black px-6 border border-gray-300 p-4'>Duration</th>
                                                <th className=' font-medium text-black px-6 border border-gray-300 p-4'>Schedule Date</th>
                                                <th className=' font-medium text-black px-6 border border-gray-300 p-4'>End Date</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                            )}

                            {activeTab === 'Calendar' && (
                                <div className="text-gray-600">
                                    <div className="p-6">
                                        <h1 className="text-3xl font-bold mb-4">January 2025</h1>
                                        <div className="flex flex-col lg:flex-row">
                                            {/* Calendar Section */}
                                            <div className="lg:w-1/2 p-4 border rounded-lg static">
                                                <LocalizationProvider dateAdapter={AdapterDayjs} className='static'>
                                                    <DateCalendar value={projectValue} className='static' onChange={(newValue) => setProjectValue(newValue)} />
                                                </LocalizationProvider>
                                            </div>

                                            {/* Event Details Section */}
                                            <div className="lg:w-1/2 p-4 bg-[#BD9B58] text-white rounded-lg">
                                                <div className="text-6xl font-bold mb-4">7</div>
                                                <div className="mb-4">
                                                    <h2 className="text-2xl font-bold">Meet Jhons and Senos</h2>
                                                    <p className="text-lg">9AM - 5PM</p>
                                                    <p className="text-lg">at <strong>Institute of Mashiros</strong></p>
                                                </div>
                                                <p className="underline cursor-pointer">Remind me</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Other Schedule Section */}
                                    <div className="p-6 bg-gray-800 text-white">
                                        <h2 className="text-xl font-bold mb-4">Other Schedule</h2>
                                        <ul>
                                            <li className="mb-2">
                                                <span className="bg-[#BD9B58] p-1.5 rounded-full inline-block text-center w-8 h-8">7</span>
                                                <span className="ml-4">10AM - 12PM Content Finalizing</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="bg-[#BD9B58] p-1.5 rounded-full inline-block text-center w-8 h-8">7</span>
                                                <span className="ml-4">3AM - 5PM Jhons and Senos</span>
                                            </li>
                                            <li className="mb-2">
                                                <span className="bg-[#BD9B58] p-1.5  rounded-full inline-block text-center w-8 h-8">7</span>
                                                <span className="ml-4">2AM - 6PM Finance Meeting</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Participants Section */}
                                    <div className="p-6 bg-gray-900 text-white">
                                        <h2 className="text-xl font-bold mb-4">Participants</h2>
                                        <ul>
                                            <li>Basith Loose</li>
                                            <li>Kumar Sing</li>
                                            <li>John King</li>
                                            <li>Kenny Sma</li>
                                            <li>Swath</li>
                                        </ul>
                                    </div>

                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page