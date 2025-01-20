"use client"
import React from 'react'
import Card from '@/components/Card';
import { CgUnavailable } from "react-icons/cg";
import { TiWeatherPartlySunny } from "react-icons/ti";

import dayjs from 'dayjs';
import { FaClock } from "react-icons/fa";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { Box } from '@mui/material';
import TabCards from '@/components/TabCards';
import BreadcrumMain from '@/components/BreadcrumMain';
import Calendar from '@/components/Calendar';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';


const page = () => {
  const [projectValue, setProjectValue] = React.useState(dayjs('2022-04-17'));

  const tabsEstimate = [{
    key: 'open_estimate',
    label: 'Open Estimate',
  },
  {
    key: 'approved_estimate',
    label: 'Approved Estimate',
    content: <p>Approved Estimate Content</p>,
  },
  {
    key: 'estimate_stats',
    label: 'Estimate Stats',
    content: <p>Estimate Stats</p>,
  },
  ]

  const tabsProject = [{
    key: 'Recent_Project',
    label: 'Recent Project',
  },
  {
    key: 'Project_Stats',
    label: 'Project Stats',
    content: <p>Project Stats Content</p>,
  },
  {
    key: 'Upcoming_Projects',
    label: 'Upcoming Projects',
    content: <p>Upcoming Projects Content</p>,
  },
  ]

  const tabs = [
    {
      key: 'open_estimate',
      label: 'My Todos',
      content: <p>Open Estimate Content</p>,
    },
    {
      key: 'approved_estimate',
      label: 'Todos',
      content: <p>Approved Estimate Content</p>,
    },
  ];


  return (
  <>
  <div>

    <Header />
    <Sidebar />
  </div>
    <main className="justify-self-end w-5/6 p-6 bg-gray-100 h-full  pt-24 ">
      <BreadcrumMain />
      <div className=' grid grid-cols-3 gap-4'>
        <div className='grid grid-4 gap-4'>

          <Card title="Getting Started" footer="Updated 5 mins ago">
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-300">
              <div className="bg-[#BD9B58] h-1.5 rounded-full" style={{ width: 45 }}></div>
            </div>
            <ul className="space-y-2 ">
              <li className="flex items-center justify-between text-sm	">
                Watch the Getting Started Video
                <input type="checkbox" className="rounded-2xl " />
              </li>
              <li className="flex items-center justify-between text-sm">
                View the Knowledge Base
                <input type="checkbox" className="rounded-2xl" />
              </li>
              <li className="flex items-center justify-between text-sm">
                Schedule a Training
                <input type="checkbox" className="rounded-2xl" />
              </li>
              <li className="flex items-center justify-between text-sm">
                Add a Lead
                <input type="checkbox" className="rounded-2xl" />
              </li>
              <li className="flex items-center justify-between text-sm">
                Upload your Logo
                <input type="checkbox" className="rounded-2xl" />
              </li>
              <li className="flex items-center justify-between text-sm">
                Add a Customer
                <input type="checkbox" className="rounded-2xl" />
              </li>
              <li className="flex items-center justify-between text-sm">
                Create an Estimate
                <input type="checkbox" className="rounded-2xl" />
              </li>
              <li className="flex items-center justify-between text-sm">
                Create a Project
                <input type="checkbox" className="rounded-2xl" />
              </li>
            </ul>
          </Card>

          <Card >
            <Calendar />
          </Card>

          <Card title='My Hours This Week: 0:00 (0:00 OT)' >
            <div className='flex items-center gap-1'>
              <div className="">
                <FaClock style={{ width: 50, height: 50 }} />
              </div>
              <div className=" ">
                <button className="bg-[#BD9B58] text-white rounded px-2 py-1 mr-1 font-medium  hover:shadow-lg">
                  Clock In
                </button>
                <button className="border border-[#BD9B58] text-[#BD9B58] rounded px-2 py-1 font-medium hover:shadow-lg">
                  Request Time Off
                </button>
              </div>
            </div>
          </Card>

        </div>

        <div className='grid grid-4 gap-4 '>

          <Card title='who is clocked in'>
            <div className="flex flex-col items-center">
              <div >

                <CgUnavailable className='w-16 h-16 text-gray-300' />
              </div>

              <p className="text-gray-500 mt-2">No record available</p>
            </div>
          </Card>

          <Card title='Projects Tasks Schedule'>

          </Card>

          <Card title='My Appointments'>

          </Card>
        </div>
        <div className='grid grid-4 gap-4 '>
          <TabCards tabs={tabs} />
          <Card title='Unpaid Invoice'></Card>
          <Card title='Daily Logs'></Card>
        </div>
      </div>
      <div className=' mt-4 grid grid-cols-1 gap-y-4' >

        <TabCards tabs={tabsEstimate} />
        <TabCards tabs={tabsProject} />
      </div>

      <div className=' grid grid-cols-2 gap-4'>
        <div className="grid grid-2 gap-4 mt-4">

          <Card title='Opportunities Stats'>

          </Card>
          <Card title='Daily Logs'>

          </Card>

        </div>
        <div className="grid grid-2 gap-4 mt-4">
          <Card title='Who Is Clocked In'>

          </Card>
          <Card >
            <div className="items-center justify-items-center">

              <TiWeatherPartlySunny className='w-16 h-16 text-gray-300' />
              <p>There is no weather data is available</p>
            </div>

          </Card>
        </div>

      </div>
      <div className="mt-4 grid grid-cols-1 gap-y-4">
        <Card title='Project Schedule'>
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

        </Card>
      </div>
      <div className=' mt-4 grid grid-row-1 grid-flow-col gap-4 gap-y-4' >

        <Card title='Oen Punchlist'>

        </Card>
        <Card title='Open Work Orders'>

        </Card>

      </div>
      <div className=' mt-4 grid grid-cols-1 gap-y-4' >

        <Card title="Lead Tasks">

        </Card>
      </div>





    </main></>
  )
}

export default page