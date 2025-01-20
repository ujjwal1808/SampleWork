"use client"
import Card from '@/components/Card';
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Table from '@/components/Table';
import React from 'react'
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend } from "recharts";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { format, startOfWeek, addDays } from 'date-fns';
import { AiOutlineReload } from 'react-icons/ai';
import Breadcrum from '@/components/Breadcrum';


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const data2 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const data01 = [
  {
    name: "Bills",
    high: 0,
  },
  {
    name: "Invoice",
    high: 0,
  },
  {
    name: "PO's",
    high: 0,
  },
  {
    name: "Punchlist",
    high: 0,
  },
  {
    name: "RFI's",
    high: 0,
  },
  {
    name: "Todo's",
    high: 0,
  },
]

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

export default function page() {
  const columns = [
    { header: 'Project Name', accessor: 'projectName' },
    { header: 'Project #', accessor: 'projectNumber' },
    { header: 'Complete (%)', accessor: 'complete' },
    { header: 'Project Amt.', accessor: 'projectAmount' },
    { header: 'Est. Cost', accessor: 'estimatedCost' },
    { header: 'Committed', accessor: 'committed' },
    { header: 'Actual Cost', accessor: 'actualCost' },
    { header: 'Invoiced', accessor: 'invoiced' },
    { header: 'Paid', accessor: 'paid' },
    { header: 'PM', accessor: 'pm' },
    { header: 'Customer', accessor: 'customer' },
  ];

  const tdata = [
    {
      projectName: 'Cherapa 3',
      projectNumber: '1',
      complete: '0%',
      projectAmount: '0',
      estimatedCost: '0',
      committed: '0',
      actualCost: '0',
      invoiced: '0',
      paid: '0',
      pm: '-',
      customer: 'BW',
    },
    {
      projectName: 'USD Dakota Hall',
      projectNumber: '2310',
      complete: '0%',
      projectAmount: '0',
      estimatedCost: '0',
      committed: '0',
      actualCost: '0',
      invoiced: '0',
      paid: '0',
      pm: '-',
      customer: 'DV',
    },
    {
      projectName: 'Sawtooth',
      projectNumber: '020',
      complete: '0%',
      projectAmount: '178,000',
      estimatedCost: '0',
      committed: '0',
      actualCost: '0',
      invoiced: '0',
      paid: '0',
      pm: '-',
      customer: 'BR',
    },
  ];

  const today = new Date();
  const start = startOfWeek(today, { weekStartsOn: 0 });
  const daysOfWeek = Array.from({ length: 7 }).map((_, index) => addDays(start, index));

  return (
    <div>
      <Header />
      <Sidebar active='projects' />
      <main className="justify-self-end w-5/6 p-6 bg-gray-100 h-full pt-24 ">
      <div className="mb-5 flex items-center">

      <Breadcrum Path="> Project Management > Project" Add="Project"/>
      </div>
        <div className=' grid grid-cols-2 gap-4 mb-4'>
          <div className='grid grid-4 gap-4 '>

            <Card title='Action'>
              <BarChart width={530} height={250} data={data01}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="low" fill="#EADDCB" />
                <Bar dataKey="high" fill=" #BD9B58" />
              </BarChart>
            </Card>

            <Card title='Unpaid Items'>

              <PieChart width={450} height={200} >

                <Pie
                  data={data2}
                  cx={160}
                  cy={80}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Pie
                  data={data2}
                  cx={350}
                  cy={80}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
              <div className="flex items-center ">

                <div className="p-2 w-2 h-1 rounded-2xl bg-[#0088FE] mr-1"></div>Overpaid
                <div className="p-2 w-2 h-1 rounded-2xl bg-[#00C49F] ml-5 mr-1"></div>Paid
                <div className="p-2 w-2 h-1 rounded-2xl bg-[#FFBB28] ml-5 mr-1"></div>Unpaid
              </div>


            </Card>

          </div>
          <div className='grid grid-4 gap-4'>

            <Card title='labor'>
              <BarChart width={450} height={250} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="low" fill="#EADDCB" />
                <Bar dataKey="high" fill=" #BD9B58" />
              </BarChart>
            </Card>

            <Card title='Project by Status'>
              <div className=''>


                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>Pending(0)</div>
                  <div>
                    <div className="w-72 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#BD9B58] h-2.5 rounded-full" style={{ width: 0 }}></div>
                    </div>
                  </div>
                  <div className='justify-self-end'>0%</div>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>Bidding(0)</div>
                  <div>
                    <div className="w-72 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#BD9B58] h-2.5 rounded-full" style={{ width: 0 }}></div>
                    </div>
                  </div>
                  <div className='justify-self-end'>0%</div>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>Submittal(0)</div>
                  <div>
                    <div className="w-72 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#BD9B58] h-2.5 rounded-full" style={{ width: 0 }}></div>
                    </div>
                  </div>
                  <div className='justify-self-end'>0%</div>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>Unschedule(0)</div>
                  <div>
                    <div className="w-72 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#BD9B58] h-2.5 rounded-full" style={{ width: 0 }}></div>
                    </div>
                  </div>
                  <div className='justify-self-end'>0%</div>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>Started(02)</div>
                  <div>
                    <div className="w-72 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#BD9B58] h-2.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>
                  <div className='justify-self-end'>0%</div>
                </div>

                <div className="grid grid-cols-3 gap-4 items-center">
                  <div>Completed(01)</div>
                  <div>
                    <div className="w-72 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div className="bg-[#BD9B58] h-2.5 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                  <div className='justify-self-end'>0%</div>
                </div></div>

            </Card>

          </div>
        </div>

        <div className='mb-4'>

          <Card>
            
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">This Week's Task</h2>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-600">
                    {format(start, 'EEE, dd MMM yyyy')} - {format(addDays(start, 6), 'EEE, dd MMM yyyy')}
                  </p>
                  <AiOutlineReload className="text-gray-600 cursor-pointer hover:text-black transition-colors" />
                </div>
              </div>
              <table className="  w-full border-collapse ">
                <thead >
                  <tr className='rounded-lg'>
                    {daysOfWeek.map((day, index) => (
                      <th key={index} className=" p-2 text-center bg-gray-100">
                        {format(day, 'EEE, MMMM dd')}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {daysOfWeek.map((_, index) => (
                      <td key={index} className=" p-4 text-center">
                        {/* Content for each day can go here */}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            
          </Card>
        </div>
        <div>

          <Card>

            <Table columns={columns} tdata={tdata} />
          </Card>
        </div>

      </main>
    </div>
  )
}

