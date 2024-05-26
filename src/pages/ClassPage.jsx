import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import ProjectCard from '../components/molecules/ProjectCard';
import 'react-datepicker/dist/react-datepicker.css';
import ClassPermissionModal from '../components/modals/ClassPermissionModal';
import {
  getProjectListByGroup,
  getProjectListByGroupBySearch,
} from '../api/project';

function ClassPage() {
  const notify = () =>
    toast.info('제출 마감 시간 이전입니다', {
      theme: 'colored',
    });
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [projectDatas, setProjectDatas] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [groupAuthority, setGroupAuthority] = useState('false');

  const [searchParams, setSearchParams] = useSearchParams();
  const searchRef = useRef();

  const handleSearchButton = () => {
    const searchText = searchRef.current.value;
    setSearchParams({ q: searchText });
  };

  useEffect(() => {
    console.log(searchParams.get('q'));
    if (searchParams.get('q') === null) {
      console.log(searchParams.get('q') === '');
      getProjectListByGroup(
        setProjectDatas,
        id,
        navigate,
        setStartDate,
        setGroupAuthority,
        notify,
      );
    } else {
      getProjectListByGroupBySearch(
        setProjectDatas,
        id,
        navigate,
        setStartDate,
        setGroupAuthority,
        notify,
        searchParams.get('q'),
      );
    }
  }, [searchParams.get('q')]);

  return (
    <div className="text-black">
      <ClassPermissionModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        startDate={startDate}
        setStartDate={setStartDate}
        groupAuthority={groupAuthority}
        setGroupAuthority={setGroupAuthority}
      />
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

        {localStorage.getItem('userRole') === 'Admin' && (
          <div className="ml-16">
            <div className="mb-2">
              <button
                type="button"
                className="block text-center text-white font-bold text-lg w-[150px] px-2 py-1 rounded-2xl  bg-bjsBlue"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                과제 설정
              </button>
            </div>
          </div>
        )}
      </div>
      <div className=" ml-24 mt-16">
        <div className="relative">
          <div className="relative inline-block ml-[610px] mb-2">
            <input
              type="text"
              className="w-[290px] h-[36px] leading-[36px] border-[2.5px] border-solid border-bjsBlue pr-2 pl-8 rounded-xl focus-visible:outline-0"
              placeholder="학번, 이름, 프로젝트 명"
              ref={searchRef}
            />
            <button
              className="absolute bg-bjsBlue text-lg p-1 pl-3 text-white right-0 rounded-r-xl "
              type="button"
              aria-label="검색"
              onClick={handleSearchButton}
            >
              <AiOutlineSearch size="28px" className="mr-2" />
            </button>
          </div>
        </div>
        {projectDatas.map((projectData) => (
          <div key={projectData.id}>
            <ProjectCard projectData={projectData} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassPage;
