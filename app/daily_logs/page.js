"use client"
import Breadcrum from '@/components/Breadcrum'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { useParams } from 'next/navigation'
import Card from '@/components/Card'
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend } from "recharts";
import Calendar from '@/components/Calendar'
import pick from '../../images/image-removebg-preview.png'
import Image from 'next/image'


const data = [

    {
        name: "#1",
        high: 80,
        low: 0
    },
    {
        name: "#2310",
        high: 20,
        low: 0
    },
    {
        name: "#020",
        high: 0,
        low: 0
    },
];

const page = () => {


    return (
        <div>
            <Header />
            <Sidebar active='daily logs' />
            <main className="justify-self-end w-5/6 p-6 bg-gray-100 h-full pt-24 ">
                <div className="mb-5 flex items-center">
                    <Breadcrum Path="> Project Management > Daily Logs" Add="Daily Logs" />
                </div>
                <div className=' grid grid-cols-3 gap-4 mb-4'>
                    <Card>
                        <Calendar />
                    </Card>

                    <Card>
                        <Image src={pick} alt='' className='w-48 justify-self-center opacity-40 mt-10' />
                        <div className="flex items-center justify-center">
                            <label className='items-center'>
                                <h4 className="text-center text-gray-900 text-sm font-medium leading-snug"><u>Click Here</u> to create a New Record</h4>
                                <input type="file" hidden />
                            </label>
                        </div>
                    </Card>

                    <Card title='Report with Wether Delays'>


                        <div className="flex items-center justify-end">
                            <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                            <span className="text-sm font-medium mr-5">Yes</span>
                            <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                            <span className="text-sm font-medium">No</span>
                        </div>

                        <div className="flex flex-col items-start space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <span className="text-sm font-medium">Yes</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <span className="text-sm font-medium">No</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <BarChart width={330} height={150} data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="low" fill="#EADDCB" />
                                <Bar dataKey="high" fill=" #BD9B58" />
                            </BarChart>
                        </div>

                    </Card>
                    

                    <div className="col-span-2">
                        <Card title='Report with Wether Delays'>
                            
                        </Card>
                    </div>
                    
                    <Card title='Report with Schedule Delays'>
                    {/* <div className="flex items-center justify-end">
                            <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
                            <span className="text-sm font-medium mr-5">Yes</span>
                            <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                            <span className="text-sm font-medium">No</span>
                        </div>

                        <div className="flex flex-col items-start space-y-4">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <span className="text-sm font-medium">Yes</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                                <span className="text-sm font-medium">No</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <BarChart width={330} height={150} data={data}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="low" fill="#EADDCB" />
                                <Bar dataKey="high" fill=" #BD9B58" />
                            </BarChart>
                        </div> */}
                    </Card>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <Card title='Recent Photos'></Card>
                    <Card title='Incidents'>
                        <table className="  w-full border-collapse ">
                            <thead className='rounded-full'>
                                <tr >
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Date
                                    </th>
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        People Involve
                                    </th>
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Type
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=" p-4 text-center">
                                        {/* Content for each day can go here */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                    <Card title="Inspections">
                        <table className="  w-full border-collapse ">
                            <thead className='rounded-full'>
                                <tr >
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Date
                                    </th>
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        People Involve
                                    </th>
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Type
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=" p-4 text-center">
                                        {/* Content for each day can go here */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                    <Card title="Equipment Deliveries">
                        <table className="  w-full border-collapse ">
                            <thead className='rounded-full'>
                                <tr >
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Date
                                    </th>
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        People Involve
                                    </th>
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Type
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=" p-4 text-center">
                                        {/* Content for each day can go here */}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </Card>
                </div>
                <Card title='Material Deliveries'>
                    <table className="  w-full border-collapse ">
                        <thead className='rounded-full'>
                            <tr >
                                <th className=" p-2 font-medium text-center bg-gray-100">
                                    Date
                                </th>
                                <th className=" p-2 font-medium text-center bg-gray-100">
                                    People Involve
                                </th>
                                <th className=" p-2 font-medium text-center bg-gray-100">
                                    Type
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className=" p-4 text-center">
                                    {/* Content for each day can go here */}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Card>

            </main>
        </div>
    )
}

export default page