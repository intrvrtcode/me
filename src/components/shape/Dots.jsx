/* eslint-disable react/prop-types */
const Dots = ({ size = 5, className }) => {
  const arrSize = new Array(size).fill(null);

  return (
    <div className={className}>
      <div className="flex flex-col gap-y-3">
        {
          arrSize.map((_, y) => (
            <div key={y} className="flex gap-x-4">
              {
                arrSize.map((_, x) => (
                  <div key={x} className="w-1 h-1 rounded-full bg-gray"></div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Dots;