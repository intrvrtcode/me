import Dots from "../../shape/Dots";

const ShapeRight = () => {

  return (
    <div className="hidden sm:block">
      <div className="w-20 h-20 border border-white absolute top-[550px] right-[-25px]"></div>

      <div className="w-28 h-28 border border-white absolute top-[1100px] right-[-75px]"></div>

      <Dots className="absolute top-[1950px] right-[-42px]" />
    </div>
  )
}

export default ShapeRight;