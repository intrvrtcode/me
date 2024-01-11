import github from "../../../assets/img/svg/github.svg"
import figma from "../../../assets/img/svg/figma.svg"
import discord from "../../../assets/img/svg/discord.svg"

const Footer = () => {

  return (
    <footer className="border-t border-gray py-8 mt-16 sm:mt-20">
      <div className="container mx-auto px-4 sm:px-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 mb-10">
          <div>
            <div className="flex gap-x-6 mb-4">
              <h3 className="text-base text-white font-bold"><span className="text-gray font-semibold">&lt;/&gt;</span> Aldi</h3>
              <span className="text-gray">elias@elias-dev.ml</span>
            </div>

            <p className="text-white">Web designer and front-end developer</p>
          </div>

          <div className="flex mt-6 sm:mt-0 sm:justify-end">
            <div>
              <h4 className="text-2xl font-medium text-white mb-3">Media</h4>

              <div className="flex gap-2">
                <img className="cursor-pointer" src={github} />
                <img className="cursor-pointer" src={figma} />
                <img className="cursor-pointer" src={discord} />
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gray">&copy; Copyright {new Date().getFullYear()}. Made by Aldi</p>
      </div>
    </footer>
  )
}

export default Footer;