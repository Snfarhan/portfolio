import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';

//components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Computer Science Engineer</span>
            <h1 className="h1 mb-6">Hey! I'm <br /> <span className="text-cyan-500">Muhammad Farhan</span></h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I am skilled in coding, teamwork, and problem-solving, and eager to drive innovation in AI/ML or web development projects.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Download CV Button */}
              <a href="/FARHAN RESUME.pdf" download className="uppercase flex items-center gap-2">
                <Button variant="outline" size="lg">
                  <span>Download CV</span>
                  <FiDownload className="ml-3 text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social containertSyles="flex gap-6" iconStyles="w-9 h-9 border border-cyan-500 rounded-full flex justify-center 
                items-center text-cyan-500 text-base hover:bg-cyan-500 hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}

export default Home;
