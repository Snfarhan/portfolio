"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 9.42,
        text: "CGPA",
    },
    {
        num: 10,
        text: "Programming languages",
    }, 
    {
        num: 11,
        text: "Certifications",
    },
    {
        num: 10,
        text: "Projects",
    },
    {
        num: 86,
        text: "Commits",
    }, 
    {
        num: 3,
        text: "Hackathons",
    }, 
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
        <div className="container mx-auto mb-14">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto  xl:max-w-none">
                {stats.map((item, index) => {
                    return <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start"key={index}>
                        <CountUp end={item.num} duration={5} delay={2} className="text-3xl xl:text-5xl font-extrabold"/>
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats