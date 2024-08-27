"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      {/* Rotating Container */}
      <motion.div
        className="relative w-[350px] h-[350px] xl:w-[506px] xl:h-[506px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: 'easeIn' } }}
      >
        {/* Floating Circles */}
        <motion.div
          className="absolute inset-0 flex justify-center items-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
                  {/* Fixed Image */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="relative w-full h-full flex justify-center items-center">
              <Image
                src="/assets/portfolio_pic.png"
                priority
                quality={100}
                fill
                alt="Portfolio"
                className="object-contain"
              />
            </div>
          </div>

            {/* Outer Circle */}
            <motion.svg
              className="absolute inset-0 w-full h-full"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="253"
                cy="233"
                r="231"
                stroke="#00BCD4"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Photo;
