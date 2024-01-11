import github from "../../../assets/img/svg/github.svg";
import dribble from "../../../assets/img/svg/dribble.svg";
import figma from "../../../assets/img/svg/figma.svg";

const FloatingButton = () => {

  return (
    <div className="fixed left-1 top-0 w-9 flex-col items-center justify-between z-50 hidden sm:flex">
      <div className="bg-background">
        <div className="h-32 w-0 border border-gray mx-auto"></div>
        <img className="cursor-pointer mb-1" src={github} alt="github-logo" />
        <img className="cursor-pointer mb-1" src={dribble} alt="dribble-logo" />
        <img className="cursor-pointer" src={figma} alt="figma-logo" />
      </div>
    </div>
  )
}

export default FloatingButton;