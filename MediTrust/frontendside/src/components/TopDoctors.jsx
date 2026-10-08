import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext);

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-[#262626] md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
            
            <div className='w-full grid grid-cols-auto gap-6 pt-5 gap-y-8 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div 
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                        className='cursor-pointer flex flex-col items-center text-center hover:scale-110 transition-all duration-500' 
                        key={index}
                    >
                        {/* Circular Doctor Image */}
                        <div className='w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center rounded-full bg-[#EAEFFF] shadow-xl'>
                            <img className='w-40 h-40 sm:w-46 sm:h-46 rounded-full object-cover' src={item.image} alt={item.name} />
                        </div>
                        
                        {/* Doctor Info */}
                        <div className='mt-3'>
                            <p className={`text-sm flex items-center gap-2 justify-center ${item.available ? 'text-green-500' : 'text-gray-500'}`}>
                                <span className={`w-2 h-2 rounded-full ${item.available ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                                {item.available ? 'Available' : 'Not Available'}
                            </p>
                            <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
                            <p className='text-[#5C5C5C] text-sm italic'>{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} className='bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10'>More</button>
        </div>
    );
};

export default TopDoctors;
