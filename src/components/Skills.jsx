import React from 'react';
import Html from '../assets/html.png';
import Css from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Tailwind from '../assets/tailwind.png';
import RrEACT from '../assets/react.png';
import cordova from '../assets/cordova.png';
import php from '../assets/php5.png';
import mysql from '../assets/mysql1.png';

const Skills = () => {
    return(
        <div name='skills' className='w-full h-screen bg-[#0D1117] text-gray-300 items-center'>
            {/**container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='flex justify-center items-center'> 
                    <p className='text-4xl font-bold text-gray-300 py-4'>Skills</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 justify-center'>
                    <div className='shadow-md shadow-[#081527] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={Html} alt='Html icon' style={{width: '50px'}}/>
                        <p>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#081527] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={Css} alt='CSS icon' style={{width: '50px'}}/>
                        <p>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#081527] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={Javascript} alt='JavaScript icon' style={{width: '50px'}}/>
                        <p>Basic JS</p>
                    </div>
                    <div className='shadow-md shadow-[#081527] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' style={{width: '50px'}}/>
                        <p>Tailwind</p>
                    </div>
                    <div className='shadow-md shadow-[#081527] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={RrEACT} alt='React icon' style={{width: '50px'}}/>
                        <p>React</p>
                    </div>
                    <div className='shadow-md shadow-[#081527] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={cordova} alt='Cordova icon' style={{width: '50px'}}/>
                        <p>Cordova</p>
                    </div>
                    
                     <div className='shadow-md shadow-[#081527] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={php} alt='PHP icon' style={{width: '50px'}}/>
                        <p>Basic PHP</p>
                        
                    </div>
                    
                     <div className='shadow-md shadow-[#081527] hover:scale-110 duration-500 rounded-full w-[100px] h-[100px] mx-auto'>
                        <img className='w-20 mx-auto' src={mysql} alt='Mysql icon' style={{width: '50px'}}/>
                        <p>MySQL</p>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Skills