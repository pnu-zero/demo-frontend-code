import React from 'react';

function ProjectCard({ projectData }) {
  return (
    <button
      type="button"
      className="block w-[900px] min-h-[78px] m-2"
      onClick={() => {
        window.location.href = `https://www.${projectData.sub_domain}.pnu.kr`;
      }}
    >
      <div className="w-[900px] flex justify-between items-center bg-white p-2 rounded-xl text-black shadow-md">
        <div className="w-[350px]">
          <div className="text-[#3973E4] font-bold text-lg">
            {projectData.title}
          </div>
          <div className="text-black text-md font-bold">
            {projectData.name}({projectData.student_id})
          </div>
        </div>
        <div className="w-[350px] font-bold">
          <div>{projectData.desc}</div>
        </div>
        <div className="flex items-center w-[200px] justify-center">
          <div className="text-[#3973E4] mr-1 font-bold">
            {projectData.sub_domain}.pnu.kr
          </div>
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
