import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

const JobDescription = () => {
  const isApplied = false;
  return (
    <div className='max-w-7xl mx-auto my-10 px-4 md:px-8'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-xl font-bold'>Frontend Developer</h1>
          <div className='flex items-center gap-4 mt-4'>
            <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
            <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
            <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24 LPA</Badge>
          </div>
        </div>
        <Button className={`${isApplied ? 'cursor-not-allowed': 'cursor-pointer'} rounded-lg bg-[#7209b7] hover:bg-[#5a0790] text-white`} onClick={() => {}} disabled={isApplied}>
          {isApplied ? 'Already Applied' : 'Apply Now'}
        </Button>
      </div>
      <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
      <div className='my-4'>
        <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
        <h1 className='font-bold my-1'>location: <span className='pl-4 font-normal text-gray-800'>Karachi</span></h1>
        <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Responsible for developing user-facing features using React and modern JavaScript.</span></h1>
        <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2+ years of experience in frontend development.</span></h1>
        <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>24 LPA</span></h1>
        <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>50</span></h1>
        <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>2023-10-01</span></h1>
      </div>
    </div>
  )
}

export default JobDescription