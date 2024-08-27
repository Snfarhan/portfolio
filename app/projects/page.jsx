"use client";

import { motion } from 'framer-motion';
import React, { useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsGithub} from 'react-icons/bs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: "01",
    category: "desktop application",
    title: "Nafiza Car Rental",
    description: "Nafiza is a Java-based car rental management system developed by Zuha Noor, Natasha Nassar, and myself, showcasing object-oriented programming (OOP) principles. It offers a comprehensive car catalog and dynamic rental cost calculations based on user criteria such as vehicle choice, duration, mileage, and insurance. Future enhancements include database integration, a user account system, and advanced search capabilities.",
    stack: [{name: 'Java'}],
    image: '/assets/projects/nafiza.png',
    git: '',

  },
  {
    num: "02",
    category: "mobile application",
    title: "Remedi",
    description: "Remedi is a mobile app developed by Vaishak Ravindranath, Arwa Vora, and myself using Flutterflow, designed to help users manage their medication schedules. It offers a user-friendly interface for organizing medication details, customizable reminders, and medication tracking. Future enhancements include medication interaction checks, refill reminders, and educational resources. Skills utilized include SQL, Firebase, software development, and CRM.",
    stack: [{name: 'Flutterflow'}, {name: 'Firebase'}],
    image: '/assets/projects/remedi.png',
    git: '',
  },
  {
    num: "03",
    category: "web application",
    title: "Ziyan AI",
    description: "Ziyan: Text-to-Speech Generative AI\nDeveloped a cutting-edge generative AI project, Ziyan, leveraging Flask for the backend and HTML, CSS, and JavaScript for the frontend. Ziyan possesses the remarkable ability to transform text responses into speech, thereby facilitating a more intuitive and engaging user experience.",
    stack: [{name: 'Python'}],
    image: '/assets/projects/ziyan.png',
    git: '',
  },
  {
    num: "04",
    category: "WebScraper",
    title: "Dubizzle Scraper",
    description: "Dubizzle Scraper is a Python and Selenium-based tool for extracting car listings from Dubizzle, a popular online marketplace. It efficiently collects data such as make, model, year, price, and location. Future plans include expanding to other categories like real estate and electronics, automating scraping schedules, adding export options, and implementing advanced filtering criteria for targeted data extraction.",
    stack: [{name: 'Python'}],
    image: '/assets/projects/webscraper.png',
    git: '',
  },
  {
    num: "05",
    category: "AI",
    title: "PDF Extractor",
    description: "Developed a document analysis system using Retrieval-Augmented Generation (RAG) with Mistral LLM. This system enables users to upload PDF or TXT documents and receive intelligent summaries or complete tasks based on their prompts.\n1. Technical Skills: RAG, Mistral LLM, Document Processing, Natural Language Processing.\n2. Project Highlights:\n   * Implemented RAG to leverage Mistral LLM's capabilities for text analysis.\n   * Enabled users to upload and interact with document content through prompts.\n   * Streamlined information retrieval and task completion from various document formats.",
    stack: [{name: 'Python'}],
    image: '/assets/projects/pdf_extract.png',
    git: '',
  },
  {
    num: "06",
    category: "ML",
    title: "House Price Prediction",
    description: "In the world of real estate, predicting house prices is a crucial skill. By leveraging machine learning (ML), I built a model that analyzes historical data to forecast house prices with greater accuracy. This can empower realtors, investors, and homeowners to make informed decisions in a complex market.",
    stack: [{name: 'Python'}],
    image: '/assets/projects/house_price_pred.png',
    git: '',
  },
  {
    num: "07",
    category: "Console Application",
    title: "News Automator",
    description: "News Automator is a command-line tool that fetches the latest news headlines directly to the terminal using a news API. It offers real-time updates from various categories like World, Technology, and Sports, allowing users to customize their news feed based on interests. The tool is lightweight and accessible, ideal for users who prefer text-based interfaces. Planned updates include advanced filtering and desktop notifications.",
    stack: [{name: 'Python'}],
    image: '/assets/projects/news_automator.png',
    git: '',
  },

];

const Projects = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper) => {
      // get current slide index
      const currentIndex = swiper.activeIndex;
      // update project state based on current slide index
      setProject(projects[currentIndex]);
    }

    return (
      <motion.section initial={{opacity:0}} animate={{opacity:1,transition:{delay:2.1,duration: 0.4, ease:'easeIn'}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-white text-outline">
                  {project.num}
                </div>
                {/* project category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-cyan-500 transition-all duration-500 capitalize">
                  {project.category} Project
                </h2>
                {/* project description */}
                <p className="text-white/60">{project.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item,index) => {
                    return(
                      <li key={index} className="text-xl text-cyan-500">
                        {item.name}
                        {/* remove the last comma */}
                        {index !== project.stack.length - 1 && ","}
                      </li>
                    ); 
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/20 mt-4"></div>
                {/* buttons */}
                <div className="flex items-center gap-4 pb-7">
                  {/* github button */}
                  <Link href={project.git}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                            <BsGithub className="text-white text-3xl group-hover:text-cyan-500"/>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
                {projects.map((project,index) => {
                  return <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-white">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt="" style={{ objectFit: 'contain' }}></Image>
                    </div>
                    </div>
                  </SwiperSlide>
                })}
                {/* slider buttons*/}
                <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
                btnStyles="bg-cyan-500 hover:bg-cyan-600 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                 />
              </Swiper>
            </div>
          </div>
        </div>
      </motion.section>
    )
  }
  
  export default Projects