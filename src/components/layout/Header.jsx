import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  return (
    <header className="min-w-[1280px] h-[60px] bg-bjsDeepSky">
      <div className="min-w-[1280px] flex h-[60px] items-center justify-center">
        <button
          type="button"
          onClick={() => {
            navigate('/landing');
          }}
        >
          <div className="px-8 mr-2 rounded-xl bg-bjsLightSky inline-block">
            <span className="font-bold text-white text-3xl">PNU cloud</span>
          </div>
        </button>
        <div className="ml-2">
          <span className="font-bold text-white text-xl">
            당신의 프로젝트를 관리하세요
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
