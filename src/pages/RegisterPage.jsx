import Header from '../components/layout/Header';

function RegisterPage() {
  return (
    <div>
      <Header />
      <main className="flex justify-center">
        <div className="mt-2">
          <h1 className="text-7xl text-center text-bjsBlue">Register</h1>
          <form className="flex flex-col justify-center items-center mt-8">
            <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
              아이디(학교 이메일)
            </div>
            <div className="relative">
              <input
                type="email"
                className="w-[261px] h-[36px] mb-2 border-[1px] border-solid border-black"
                placeholder="아이디(이메일)"
                autoComplete="off"
              />
              <button
                type="button"
                className="flex items-center justify-center absolute w-[78px] h-[20px] top-2 right-1 bg-bjsBlue rounded-xl boreder-solid border-bjsDeepBlue border-2"
              >
                <span className="text-white text-xs ">이메일 인증</span>
              </button>
              <div className="text-red-400 font-bold absolute right-[-150px] top-1">
                이메일이 다릅니다.
              </div>
            </div>
            <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
              인증 코드
            </div>
            <div className="relative">
              <input
                type="text"
                className="w-[261px] h-[36px] mb-2 border-[1px] border-solid border-black"
                placeholder="인증 코드"
                autoComplete="off"
              />
              <button
                type="button"
                className="flex items-center justify-center absolute w-[78px] h-[20px] top-2 right-1 bg-bjsBlue rounded-xl boreder-solid border-bjsDeepBlue border-2"
              >
                <span className="text-white text-xs ">확인</span>
              </button>
            </div>
            <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
              이름
            </div>
            <input
              type="text"
              className="w-[261px] h-[36px] mb-2 border-[1px] border-solid border-black"
              placeholder="이름"
              autoComplete="off"
            />
            <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
              비밀번호
            </div>
            <input
              type="password"
              className="w-[261px] h-[36px] border-[1px] border-solid border-black mb-1"
              placeholder="비밀번호"
              autoComplete="off"
            />
            <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
              비밀번호 확인
            </div>
            <input
              type="password"
              className="w-[261px] h-[36px] border-[1px] border-solid border-black mb-4"
              placeholder="비밀번호"
              autoComplete="off"
            />
            <button
              type="button"
              className="bg-bjsBlue text-white font-bold w-[261px] py-2 rounded-xl"
            >
              회원가입 완료
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default RegisterPage;
