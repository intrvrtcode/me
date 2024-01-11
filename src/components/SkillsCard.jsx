/* eslint-disable react/prop-types */
const SkillsCard = ({ title, detail }) => {

  return (
    <div className="border border-white h-min">
      <h4 className="p-2 text-white font-semibold border-b border-white">{title}</h4>
      <div className="p-2 flex flex-wrap gap-2 text-gray">
        {
          detail.map((item, index) => (
            <span key={index}>{item}</span>
          ))
        }
      </div>
    </div>
  )
}

export default SkillsCard;