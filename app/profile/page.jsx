"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaJava, FaBootstrap } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

// about data 
const about = {
  title: 'About me',
  description: 'An enthusiastic computer science student who enjoys coding and working on web development and AI/ML projects. Eager to work in team environments and explore new languages and technologies. Demonstrated strong teamwork, problem-solving, and communication skills through various projects and hackathons. Highly detail-oriented and adaptable, with a keen interest in AI/ML. Enjoys reading, creating art, and engaging in sports such as football, basketball, and table tennis. Seeking a role in web development or AI/ML to contribute to organizational success and personal growth.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Muhammad Farhan'
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+971) 55 3438700'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Indian'
    },
    {
      fieldName: 'Email',
      fieldValue: 'snfarhan2014@gmail.com'
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Malayalam, Hindi, Arabic'
    },
  ]
};

// experience data
const experience = {
  title: 'My Experience',
  items: [
    {
      company: 'Vextera Technologies',
      position: 'Product Development Intern',
      duration: 'July 2024 - August 2024',
    },
    {
      company: 'JV One',
      position: 'Product Development Intern',
      duration: 'July 2024 - August 2024',
    },
  ],
};

// education data
const education = {
  title: 'My Education',
  description: '',
  items: [
    {
      institution: 'Manipal Academy Of Higher Education Dubai',
      degree: 'BTech CSE',
      duration: '2021 - Present',
    },
    {
      institution: 'Our Own English High School Sharjah (Boy’s Branch)',
      degree: 'High School Diploma',
      duration: '2015 - 2021',
    },
    {
      institution: 'The Kindergarten Starters',
      degree: 'Elementary Education',
      duration: '2008 - 2015',
    },
  ],
};

// skills data
const skills = {
  title: 'My Skills',
  description: '',
  skilllist: [
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <TbBrandCpp />,
      name: "C++",
    },
    {
      icon: <FaHtml5 />,
      name: "Html 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "Reactjs",
    },
    {
      icon: <SiNextdotjs />,
      name: "Nextjs",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,transition:{delay:1.9,duration: 0.4, ease:'easeIn'}}} className="min-h-[80vh] flex items-center justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        {/* Set defaultValue prop to 'about' */}
        <Tabs defaultValue='about' className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* about me */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                  {about.info.map((item,index) => {
                    return (
                      <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                          <span className="text-white/60 ">{item.fieldName}</span>
                          <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329]/70 backdrop-blur-lg border border-white/20 shadow-md rounded-xl h-[184px] py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-cyan-500">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-cyan-500"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index)=>{
                      return <li key={index} className="bg-[#232329]/70 backdrop-blur-lg border border-white/20 shadow-md rounded-xl h-[184px] py-6 px-10 flex flex-col justify-center items-center lg:items-start gap-1">
                        <span className="text-cyan-500">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-cyan-500"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-[15px]">
                  {skills.skilllist.map((skill, index) => {
                    return (
                      <li key={index} className="bg-[#232329]/70 backdrop-blur-lg border border-white/20 shadow-md rounded-xl h-[184px] py-6 px-8 flex flex-col justify-center items-center gap-3">
                        <span className="text-4xl text-cyan-500">{skill.icon}</span>
                        <p className="text-lg font-medium">{skill.name}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Profile;
