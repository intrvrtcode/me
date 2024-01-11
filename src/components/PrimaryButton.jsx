/* eslint-disable react/prop-types */
const PrimaryButton = ({ title, onClick }) => {

  return (
    <button onClick={onClick} className="border border-primary px-4 py-2 text-white font-medium hover:text-primary transition-colors">{title}</button>
  )
}

export default PrimaryButton;