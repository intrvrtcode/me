/* eslint-disable react/prop-types */
const PurpleSquare = ({className}) => {

  return (
    <div className={className}>
      <div className="w-[111px] h-28 relative">
        <div className="w-14 h-20 border border-primary absolute left-0 bottom-0">
          <div className="w-[24px] h-[25px] border-t border-b border-r border-primary absolute top-[-1px] left-full">

          </div>
        </div>

        <div className="w-14 h-20 border border-primary absolute top-0 right-0">
          <div className="w-[24px] h-[24px] border-t border-l border-b border-primary absolute bottom-[-1px] right-full">

          </div>
        </div>
      </div>
    </div>
  )
}

export default PurpleSquare;