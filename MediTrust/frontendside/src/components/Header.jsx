import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets';

const Header = () => {
    return (
        <div className='flex flex-col md:flex-row flex-wrap rounded-lg px-6 md:px-10 lg:px-20'>

        {/* --------- Header Left --------- */}
        <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>

            {/* Animated Text */}
            <motion.p 
                className='text-3xl md:text-4xl lg:text-5xl text-textPrimary font-playfair font-semibold leading-tight md:leading-tight lg:leading-tight'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }} // Fades out on scroll up
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                Book Appointment <br /> With Trusted Doctors
            </motion.p>

            {/* Small Description */}
            <motion.div 
                className='flex flex-col md:flex-row items-center gap-3 text-textPrimary text-sm font-light'
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8 }}
            >
                <img className='w-28' src={assets.group_profiles} alt="" />
                <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
            </motion.div>

            {/* Animated Button */}
            <motion.a 
                href='#speciality'
                className='flex items-center gap-2 bg-black px-8 py-3 rounded-full text-[#FFD700] text-sm m-auto md:m-0 hover:bg-gray-300 transition-all duration-300'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
            </motion.a>
        </div>

        {/* --------- Header Right --------- */}
        <div className='md:w-1/2 relative'>
            <motion.img 
                className='w-full md:absolute bottom-0 h-auto rounded-lg' 
                src={assets.header_img} 
                alt="" 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1 }}
            />
        </div>
    </div>
    );
}

export default Header;
