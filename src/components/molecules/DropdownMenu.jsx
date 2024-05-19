import { useState } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

function DropdownMenu({ theme, menus }) {
  const [isOpen, setisOpen] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);
  const navigate = useNavigate();
  const colorList = [
    'bg-[#D48DFF]',
    'bg-[#8DFFD6]',
    'bg-[#8DBBFF]',
    'bg-[#FF8DBD]',
    'bg-[#F6FF8D]',
    'bg-[#D48DFF]',
    'bg-[#8DFFD6]',
    'bg-[#8DBBFF]',
    'bg-[#FF8DBD]',
    'bg-[#F6FF8D]',
  ];

  return (
    <div className="w-[206px] mx-auto">
      <button
        className="w-full flex items-center"
        type="button"
        onClick={() => setisOpen((prev) => !prev)}
      >
        <div className={`mr-2 ${isOpen ? '' : 'rotate-[270deg]'}`}>
          <BsFillCaretDownFill color="black" />
        </div>
        <div className="font-bold text-lg text-black">{theme}</div>
      </button>{' '}
      {isOpen
        ? menus.map((menu, index) => (
            <button
              className="w-full"
              type="button"
              key={menu.id}
              onClick={() => {
                setClickedIndex(index);
                navigate(`/group/${menu.id}`);
              }}
            >
              <div
                className={`w-full my-1 flex items-center p-2 ${clickedIndex === index ? 'bg-[#F0F0F0]  rounded-xl' : ''}`}
              >
                <div
                  className={`w-[8px] h-[8px] ${colorList[index]} mr-3 ml-1`}
                />
                <span className="font-bold text-md text-black">
                  {menu.class_name} {menu.class_num}
                </span>
              </div>
            </button>
          ))
        : ''}
    </div>
  );
}

export default DropdownMenu;
