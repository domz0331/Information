import React from 'react'
import Myportfolio from '../assets/projects/myportfolio.gif';
import PongGame from '../assets/first pong game.png';
import { FaFolderOpen } from 'react-icons/fa'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#0D1117] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full pb-8'>
            <div className='pb-8'>
                <p className='text-4xl font-bold flex justify-center items-center py-6'>Projects</p>
            </div>

      {/**container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/**Grid Item */}
               <div className='relative'>
                   <img src={Myportfolio} alt="My WebApp" className='relative cursor-pointer rounded-md'/>
                   <div className='opacity-0 hover:opacity-80 duration-300 absolute top-0 left-0 hover:bg-gradient-to-br hover:from-[#E6DDC4] hover:to-[#F0E9D2] hover:rounded-md text-black w-full h-full'>
                       <div className='w-full relative h-full flex items-center justify-center flex-col'>
                            <h2 className='font-bold text-3xl'>Web Application</h2>
                            <p className='font-bold text-center'>HTML, CSS, JavaScript, Cordova, Google API, Material+iOS theme</p>
                            <a href="https://portal-efr.000webhostapp.com/new/webapp/assets/www/index.html" className='absolute top-0 right-4'><FaFolderOpen /></a>
                        </div>
                   </div>
               </div>
              

               <div className='relative'>
                   <img src={PongGame} alt="my portfolio" className='rounded-md'/>
                   <div className='opacity-0 hover:opacity-80 duration-500 absolute top-0 left-0 hover:bg-gradient-to-br hover:from-[#E6DDC4] hover:to-[#F0E9D2] hover:rounded-md text-black w-full h-full'>
                       <div className='w-full h-full flex items-center justify-center flex-col'>
                            <h2 className='font-bold text-3xl'>Ping Pong Game</h2>
                            <p className='font-bold'>Using Python</p>
                        </div>
                   </div>
               </div>
               

            </div>
        </div>
    </div>
  )
}

export default Projects
