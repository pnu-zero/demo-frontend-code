import { useEffect, useState } from 'react';
import DropdownInput from '../components/molecules/DropdownInput';
import { passwordValidation, idValidation } from '../util/loginValidation';

function UserEditPage() {
  const inputList = ['인웹기-001분반', '인웹기-002분반', '인웹기-003분반'];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [singupForm, setSignupForm] = useState({
    id: '',
    password: '',
    name: '',
    pId: '',
    classNumber: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });

  useEffect(() => {
    setErrorMessage((prev) => ({
      ...prev,
      email: idValidation(singupForm.id),
    }));
  }, [singupForm.id]);

  useEffect(() => {
    setErrorMessage((prev) => ({
      ...prev,
      password: passwordValidation(singupForm.password),
    }));
  }, [singupForm.password]);

  function passwordCheck(e) {
    if (e.target.value !== singupForm.password) {
      setErrorMessage((prev) => ({
        ...prev,
        passwordCheck: '비밀번호가 다릅니다.',
      }));
    } else {
      setErrorMessage((prev) => ({
        ...prev,
        passwordCheck: '',
      }));
    }
  }

  useEffect(() => {
    setSignupForm((prev) => ({
      ...prev,
      classNumber: inputList[selectedIndex],
    }));
  }, [selectedIndex]);

  const handleChangeForm = (e, type) => {
    if (type === 'id') {
      setSignupForm((prev) => ({
        ...prev,
        id: e.target.value,
      }));
      return;
    }
    if (type === 'password') {
      setSignupForm((prev) => ({
        ...prev,
        password: e.target.value,
      }));
      return;
    }
    if (type === 'name') {
      setSignupForm((prev) => ({
        ...prev,
        name: e.target.value,
      }));
      return;
    }
    if (type === 'pId') {
      setSignupForm((prev) => ({
        ...prev,
        pId: e.target.value,
      }));
    }
  };

  function testCanSignup() {
    if (
      singupForm.id !== '' &&
      singupForm.password !== '' &&
      singupForm.name !== '' &&
      singupForm.pId !== '' &&
      errorMessage.email === '' &&
      errorMessage.password === '' &&
      errorMessage.passwordCheck === ''
    )
      return false;
    return true;
  }

  return (
    <div>
      <main className="flex justify-center">
        <div className="mt-28">
          <h1 className="text-7xl text-center text-bjsBlue font-freesentation">
            내정보
          </h1>
          <form className="flex flex-col justify-center items-center">
            <div className="flex min-w-[650px] mx-auto justify-between mt-14">
              <div>
                <div className="relative">
                  <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
                    아이디(학교 이메일)
                  </div>
                  <input
                    type="email"
                    className="w-[261px] h-[36px] mb-4 border-[1px] border-solid font-bold border-black px-2 rounded-xl"
                    placeholder="아이디(이메일)"
                    onChange={(e) => {
                      handleChangeForm(e, 'id');
                    }}
                  />
                  <div className="w-[261px] absolute bottom-0 text-center text-md text-red-500">
                    {errorMessage.email}
                  </div>
                </div>
                <div className="relative">
                  <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
                    비밀번호
                  </div>
                  <input
                    type="password"
                    className="w-[261px] h-[36px] border-[1px] border-solid border-black mb-4 px-2 rounded-xl"
                    placeholder="비밀번호"
                    onChange={(e) => {
                      handleChangeForm(e, 'password');
                    }}
                  />
                  <div className="w-[261px] absolute bottom-0 text-center text-md text-red-500">
                    {errorMessage.password}
                  </div>
                </div>
                <div className="relative">
                  <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
                    비밀번호 확인
                  </div>
                  <input
                    type="password"
                    className="w-[261px] h-[36px] border-[1px] border-solid border-black mb-4 px-2 rounded-xl"
                    placeholder="비밀번호 확인"
                    onChange={(e) => {
                      passwordCheck(e);
                    }}
                  />
                  <div className="w-[261px] absolute bottom-0 text-center text-md text-red-500">
                    {errorMessage.passwordCheck}
                  </div>
                </div>
              </div>

              <div>
                <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
                  이름
                </div>
                <input
                  type="text"
                  className="w-[261px] h-[36px] mb-4 border-[1px] border-solid border-black px-2 rounded-xl"
                  placeholder="이름"
                  onChange={(e) => {
                    handleChangeForm(e, 'name');
                  }}
                />
                <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
                  학번
                </div>
                <input
                  type="text"
                  className="w-[261px] h-[36px] mb-4 border-[1px] border-solid border-black px-2 rounded-xl"
                  placeholder="학번"
                  onChange={(e) => {
                    handleChangeForm(e, 'pId');
                  }}
                />
                <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
                  분반 선택
                </div>
                <DropdownInput
                  inputList={inputList}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              </div>
            </div>

            <button
              type="button"
              className={` text-white font-bold w-[261px] py-2 rounded-2xl mt-12 ${testCanSignup() ? 'bg-bjsLightSky' : 'bg-bjsBlue'}`}
              disabled={testCanSignup()}
            >
              내 정보 저장
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default UserEditPage;
