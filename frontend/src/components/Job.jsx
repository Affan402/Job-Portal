import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'

const Job = () => {
  return (
    <div className='p-5 rounded-md bg-white shadow-xl border border-gray-200'>
      <div className='flex items-center justify-between'>
        <p className='text-sm text-gray-500 '>2 days ago</p>
        <Button className="rounded-full bg-gray-50" size="icon"><Bookmark /></Button>
      </div>

      <div className='flex items-center gap-2 my-2'>
        <Button>
          <Avatar>
            <AvatarImage src="https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg" />
          </Avatar>
        </Button>
        <div>
          <h1 className='font-medium text-lg'>Company Name</h1>
          <p className='text-sm text-gray-500'>Pakistan</p>
        </div>
      </div>
      <div>
        <h1 className='font-bold text-lg my-2'>Job Title</h1>
        <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit laborum facere.</p>
      </div>


      <div className='flex items-center gap-4 mt-4'>
        <Badge className={'text-blue-700 font-bold'} variant="ghost">12 Positions</Badge>
        <Badge className={'text-[#F83002] font-bold'} variant="ghost">Part Time</Badge>
        <Badge className={'text-[#7209b7] font-bold'} variant="ghost">24 LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant="outline">Details</Button>
        <Button variant="destructive" className="bg-[#6A38C2]">Save for Later</Button>
      </div>
    </div>
  )
}

export default Job