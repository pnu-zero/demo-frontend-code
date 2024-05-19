import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

function ProjectCard({ projectData }) {
  return (
    <button
      type="button"
      className="block w-[900px] h-[78px] my-2"
      onClick={() => {
        window.location.href = `https://www.${projectData.sub_domain}.pnu.kr`;
      }}
    >
      <div className="w-[900px] flex justify-between items-center bg-white p-2 rounded-xl text-black shadow-md">
        <div className="w-[200px]">
          <div className="text-[#3973E4] font-bold text-lg">
            {projectData.title}
          </div>
          <div className="text-black text-md font-bold">
            {projectData.name}({projectData.student_id})
          </div>
        </div>
        <div className="w-[500px] overflow-x-auto font-bold">
          {projectData.desc}
        </div>
        <div className="flex items-center w-[100px]">
          <div className="mr-1 font-bold">제출 상태</div>
          <AiFillCheckCircle className="text-green-500" size="24px" />
        </div>
      </div>
    </button>
  );
}

export default ProjectCard;
