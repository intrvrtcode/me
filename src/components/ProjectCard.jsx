/* eslint-disable react/prop-types */
import PrimaryButton from "./PrimaryButton";

const ProjectCard = ({ title, detail, techStack, image, live, code }) => {

  return (
    <div className="border border-white">

      {
       image &&
        <img src={image} />
      }

      <div className={`p-2 flex flex-wrap gap-2 text-gray border-b border-white ${image ? 'border-t' : ''}`}>
        {
          techStack.map((item, index) => (
            <span key={index}>{item}</span>
          ))
        }
      </div>

      <div className="p-4 flex flex-col gap-y-4">
        <h4 className="text-2xl font-medium text-white">{title}</h4>
        <p className="text-gray">{detail}</p>
        <div className="flex flex-wrap gap-4">

          {
            live &&
            <PrimaryButton title="Live <~>" />
          }

          {
            code &&
            <PrimaryButton title="Github <~>" />
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;