import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filterData = [
  {
    filterType: "Location",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"]
  },
  {
    filterType: "Industry",
    options: ["Frontend Developer", "Backend Developer", "Full Stack Developer", "MERN Stack Developer"]
  },
  {
    filterType: "Salary",
    options: ["0-40k", "40k-100k", "100k-200k", "200k+"]
  },
]

const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md'>
      <h1 className='font-bold text-lg'>Filter Jobs</h1>
      <hr className='mt-3' />
      <RadioGroup>
        {
          filterData.map((data, index) => (
            <div key={index}>
              <h1 className='font-bold text-lg'>{data.filterType}</h1>
              {
                data.options.map((item, index) => (
                    <div className='flex items-center space-x-2 my-2' key={item}>
                      <RadioGroupItem value={item} />
                      <Label>{item}</Label>
                    </div>
                  
                ))
              }
            </div>
          ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCard