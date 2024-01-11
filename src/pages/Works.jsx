import ProjectCard from "../components/ProjectCard";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.jpeg";
import project3 from "../assets/img/project3.jpeg";

const Works = () => {
  return (
    <>
      <section className="mt-20 mb-14">
        <h1 className="text-white text-3xl font-semibold mb-3"><span className="text-primary">/</span>projects</h1>
        <h2 className="text-white">List of my projects</h2>
      </section>

      <section className="mb-14">
        <h3 className="text-white text-3xl font-medium mb-12"><span className="text-primary">#</span>complete-apps</h3>

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

      <section>
        <h3 className="text-white text-3xl font-medium mb-12"><span className="text-primary">#</span>small-projects</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectCard
            title="Bot boilerplate"
            detail="Start creating scalable discord.js bot with typescript in seconds"
            techStack={['Discord.js', 'TS', 'JS']}
            code
          />

          <ProjectCard
            title="My blog"
            detail="Front-end of my future blog website written in vue"
            techStack={['Vue', 'CSS', 'JS']}
            code
          />

          <ProjectCard
            title="Web Dev nvim config"
            detail="Config for neovim perfect for web developer"
            techStack={['Lua', 'NeoVim']}
            code
          />
        </div>
      </section>
    </>
  )
}

export default Works;