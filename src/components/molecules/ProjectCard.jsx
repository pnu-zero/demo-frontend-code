import React from 'react';
import { AiFillCheckCircle } from 'react-icons/ai';

function ProjectCard() {
  return (
    <button type="button" className="block w-[900px] h-[78px] my-2 mx-auto">
      <div className="w-[900px] flex justify-between items-center bg-bjsGray p-2 rounded-xl text-black shadow-md">
        <div className="w-[200px]">
          <div className="text-[#3973E4] font-bold text-lg">
            날씨 정보 알림 서비스
          </div>
          <div className="text-black text-md font-bold">김선우(201924435)</div>
        </div>
        <div className="w-[500px] overflow-x-auto font-bold">
          날씨를 확인 하게 해주며 NODE JS를 활용해 웹 서비스를 제작 하였으며,
          CSS의 복합선택자 사용
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
