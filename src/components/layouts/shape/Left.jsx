import Dots from "../../shape/Dots";

const ShapeLeft = () => {

  return (
    <div className="hidden sm:block">
      <Dots className="absolute top-[700px] left-[-42px]" />

      <div className="w-28 h-28 border border-white absolute top-[1600px] left-[-75px]"></div>

      <Dots className="absolute top-[2400px] left-[-42px]" />
    </div>
  )
}

export default ShapeLeft;