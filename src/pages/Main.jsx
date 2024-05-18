import { useRef, useState } from 'react';
import ServerFileUpload from '../components/organisms/ServerFileUpload';
import ClientFileUpload from '../components/organisms/ClientFileUpload';
import handleSaveProject from '../api/project';

function Main() {
  const titleRef = useRef();
  const descRef = useRef();
  const [files, setFiles] = useState({
    staticFile: '',
    dynamicFile: '',
  });

  return (
    <div className="flex flex-col items-center mx-auto mt-24 min-w-[800px]">
      <div className="flex flex-col justify-center items-start w-[786px]">
        <div className="flex">
          <div className="pr-8">
            <div className="flex justify-center items-center w-[342px] mb-6">
              <div className="mr-3 leading-9 text-black font-bold text-lg">
                제목
              </div>
              <input
                type="text"
                className="w-[290px] h-[36px] border-[1.1px] border-solid border-black px-2 rounded-xl"
                placeholder="제목"
                ref={titleRef}
              />
            </div>

            <div className="flex justify-center items-center w-[342px]">
              <div className="mr-3 leading-9 text-black font-bold text-lg">
                URL
              </div>
              <input
                type="text"
                className="w-[290px] h-[36px] border-[1.1px] border-solid border-black px-2 rounded-xl"
                placeholder="url"
                disabled
              />
            </div>
          </div>

          <div className="flex ml-8">
            <div className="mr-1 leading-9 text-black font-bold text-lg w-[52px]">
              설명
            </div>
            <textarea
              rows="4"
              cols="34"
              className="rounded-xl border-[1.1px] border-solid border-black p-2"
              ref={descRef}
            />
          </div>
        </div>

        <div className="flex mt-12">
          <div className="flex flex-col justify-center items-center font-bold text-center text-black">
            <div className="mb-2">
              프론트 파일
              <br />
              (HTML,CSS,JS)
            </div>
            <ClientFileUpload setFiles={setFiles} />
          </div>

          <div className="flex flex-col justify-center items-center ml-24 font-bold text-center text-black">
            <div className="mb-2">
              서버파일
              <br />
              (NODE.JS)
            </div>
            <ServerFileUpload setFiles={setFiles} />
          </div>
        </div>
      </div>
      <span className="font-bold text-red-500 text-3xl mt-12">
        6.29:18:00 까지 수정 가능합니다
      </span>
      <button
        type="button"
        className="text-white font-bold w-[110px] py-1 rounded-2xl mt-12 bg-bjsBlue"
        onClick={() => {
          if (titleRef.current.value === '' || descRef.current.value === '') {
            alert('제목과 설명은 빈칸일 수 없습니다.');
            return;
          }
          if (files.staticFile === '') {
            alert('프론트 파일을 업로드해주세요.');
            return;
          }
          const projectForm = {
            user_id: localStorage.getItem('user_id'),
            group_id: localStorage.getItem('group_id'),
            title: titleRef.current.value,
            desc: descRef.current.value,
            sub_domain: 'cori',
          };
          const formdata = new FormData();
          formdata.append(
            'projectDto',
            new Blob([JSON.stringify(projectForm)], {
              type: 'application/json',
            }),
          );
          formdata.append('staticFile', files.staticFile);
          formdata.append('dynamicFile', files.dynamicFile);
          handleSaveProject(formdata);
        }}
      >
        저장
      </button>
    </div>
  );
}

export default Main;
