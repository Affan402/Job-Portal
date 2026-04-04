import React from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from  './ui/avatar'
import {Contact, Mail, Pen } from 'lucide-react'
import { Button } from './ui/button'
import { Item } from '@radix-ui/react-radio-group'
import { Badge } from './ui/badge'
import { Label } from './ui/label'

const skills = ["Html", "Css", "Javascript", "React", "Nodejs", "Expressjs", "MongoDB", "Nextjs"];
const isResume = true;
const Profile = () => {
  return (
    <div>
        <Navbar/>
        <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8">
            <div className='flex items-start justify-between'>
                <div className='flex items-center gap-4'>
                    <Avatar className='h-24 w-24'>
                        <AvatarImage src='https://static.dezeen.com/uploads/2025/05/sq-google-g-logo-update_dezeen_2364_col_0.jpg' alt='profile'/>  
                    </Avatar>
                    <div>
                        <h1 className='font-medium text-xl'>Full Name</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit. Provident, velit harum! Velit?</p>
                    </div>
                </div>
                <Button className='text-right' variant='outline'><Pen/></Button>
            </div>
            <div className='my-5'>
                <div className='flex items-center gap-3 my-2'>
                    <Mail/>
                    <span>email@example.com</span>
                </div> 
                <div className='flex items-center gap-3 my-2'>
                    <Contact/>
                    <span>03278392739</span>
                </div>
            </div>
            <div className='my-5'> 
                <h1>Skills</h1>
                <div className='flex items-center gap-1'>    
                    {
                        skills.length != 0 ? skills.map((skill, index) => <Badge displaykey={index}>{skill}</Badge>) : <span>No skills to Display</span>
                    }
                </div>
            </div>
            <div className='grid w-full max-w-sm items-center gap-1.5'>
                <Label className="text-md font-bold">Resume</Label>
                {isResume ? <a href='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' target='_blank' className='text-blue-500 underline'>View Resume</a> : <span>No resume uploaded</span>
                }
            </div>
            <div>
                <h1>Applied Jobs</h1>
                {/* Application Table */}
                
            </div>
        </div>
    </div>
  )
}

export default Profile
