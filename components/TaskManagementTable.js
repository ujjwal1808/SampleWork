'use client'
import React from 'react';
import { PlusCircle, Calendar } from 'lucide-react';
// import { Button } from '@/components/ui/button';
import Card from './Card';


const TaskManagementTable = () => {
  const [tasks, setTasks] = React.useState([]);

  return (
    
      <Card className="bg-white rounded-lg shadow-sm">
        {/* Table Header */}
        <div className="overflow-x-auto rounded-lg">
          <table className="w-full">
            <thead>
              <tr className="border bg-gray-200 rounded-lg">
                <th className="px-6 py-4 text-left text-sm font-medium text-black">
                  Project Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-black">
                  Task name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-black">
                  Complete
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-black">
                  Priority
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-black">
                  Due
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-black">
                  Assign To
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-black">
                  Description
                </th>
              </tr>
            </thead>
          </table>
        </div>

        {/* Empty State */}
        {tasks.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="w-32 h-32 mb-8">
              <Calendar className="w-full h-full text-gray-300" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No tasks created yet
            </h3>
            <p className="text-sm text-gray-500 text-center mb-6">
              Click below to create your first task
            </p>
            <button
              className="inline-flex items-center px-4 py-2 rounded-md"
              onClick={() => {
                // Handle new task creation
                console.log('Create new task clicked');
              }}
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Create a New Record
            </button>
          </div>
        )}
      </Card>
    
  );
};

export default TaskManagementTable;