import React, { useState } from 'react'
import { CgUnavailable } from 'react-icons/cg';

const TabCards = ({tabs}) => {
    const [selectedTab, setSelectedTab] = useState(tabs[0].key);
    return (
        <div className="p-6 bg-white rounded-lg shadow">
          <div className="flex justify-between items-center border-b pb-2">
            <div className="flex space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setSelectedTab(tab.key)}
                  className={`text-lg font-semibold ${
                    selectedTab === tab.key ? 'text-[#BD9B58] border-b-2 border-[#BD9B58]' : 'text-gray-500'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
    
          {/* Content based on selected tab */}
          <div className="mt-6">
            {tabs.find((tab) => tab.key === selectedTab)?.content ||  <div className="flex flex-col items-center">
              <div >

                <CgUnavailable className='w-16 h-16 text-gray-300' />
              </div>

              <p className="text-gray-500 mt-2">No record available</p>
            </div>}
          </div>
        </div>
      );
}

export default TabCards