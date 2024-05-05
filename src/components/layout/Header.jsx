import React from 'react';

function Header() {
  return (
    <header className="w-[1280px] h-[100px] bg-bjsDeepSky mx-auto">
      <div className="flex h-[100px] items-center justify-center">
        <div className="px-8  mr-2 rounded-xl bg-bjsLightSky inline-block">
          <span className="font-bold text-white text-3xl">배지시</span>
        </div>
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
