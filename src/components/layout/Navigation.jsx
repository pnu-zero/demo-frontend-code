import { useEffect, useState } from 'react';
import { BsGear } from 'react-icons/bs';
import { AiOutlineExport } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../api/login';
import DropdownMenu from '../molecules/DropdownMenu';
import { getMyGroupList } from '../../api/group';

function Navigation() {
  const navigate = useNavigate();
  const [grouplist, setGrouplist] = useState([]);

  useEffect(() => {
    getMyGroupList(setGrouplist, navigate);
  }, []);

  const handleLogoutButton = () => {
    logout(navigate);
  };
  return (
    <nav className="min-w-[255px] min-h-[100vh] bg-white">
      <div className="flex justify-center pt-20 pb-8">
        <div className="mr-2">
          <span className="font-bold text-xl text-black">
            {localStorage.getItem('name')}
          </span>
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
            handleLogoutButton(navigate);
          }}
        >
          <div className="flex items-center">
            <AiOutlineExport color="black" />
            <span className="text-md ml-1 text-black">로그아웃</span>
          </div>
        </button>
      </div>
      <div>
        <DropdownMenu theme="과제 프로젝트" menus={grouplist} />
      </div>
    </nav>
  );
}

export default Navigation;
