import ServerFileUpload from '../components/organisms/ServerFileUpload';
import ClientFileUpload from '../components/organisms/ClientFileUpload';

function Main() {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
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
            <ClientFileUpload />
          </div>

          <div className="flex flex-col justify-center items-center ml-24 font-bold text-center text-black">
            <div className="mb-2">
              서버파일
              <br />
              (NODE.JS)
            </div>
            <ServerFileUpload />
          </div>
        </div>
      </div>
      <span className="font-bold text-red-500 text-3xl mt-12">
        6.29:18:00 까지 수정 가능합니다
      </span>
      <button
        type="button"
        className="text-white font-bold w-[110px] py-1 rounded-2xl mt-12 bg-bjsBlue"
      >
        저장
      </button>
    </div>
  );
}

export default Main;
