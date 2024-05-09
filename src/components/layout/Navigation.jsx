import React from 'react';
import { BsGear } from 'react-icons/bs';
import { AiOutlineExport } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../molecules/DropdownMenu';

function Navigation() {
  const navigate = useNavigate();
  const menus = [
    '2024-01-인웹기-001',
    '2024-01-인웹기-002',
    '2024-01-인웹기-003',
  ];
  return (
    <nav className="min-w-[255px] h-[600px] bg-white">
      <div className="flex justify-center pt-20 pb-8">
        <div className="mr-2">
          <span className="font-bold text-xl text-black">김선우</span>
        </div>
        <button
          type="button"
          onClick={() => {
            navigate('/user-edit');
          }}
        >
          <div className="flex items-center mr-2">
            <BsGear color="black" />
            <span className="text-md ml-1 text-black">내 정보</span>
          </div>
        </button>
        <button
          type="button"
          onClick={() => {
            navigate('/landing');
            window.location.reload();
          }}
        >
          <div className="flex items-center">
            <AiOutlineExport color="black" />
            <span className="text-md ml-1 text-black">로그아웃</span>
          </div>
        </button>
      </div>
      <div>
        <DropdownMenu theme="과제 프로젝트" menus={menus} />
      </div>
    </nav>
  );
}

export default Navigation;
