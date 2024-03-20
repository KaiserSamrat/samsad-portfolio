import React from 'react';

const Project = () => {
    return (
        <div className='mt-5'>
            <div className='flex items-center justify-between bg-[#292A2B] rounded-lg px-4  py-3'>
                <p className='text-white'>LMS</p>
                <p className='text-white'>TuitionApp</p>
                <p className='text-white'>2023</p>
            </div>
            <div className='mt-3'>
                <div className='grid md:grid-cols-12 gap-3'>
                    <div className='col-span-5'>
                    <img src="/src/assets/TA1.png" className='w-[100%]'/>
                    </div>
                    <div className='col-span-7'>
                        <div className='flex gap-3'>
                        <img src="/src/assets/TA2.png" className='h-[50%]'/>
                       <div>
                       <div className='bg-red-600 px-20 py-5 w-[100%] h-[50%]'>
                            <p className='text-white'>View Project</p>
                        </div>
                        <div className='bg-red-600 px-5 py-5 mt-2'>
                            <p className='text-white'>View Project</p>
                        </div>
                       </div>
                        </div>
                        <div className='flex gap-3'>
                        <img src="/src/assets/TA2.png" className='h-[50%]'/>
                       <div>
                       <div className='bg-red-600 px-5 py-5'>
                            <p className='text-white'>View Project</p>
                        </div>
                        <div className='bg-red-600 px-5 py-5'>
                            <p className='text-white'>View Project</p>
                        </div>
                       </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Project;