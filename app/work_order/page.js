import Breadcrum from '@/components/Breadcrum'
import Card from '@/components/Card'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import Table from '@/components/Table'
import TaskManagementTable from '@/components/TaskManagementTable'
import React from 'react'

const page = () => {
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
    return (
        <div>
            <Header />
            <Sidebar active='work_order' />
            <main className="justify-self-end w-5/6 p-6 bg-gray-100 h-full pt-24 ">
                <div className="mb-5 flex items-center">
                    <Breadcrum Path="> Project Management > Work Order" Add="Word Order" />
                </div>
                <div className="grid grid-cols gap-4">
                    <Card title="Open Work Order by Project"></Card>
                    <Card title="Open Work Order by Assigned Person"></Card>
                    <Card title=" Work Order by Status"></Card>
                    

                        <TaskManagementTable/>
                    
                </div>
            </main>
        </div>
    )
}
export default page