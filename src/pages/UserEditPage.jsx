import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DropdownInput from '../components/molecules/DropdownInput';
import { passwordValidation, idValidation } from '../util/loginValidation';
import getuserInfo from '../api/user';

function UserEditPage() {
  const navigate = useNavigate();
  const [grouplist, setGrouplist] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [signupForm, setSignupForm] = useState({
    id: '',
    password: '',
    name: '',
    pId: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
    passwordCheck: '',
  });
  console.log(grouplist);

  useEffect(() => {
    getuserInfo(setSignupForm, setGrouplist, setSelectedIndex, navigate);
    // getGroupList api를 통해서 그룹 리스트를 받아 온 후에, getuserForm을 통해 user정보도 받아오고
    // 이에 맞게 setSelectedIndex, setSignupForm을 초기화하자
    // async, await문 활용
  }, []);

  useEffect(() => {
    setErrorMessage((prev) => ({
      ...prev,
      email: idValidation(signupForm.id),
    }));
  }, [signupForm.id]);

  useEffect(() => {
    setErrorMessage((prev) => ({
      ...prev,
      password: passwordValidation(signupForm.password),
    }));
  }, [signupForm.password]);

  function passwordCheck(e) {
    if (e.target.value !== signupForm.password) {
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
      signupForm.id !== '' &&
      signupForm.password !== '' &&
      signupForm.name !== '' &&
      signupForm.pId !== '' &&
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
                    value={signupForm.id}
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
                  value={signupForm.name}
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
                  value={signupForm.pId}
                />
                <div className="w-[261px] font-bold text-lg text-left mb-2 text-black">
                  분반 선택
                </div>
                <DropdownInput
                  inputList={grouplist}
                  selectedIndex={selectedIndex}
                  setSelectedIndex={setSelectedIndex}
                />
              </div>
            </div>

            <button
              type="button"
              className={` text-white font-bold w-[261px] py-2 rounded-2xl mt-12 ${testCanSignup() ? 'bg-bjsLightSky' : 'bg-bjsBlue'}`}
              disabled
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
