import React from 'react'
import LatestJobCards from './LatestJobCards';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
    return (
        <div className='max-w-7xl mx-auto my-28 px-4'>
            <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest and Top </span>Job Openings</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5 justify-items-center'>
                {
                    randomJobs.slice(0, 6).map((job, index) => <LatestJobCards key={index}/>)
                }
            </div>
            {/* Multiple Job Cards will be here */}
        </div>
    )
}

export default LatestJobs