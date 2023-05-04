import React, { useState } from 'react'
import Bens from '../assets/benser.png';
import certificateOne from '../assets/certificate1.png'
import certificationTwo from '../assets/python certificate.png'
import digitalCertificate from '../assets/Digital certificate.png'

const About = (open, onClose) => {
    const [state] = useState({
        course1: "Adobe Photoshop",
        course2: "Javascript Algorithms and Data Structures",
        course3: "Assurance in Software Testing",
        course4: "Representative of ICT Research",
    });


    if(!open) return null

  return (
    <div name='about' className='w-full bg-[#0D1117] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full '>
            <div className='max-w-[1000px] w-full flex justify-center items-center pb-8'>
                <div className='pb-8 pl-4'>
                <br/>
                
                    <p className='text-4xl font-bold '>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 lg:mb-8 gap-8 px-4'>
                    <div className='flex justify-center items-center'>
                        <img src={Bens} alt='My profile' style={{width: '300px'}} className='rounded-sm'/>
                    </div>
                    <div>
                        <p className='text-gray-400 text-center'>I am passionate building <strong>excellent</strong> web app that improves the lives ranging from <strong>individuals and small-business</strong> all the way to large enterprise corporations. The web is my <strong>passion</strong> because it’s where I can find the most exciting projects to work on. I <strong>love</strong> working with clients who want something more than just a website and <strong>that's where I come in!</strong>
                        </p>
                    </div>
            </div>
            <div className='py-16 px-4'>
                <h1 className='flex justify-center items-center p-8 text-4xl font-bold'>Certifications</h1>
                <div className='max-w-[1000px] w-full grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                  <div className='relative hover:bg-blue-500 hover:p-4 hover:rounded-md duration-500'>
                      <img src={certificateOne} alt="my first certificate" className='rounded-md cursor-pointer'/>
                      <div className='duration-500 opacity-0 hover:opacity-100 absolute top-0 rounded-md left-0 font-semibold hover:bg-gradient-to-br hover:from-[#E6DDC4] hover:to-[#F0E9D2] hover:rounded-md text-black w-full h-full'>
                      <p className='flex justify-center items-center w-full h-full'>{state.course1}</p>
                      </div>
                   </div>
                   <div className='relative hover:bg-blue-500 hover:p-4 hover:rounded-md duration-500'>
                      <img src={certificationTwo} alt="my second certificate" className='rounded-md'/>
                      <div className='duration-500 opacity-0 hover:opacity-100 absolute top-0 rounded-md left-0 font-semibold hover:bg-gradient-to-br hover:from-[#E6DDC4] hover:to-[#F0E9D2] hover:rounded-md text-black w-full h-full'>
                      <p className='flex justify-center items-center w-full h-full'>{state.course3}</p>
                      </div>
                   </div>
                   <div className='relative hover:bg-blue-500 hover:p-4 hover:rounded-md duration-500'>
                      <img src={digitalCertificate} alt="This is my digital certificate" className='rounded-md'/>
                      <div className='duration-500 opacity-0 hover:opacity-100 absolute top-0 rounded-md left-0 font-semibold hover:bg-gradient-to-br hover:from-[#E6DDC4] hover:to-[#F0E9D2] hover:rounded-md text-black w-full h-full'>
                      <p className='flex justify-center items-center mx-auto p-8 w-full h-full'>{state.course4}</p>
                      </div>
                   </div>
                   </div>
                </div>
            </div>
        </div>
  )
}

export default About
