import React from 'react'
import Typewriter from 'typewriter-effect'

const Typewritter = () => {
  return (
    <div name='type-writter' className='w-full md:h-screen bg-[#0D1117] text-gray-300'>
           <div className='p-4'>
            <div className='max-w-[500px] bg-black mx-auto border-[1px] h-[400px] relative'>
                <div className='flex justify-start gap-2 mb-4 w-full bg-gray-700 p-3'>
                <div className='bg-red-500 w-[10px] rounded-full h-[10px]'></div>
                <div className='bg-yellow-500 w-[10px] rounded-full h-[10px]'></div>
                <div className='bg-green-500 w-[10px] rounded-full h-[10px]'></div>
                </div>

                <div className='p-4'>
                <p className='text-white font-mono text-[13px]'><span className='text-[#23b623]'>Johnbenser@DESKTOP-B32B99</span>
                <span className='text-[#ae33c7]'> MINGW64 </span>
                <span className='text-[#ad9b30]'>~</span></p>
                <span className='inline-block font-mono'>$ <Typewriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: [
                        "Using the latest technology: When it comes to website building, it is important to use the latest technology in order to stay ahead in the industry. The quality of a web system must deliver with planning, analysis, design, development, testing, implementation and maintenance to elevates client/customer satisfaction.",
                    ],
                }}
                />

                </span>

                <div className='absolute bottom-4 left-4 font-mono text-[#23b623]'>
                <Typewriter
                    options={{autoStart: true,
                    loop: true,
                    delay: 30,
                    strings: [
                        "HTML",
                        "CSS",
                        "Javascript",
                        "React.js",
                        "TailwindCSS",
                        "Bootstrap",
                        "SQL",
                        "PHP"
                    ],
                }}
                    />
                    </div>
                </div>
                </div>
            </div>
            </div>
    )
}

export default Typewritter