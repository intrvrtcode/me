/* eslint-disable react/prop-types */
const TextareaField = ({ label, name, rows = 4, required }) => {

  return (
    <div className="relative">
      <textarea type="text" id={name} className="block p-2 w-full text-gray bg-transparent border border-gray appearance-none focus:outline-none focus:ring-0 peer" name={name} placeholder="" rows={rows} required={required} />
      <label htmlFor={name} className="absolute text-gray duration-300 transform -translate-y-6 top-2 z-10 origin-[0] bg-background px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-[3px] peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 start-1">{label}</label>
    </div>
  )
}

export default TextareaField;