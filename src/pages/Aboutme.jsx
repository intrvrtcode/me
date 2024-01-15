import SkillsCard from "../components/SkillsCard";
import Dots from "../components/shape/Dots";
import hometwo from "../assets/img/hometwo.png";

const Aboutme = () => {
  const listFunFact = [
    "I live in Indonesia",
    "I like meatballs and chicken satay",
    "I like anime",
    "I like playing minecraft",
    "I'm comfortable being alone"
  ]

  return (
    <>
      <section className="mt-20 mb-4">
        <h1 className="text-white text-3xl font-semibold mb-3"><span className="text-primary">/</span>about-me</h1>
        <h2 className="text-white">who am i?</h2>
      </section>

      <section className="mb-14">
        <div className="grid grid-cols-12">
          <div className="col-span-12 sm:col-span-6 order-2 sm:order-1 mt-4 sm:mt-0 flex items-center">
            <div className="flex flex-col gap-6 text-gray">
              <p>Hello, i’m Aldi</p>

              <p>
                I’m a self-taught front-end developer based in Surakarta, Indonesia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
              </p>

              <p>
                Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
              </p>
            </div>
          </div>

          <div className="col-span-12 order-1 sm:order-2 sm:col-span-5">
            <div className="relative flex justify-end">
              <Dots className="absolute rotate-90 right-[250px] top-[59px]" />
              <Dots className="absolute bottom-[172px] right-[20px]" />
              <img src={hometwo} />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <h3 className="text-white text-3xl font-medium mb-12"><span className="text-primary">#</span>skills</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <SkillsCard
            title="Languages"
            detail={['Javascript, Python']}
          />

          <SkillsCard
            title="Other"
            detail={['HTML', 'CSS', 'EJS', 'SCSS']}
          />

          <SkillsCard
            title="Tools"
            detail={['VSCode', 'NeoVim', 'Linux', 'Git', 'Postman']}
          />

          <SkillsCard
            title="Databases"
            detail={['SQLite', 'MongoDB']}
          />

          <SkillsCard
            title="Frameworks"
            detail={['React', 'Vue', 'Nuxt', 'Next', 'Alpine', 'Express']}
          />
        </div>
      </section>

      <section>
        <h3 className="text-white text-3xl font-medium mb-12"><span className="text-primary">#</span>my-fun-facts</h3>

        <div className="grid grid-cols-12">
          <div className="col-span-8">
            <div className="flex flex-wrap gap-4">
              {
                listFunFact.map((item, index) => (
                  <span className="p-2 text-white border border-white" key={index}>{item}</span>
                ))
              }
            </div>
          </div>

          <div className="col-span-4">

          </div>
        </div>
      </section>
    </>
  )
}

export default Aboutme;