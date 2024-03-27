import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/PrimaryButton";
import homeone from "../assets/img/homeone.png";
import hometwo from "../assets/img/hometwo.png";
import quotationMark from "../assets/img/svg/quotation-mark.svg"
import discord from "../assets/img/svg/discord.svg";
import envelope from "../assets/img/svg/envelope.svg";
import ProjectCard from "../components/ProjectCard";
import SkillsCard from "../components/SkillsCard";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.jpeg";
import project3 from "../assets/img/project3.jpeg";
import Dots from "../components/shape/Dots";
import PurpleSquare from "../components/shape/PurpleSquare";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-12 mb-28">
        <div className="flex items-center py-7 sm:py-0">
          <div>
            <h1 className="text-white text-2xl sm:text-3xl font-semibold mb-8">Aldi is a <span className="text-primary">web designer</span> and <span className="text-primary">front-end developer</span></h1>

            <h2 className="text-base text-gray mb-6">He crafts responsive websites where technologies meet creativity</h2>

            <PrimaryButton onClick={() => navigate('/contacts')} title="Contact me!!" />
          </div>
        </div>

        <div>
          <div className="px-4 relative">
            <img className="relative z-10 mx-auto" src={homeone} alt="home-img-first" />
            <div className="border border-gray p-2 flex flex-nowrap gap-x-3 items-center mx-4">
              <div className="w-4 h-4 bg-primary"></div>
              <p className="text-gray font-medium">Currently working on <span className="text-white font-semibold">PT TEM</span></p>
            </div>
            <PurpleSquare className="absolute left-[7%] top-[27%] sm:left-[14%]" />
            <Dots className="absolute bottom-[20%] right-[12%] z-20" />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center mb-16">
        <div className="grid-rows-2">
          <div className="relative">
            <div className="absolute top-[-10px] left-[10px] bg-background px-2">
              <img src={quotationMark} alt="quotation-mark" />
            </div>

            <div className="absolute bottom-[-10px] right-[15px] bg-background px-2">
              <img src={quotationMark} alt="quotation-mark" />
            </div>

            <span className="p-6 sm:p-8 inline-block border border-gray text-white text-xl sm:text-2xl font-medium">First of all, solve the problem. Then, write the code</span>
          </div>
          <div className="flex justify-end">
            <span className="p-4 inline-block border-l border-r border-b border-gray text-white text-xl sm:text-2xl">- John Johnson</span>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex flex-wrap sm:flex-nowrap justify-end sm:justify-between gap-x-10 gap-y-3 mb-12">
          <div className="flex items-center gap-x-4 w-full">
            <h3 className="text-white font-medium text-3xl"><span className="text-primary">#</span>projects</h3>
            <div className="w-full h-0 border border-primary"></div>
          </div>

          <button onClick={() => navigate('/projects')} className="text-nowrap text-white font-medium hover:text-primary transition-colors">View All ~~&gt;</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectCard
            title="ChertNodes"
            detail="Minecraft servers hosting"
            image={project1}
            techStack={['HTML', 'SCSS', 'Python', 'Flask']}
            live
            code
          />

          <ProjectCard
            title="Kahoot Answers Viewer"
            detail="Get answers to your kahoot quiz"
            image={project2}
            techStack={['CSS', 'Express', 'Node.js']}
            live
          />

          <ProjectCard
            title="ProtectX"
            detail="Discord anti-crash bot"
            image={project3}
            techStack={['React', 'Express', 'Discord.js', 'Node.js']}
            live
          />
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-12 mb-4">
          <div className="flex gap-x-4 items-center col-span-12 sm:col-span-5">
            <h3 className="text-white font-medium text-3xl"><span className="text-primary">#</span>skilss</h3>

            <div className="w-full h-0 border border-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-4 sm:col-span-5 relative">
            <Dots className="absolute top-[5%] sm:top-[10%] left-[10%]" />
            <Dots className="absolute top-[40%]  sm:bottom-[25%] right-[30%]" />
            <PurpleSquare className="absolute bottom-[10%] left-0 sm:bottom-[5%] sm:left-[10%]" />
            <div className="w-20 h-20 border border-white absolute top-[15%] right-[5%]"></div>
            <div className="w-12 h-12 border border-white absolute bottom-[5%] right-[5%]"></div>
          </div>

          <div className="col-span-8 sm:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              <div>
                <SkillsCard
                  title="Languages"
                  detail={['Javascript, Python']}
                />
              </div>

              <div className="flex flex-col gap-y-4">
                <SkillsCard
                  title="Databases"
                  detail={['SQLite', 'MongoDB']}
                />

                <SkillsCard
                  title="Other"
                  detail={['HTML', 'CSS', 'EJS', 'SCSS']}
                />
              </div>

              <div className="flex flex-col gap-y-4">
                <SkillsCard
                  title="Tools"
                  detail={['VSCode', 'NeoVim', 'Linux', 'Git', 'Postman']}
                />

                <SkillsCard
                  title="Frameworks"
                  detail={['React', 'Vue', 'Nuxt', 'Next', 'Alpine', 'Express']}
                />
              </div>

              <div className="order-5">

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-6">
            <div className="flex gap-x-4 items-center mb-8">
              <h3 className="text-white font-medium text-3xl text-nowrap"><span className="text-primary">#</span>about-me</h3>

              <div className="w-full h-0 border border-primary"></div>
            </div>

            <div className="flex flex-col gap-6 text-gray">
              <p>Hello, i’m Aldi</p>

              <p>
                I’m a self-taught front-end developer based in Surakarta, Indonesia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
              </p>

              <p>
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
              </p>

              <div>
                <PrimaryButton onClick={() => navigate('/about-me')} title="Read More ->" />
              </div>
            </div>
          </div>

          <div className="hidden sm:block sm:col-span-1"></div>

          <div className="hidden sm:block sm:col-span-5">
            <div className="relative flex justify-end">
              <Dots className="absolute rotate-90 right-[250px] top-[59px]" />
              <Dots className="absolute bottom-[172px] right-[20px]" />
              <img src={hometwo} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-12 mb-8">
          <div className="flex gap-x-4 items-center col-span-12 sm:col-span-4">
            <h3 className="text-white font-medium text-3xl text-nowrap"><span className="text-primary">#</span>contacts</h3>

            <div className="w-full h-0 border border-primary"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <p className="text-white font-medium">
              I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
            </p>
          </div>

          <div className="flex mt-6 sm:mt-0 justify-end">
            <div className="p-4 border border-white">
              <h4 className="font-semibold text-white mb-4">Message me here</h4>

              <div className="flex flex-nowrap gap-x-1 mb-2 items-center">
                <img src={discord} />
                <p className="text-gray">intrvrtcode</p>
              </div>

              <div className="flex flex-nowrap gap-x-1 items-center">
                <img src={envelope} />
                <p className="text-gray break-all">aldirmd.freelace@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;