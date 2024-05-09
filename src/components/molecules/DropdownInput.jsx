import React, { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';

function DropdownInput({ inputList, selectedIndex, setSelectedIndex }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setIsOpen(true);
          }}
        >
          <div className="w-[261px] h-[36px] mb-1 border-[1px] border-solid font-bold border-black px-2 rounded-xl text-black flex items-center">
            {inputList[selectedIndex]}
          </div>
          <div className={`absolute top-2 right-2 ${isOpen && 'rotate-180'}`}>
            <GoTriangleDown size="1.5rem" color="black" />
          </div>
        </button>

        {isOpen ? (
          <div className="w-[261px] drop-shadow-xl bg-white rounded-xl px-2 py-1 absolute">
            {inputList.map((inputValue, index) => {
              if (selectedIndex !== index)
                return (
                  <button
                    className="block py-2 hover:bg-bjsGray w-full"
                    key={inputValue}
                    type="button"
                    onClick={() => {
                      setSelectedIndex(index);
                      setIsOpen(false);
                    }}
                  >
                    <div className="text-left">{inputValue}</div>
                  </button>
                );
              return '';
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default DropdownInput;
