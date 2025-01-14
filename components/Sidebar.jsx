"use client"

import { useState } from 'react';
import "../app/style.css"
import { FaProjectDiagram, FaMoneyBill, FaClipboard, FaCalendarAlt, FaFile } from 'react-icons/fa';
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { GiExpense } from "react-icons/gi";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { RiContractFill } from "react-icons/ri";
import { RiBillFill } from "react-icons/ri";
import { FaBorderAll } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { FaUsersGear, FaPeopleGroup, FaHelmetSafety, FaFileWaveform, FaCar, FaToolbox } from "react-icons/fa6";
import { GoFileDirectoryFill } from "react-icons/go";
import { IoTimerOutline } from "react-icons/io5";
import { TbReportAnalytics } from "react-icons/tb";

import { AiOutlineSchedule } from "react-icons/ai";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import { LuListTodo } from "react-icons/lu";
import { MdWork } from "react-icons/md";


export default function Sidebar() {
  const [isOpen, setIsOpen] = useState({
    projectManagement: true,
    financials: false,
    bids: false,
    hr: false,
    documents: false,
  });

  const toggleSection = (section) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="w-1/5 bg-white shadow-md h-screen mt-20 p-4 fixed overflow-auto" >
      <ul className=''>
        <li>
          <button
            onClick={() => toggleSection('projectManagement')}
            className="flex items-center justify-between w-full px-2 py-2 text-left"
          >
            <div className="flex items-center font-medium" style={{color:"#BD9B58"}}>
              
              Project Management
            </div>
            <span>{isOpen.projectManagement ? '-' : '+'}</span>
          </button>
          {isOpen.projectManagement && (
            <ul className=" text-gray-500" >
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaProjectDiagram className="mr-5" /> Projects</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <BsReverseListColumnsReverse className="mr-5" /> Daily Logs</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <AiOutlineSchedule className="mr-5"/> Schedule</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <LuListTodo className="mr-5"/> Todo</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <MdWork className="mr-5"/> Work Orders</li>
            </ul>
          )}
        </li>
        <li>
          <button
            onClick={() => toggleSection('financials')}
            className="flex items-center justify-between w-full px-2 py-2 text-left"
          >
            <div className="flex items-center font-medium" style={{color:"#BD9B58"}}>
              
              Financials
            </div>
            <span>{isOpen.financials ? '-' : '+'}</span>
          </button>
          {isOpen.financials && (
            <ul className="pl-6 text-gray-500">
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <LiaFileInvoiceSolid className='mr-5' /> Invoices</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"><FaMoneyBill className="mr-5" /> Payment </li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <GiExpense className="mr-5" /> Expenses</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <BiSolidPurchaseTag className="mr-5"/> Purchases</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <RiContractFill className='mr-5'/> Subcontractors</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <RiBillFill className='mr-5'/> Bills</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaBorderAll className='mr-5'/> Change Orders</li>
            </ul>
          )}
        </li>
        <li>
          <button
            onClick={() => toggleSection('bids')}
            className="flex items-center justify-between w-full px-2 py-2 text-left"
          >
            <div className="flex items-center font-medium" style={{color:"#BD9B58"}}>
              
              Bids
            </div>
            <span>{isOpen.bids ? '-' : '+'}</span>
          </button>
          {isOpen.bids && (
            <ul className="pl-6 text-gray-500" >
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaClipboard className="mr-5" /> Estimates</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <GrWorkshop className='mr-5'/> Customers</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaUsersGear className='mr-5'/> Leads</li>
            </ul>
          )}
        </li>
        <li>
          <button
            onClick={() => toggleSection('hr')}
            className="flex items-center justify-between w-full px-2 py-2 text-left"
          >
            <div className="flex items-center font-medium" style={{color:"#BD9B58"}}>
              
              HR
            </div>
            <span>{isOpen.hr ? '-' : '+'}</span>
          </button>
          {isOpen.hr && (
            <ul className="pl-6 text-gray-500">
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <GoFileDirectoryFill className='mr-5' /> Directory</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <IoTimerOutline className='mr-5'/> Timecard</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaCalendarAlt className='mr-5'/> Calendar</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaPeopleGroup className='mr-5'/>Crew Schedules</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaHelmetSafety className='mr-5'/> Safety Midday</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaFileWaveform className='mr-5'/> Application</li>
            </ul>
          )}
        </li>
        <li>
          <button
            onClick={() => toggleSection('documents')}
            className="flex items-center justify-between w-full px-2 py-2 text-left"
          >
            <div className="flex items-center font-medium" style={{color:"#BD9B58"}}>
              
              Documents
            </div>
            <span>{isOpen.documents ? '-' : '+'}</span>
          </button>
          {isOpen.documents && (
            <ul className="pl-6 text-gray-500">
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaFile className="mr-5" />Files</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <TbReportAnalytics className='mr-5'/> Reports</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaCar className='mr-5'/> Vehicle Logs</li>
              <li className="py-1 flex items-center pl-6  hover:bg-[#EADDCB] hover:rounded-lg hover:text-black hover:font-medium cursor-pointer"> <FaToolbox className='mr-5'/> Equipment Logs</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
