"use client"
import Breadcrum from '@/components/Breadcrum'
import Card from '@/components/Card'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Page A',
        pv: 0,
        amt: 2400,
    },
    {
        name: 'Page B',
        pv: 90,
        amt: 2210,
    },
    {
        name: 'Page C',
        
        pv: 0,
        amt: 2290,
    },
    {
        name: 'Page D',
        pv: 10,
        amt: 2000,
    },
    {
        name: 'Page E',
        pv: 20,
        amt: 2181,
    },
    {
        name: 'Page F',
        pv: 50,
        amt: 2500,
    },
    {
        name: 'Page G',
        pv: 0,
        amt: 2100,
    },
];

const page = () => {
    return (
        <div>
            <Header />
            <Sidebar active='todo' />
            <main className="justify-self-end w-5/6 p-6 bg-gray-100 h-full pt-24 ">
                <div className="mb-5 flex items-center">
                    <Breadcrum Path="> Project Management > Todo" Add="Todo" />
                </div>
                <div className=' grid grid-cols-2 gap-4 mb-4'>
                    <div className='grid grid-2 gap-4 '>
                        <Card title="Open To-Do’s by Project">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="pv" stackId="a" fill="#BD9B58" />
                                </BarChart>
                        </Card>

                        <Card title="Open To-Do’s by Contact">
                        <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="pv" stackId="a" fill="#BD9B58" />
                                </BarChart>
                        </Card>

                        <Card title="Upcoming To-Do’s ">
                        <table className="  w-full border-collapse ">
                            <thead className='rounded-full'>
                                <tr >
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Date
                                    </th>
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Task Name
                                    </th>
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Status
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
                    <div className='grid grid-2 gap-4 '>
                        <Card title="Summary (Open, Closed)">
                            
                        </Card>
                        <Card title="To-Do’s by Status">
                        <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="pv" stackId="a" fill="#BD9B58" />
                                </BarChart>
                        </Card>
                        <Card title="Past Due To-Do's ">
                        <table className="  w-full border-collapse ">
                            <thead className='rounded-full'>
                                <tr >
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Date
                                    </th>
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Task Name
                                    </th>
                                    <th className=" p-2 font-medium text-center bg-gray-100">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className=" p-4 text-center text-sm">
                                        04/12/2022
                                    </td>
                                    <td className=" p-4 text-center text-sm">
                                        Schedule Free Training
                                    </td>
                                    <td className=" p-4 text-center text-sm">
                                    <button type="button" class="px-3 py-2 text-sm font-medium text-center text-white bg-[#BD9B58] rounded-lg hover:bg-[#EADDCB] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 ">Open</button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default page