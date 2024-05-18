import React, { useRef, useState } from 'react';
import { AiFillFile } from 'react-icons/ai';

function ClientFileUpload({ setFiles }) {
  const clientFileRef = useRef();
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [file, setFile] = useState();

  const saveFile2 = () => {
    const curFile = clientFileRef.current.files[0];
    if (curFile) {
      // 파일 보내기 성공하면 상태 값 변경
      setIsFileUploaded(true);
      setFile(curFile);
      setFiles({
        staticFile: curFile,
      });
      // 파일 보내기
      setIsFileUploaded(true);
    }
  };

  return (
    <div>
      <div className="bg-white w-[345px] h-[130px] border-solid border-gray-400 border-[1px] rounded-2xl">
        <div className="w-full text-black text-center p-2 border-solid border-gray-400 border-b-[1px] ">
          <span className="font-bold text-lg">업로드 된 파일</span> *.zip, .tar
          파일로 업로드*
        </div>
        <div>
          {isFileUploaded ? (
            <div className="text-color flex justify-between items-center h-[84px]">
              <div className="flex flex-col justify-between items-center ml-3">
                <div>
                  <AiFillFile size="40px" color="black" />
                </div>
                <button
                  className="block bg-bjsBlue text-white font-bold text-md mt-1 w-[64px] rounded-2xl"
                  type="button"
                  onClick={() => {
                    setIsFileUploaded(false);
                    // 파일 삭제 api 요청
                    setFiles((prev) => ({
                      ...prev,
                      staticFile: '',
                    }));
                  }}
                >
                  삭제
                </button>
              </div>
              <div className="flex items-center w-[240px] h-[84px] font-bold text-center overflow-y-auto">
                <span className="text-md text-black">{file.name}</span>
              </div>
            </div>
          ) : (
            <div>
              <label htmlFor="js2" className="w-full text-center">
                <span className="text-6xl text-black leading-[65px]">+</span>
              </label>
              <input
                id="js2"
                className="hidden"
                type="file"
                accept=".zip,.tar"
                ref={clientFileRef}
                onChange={saveFile2}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ClientFileUpload;
