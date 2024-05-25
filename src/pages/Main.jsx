import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import ServerFileUpload from '../components/organisms/ServerFileUpload';
import ClientFileUpload from '../components/organisms/ClientFileUpload';
import getMyProject, {
  handleCheckDuplicatedUrl,
  handleModifyProject,
  handleSaveProject,
} from '../api/project';
import { getMyGroupConfig } from '../api/group';

function Main() {
  const notify = () =>
    toast.info('제출 마감 되었습니다', {
      theme: 'colored',
    });

  const navigate = useNavigate();

  const [canSave, setCanSave] = useState(true);
  const [projectForm, setProjectForm] = useState({
    title: '',
    desc: '',
    url: '',
  });
  const [files, setFiles] = useState({
    staticFile: null,
    staticFileName: null,
    dynamicFile: null,
    dynamicFileName: null,
  });
  const [isFirst, setIsFirst] = useState(true);
  const [isDuplicatedUrl, setIsDuplicatedUrl] = useState(true);

  useEffect(() => {
    getMyGroupConfig(navigate, setCanSave);
    getMyProject(setProjectForm, setFiles, setIsFirst);
  }, []);

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
                onChange={(e) => {
                  setProjectForm((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                }}
                value={projectForm.title}
              />
            </div>

            <div
              className={`flex justify-center items-center ${isFirst ? 'w-[450px]' : 'w-[342px]'}`}
            >
              <div className="mr-3 leading-9 text-black font-bold text-lg">
                URL
              </div>
              <input
                type="text"
                className="w-[200px] h-[36px] border-[1.1px] border-solid border-black px-2 rounded-xl"
                placeholder="url"
                onChange={(e) => {
                  console.log(e.target.value);
                  setProjectForm((prev) => ({ ...prev, url: e.target.value }));
                }}
                value={projectForm.url}
                disabled={!isFirst || !isDuplicatedUrl}
              />
              <input
                type="text"
                className="w-[90px] h-[36px] px-1 rounded-xl font-bold text-black"
                value=".pnu.app"
                disabled
              />
              {isFirst && (
                <button
                  type="button"
                  className={`text-white font-bold w-[110px] py-1 rounded-2xl ${isDuplicatedUrl ? 'bg-bjsBlue' : 'bg-bjsLightSky'}`}
                  disabled={!isDuplicatedUrl}
                  onClick={() => {
                    handleCheckDuplicatedUrl(
                      projectForm.url,
                      setIsDuplicatedUrl,
                    );
                  }}
                >
                  중복 체크
                </button>
              )}
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
              onChange={(e) => {
                setProjectForm((prev) => ({ ...prev, desc: e.target.value }));
              }}
              value={projectForm.desc}
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
            <ClientFileUpload files={files} setFiles={setFiles} />
          </div>

          <div className="flex flex-col justify-center items-center ml-24 font-bold text-center text-black">
            <div className="mb-2">
              서버파일
              <br />
              (NODE.JS)
            </div>
            <ServerFileUpload files={files} setFiles={setFiles} />
          </div>
        </div>
      </div>
      <span className="font-bold text-red-500 text-3xl mt-12">
        6.29:18:00 까지 수정 가능합니다
      </span>
      {isFirst === true ? (
        <button
          type="button"
          className="text-white font-bold w-[110px] py-1 rounded-2xl mt-12 bg-bjsBlue"
          disabled={!canSave}
          onClick={() => {
            const { title, url, desc } = projectForm;
            console.log(projectForm);
            if (isDuplicatedUrl === true) {
              alert('Sub Domain 중복체크를 해주세요');
              return;
            }
            if (canSave === false) {
              alert('마감시간이 지났습니다.');
              notify();
              return;
            }
            if (url === '') {
              alert('url은 빈칸일 수 없습니다.');
              return;
            }
            if (title === '' || desc === '') {
              alert('제목과 설명은 빈칸일 수 없습니다.');
              return;
            }
            console.log(files.staticFile);
            if (files.staticFile === null) {
              alert('프론트 파일을 업로드해주세요.');
              return;
            }
            const projectFormToServer = {
              title,
              desc,
              sub_domain: url,
            };
            console.log(projectFormToServer);
            const formdata = new FormData();
            formdata.append(
              'projectDto',
              new Blob([JSON.stringify(projectFormToServer)], {
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
      ) : (
        <button
          type="button"
          className="text-white font-bold w-[110px] py-1 rounded-2xl mt-12 bg-bjsBlue"
          disabled={!canSave}
          onClick={() => {
            const { title, desc } = projectForm;
            console.log(projectForm);
            if (canSave === false) {
              alert('마감시간이 지났습니다.');
              notify();
              return;
            }
            if (title === '' || desc === '') {
              alert('제목과 설명은 빈칸일 수 없습니다.');
              return;
            }
            const projectFormToServer = {
              title,
              desc,
            };
            console.log(projectFormToServer);
            const formdata = new FormData();
            formdata.append(
              'projectDto',
              new Blob([JSON.stringify(projectFormToServer)], {
                type: 'application/json',
              }),
            );
            formdata.append('staticFile', files.staticFile);
            formdata.append('dynamicFile', files.dynamicFile);
            handleModifyProject(formdata);
          }}
        >
          수정
        </button>
      )}
    </div>
  );
}

export default Main;
