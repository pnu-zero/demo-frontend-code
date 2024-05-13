import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import ProjectCard from '../components/molecules/ProjectCard';

function ClassPage() {
  return (
    <div className="text-black">
      <div className="flex mt-12 items-center">
        <div className="flex w-[700px] ml-24 justify-between">
          <div className="w-[120px] text-center">
            <div className="text-8xl font-bold">34</div>
            <div className="text-3xl">총원</div>
          </div>
          <div className="w-[140px] text-center">
            <div className="text-8xl font-bold">33</div>
            <div className="text-3xl">가입자 수</div>
          </div>
          <div className="w-[120px] text-center">
            <div className="text-8xl font-bold">20</div>
            <div className="text-3xl">제출 완</div>
          </div>
          <div className="w-[140px] text-center">
            <div className="text-8xl font-bold">13</div>
            <div className="text-3xl">제출 미완</div>
          </div>
        </div>

        <div className="ml-36">
          <button
            type="button"
            className="block text-white font-bold text-lg w-[150px] px-2 py-1 rounded-2xl bg-bjsBlue"
          >
            권한 설정
          </button>
          <button
            type="button"
            className=" block text-white font-bold text-lg w-[150px] px-2 py-1 rounded-2xl mt-6 bg-bjsBlue"
          >
            마감시간 설정
          </button>
        </div>
      </div>
      <div className=" ml-24 mt-24">
        <div className="relative">
          <AiOutlineSearch
            className="absolute top-2 left-2 text-[#B3B3B3]"
            size="20px"
          />
          <input
            type="text"
            className="w-[261px] h-[36px] leading-[36px] mb-4 border-[1px] border-solid border-black pr-2 pl-8 rounded-xl"
            placeholder="검색"
          />
        </div>

        <div className="w-[1000px] h-[400px] py-2 rounded-xl bg-white overflow-y-auto">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default ClassPage;
