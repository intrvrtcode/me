/* eslint-disable react/prop-types */
const TextField = ({label, name}) => {

  return (
    <div className="relative">
      <input type="text" id="floating_outlined" className="block p-2 w-full text-gray bg-transparent border border-gray appearance-none focus:outline-none focus:ring-0 peer" name={name} placeholder=" " />
      <label htmlFor="floating_outlined" className="absolute text-gray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-background px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">{label}</label>
    </div>
  )
}

export default TextField;