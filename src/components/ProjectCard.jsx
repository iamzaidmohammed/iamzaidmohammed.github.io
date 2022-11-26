const ProjectCard = ({
  image,
  projectName,
  liveUrl,
  githubUrl,
  stack1,
  stack2,
  stack3,
}) => {
  return (
    <div className="basis-1/2 shadow-sm shadow-slate-600">
      <div className="overflow-hidden cursor-pointer">
        <img src={image} alt="" className="hover:scale-110 transition-all" />
      </div>
      <h2 className="text-xl py-2">{projectName}</h2>
      <div className="flex justify-start gap-2">
        <small className="text-gray-400">{stack1}</small>
        <small className="text-gray-400">{stack2}</small>
        <small className="text-gray-400">{stack3}</small>
      </div>
      <div className="w-full flex justify-between">
        <a
          className="border-b-2 border-b-NeonGreen pt-3 hover:border-b-white hover:text-NeonGreen"
          href={liveUrl}
          target="__blank"
        >
          Live Site
        </a>
        <a
          className="border-b-2 border-b-NeonGreen pt-3 hover:border-b-white hover:text-NeonGreen"
          href={githubUrl}
          target="__blank"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
