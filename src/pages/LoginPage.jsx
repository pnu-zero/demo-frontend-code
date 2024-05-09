import { useEffect, useState } from 'react';
import { LuEye, LuEyeOff } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import login from '../api/login';
import { idValidation, passwordValidation } from '../util/loginValidation';

function LoginPage() {
  const navigate = useNavigate();

  const [userform, setUserform] = useState({ id: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const { id, password } = userform;

    let tempErrorMessage = idValidation(id);
    tempErrorMessage =
      tempErrorMessage === '' ? passwordValidation(password) : tempErrorMessage;
    // ID 유효성 검사
    setErrorMessage(tempErrorMessage);
  }, [userform.id, userform.password]);

  const handleChangeForm = (e, type) => {
    if (type === 'password')
      setUserform((prev) => ({
        ...prev,
        password: e.target.value,
      }));
    else if (type === 'id')
      setUserform((prev) => ({
        ...prev,
        id: e.target.value,
      }));
  };

  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const handleClickPasswordVisibility = () => {
    setPasswordVisibility((prev) => !prev);
  };
  return (
    <div>
      <Header />
      <main className="flex justify-center">
        <div className="mt-36">
          <h1 className="text-7xl text-center text-bjsBlue font-freesentation">
            로그인
          </h1>
          <form className="flex flex-col justify-center items-center mt-12">
            <input
              type="email"
              className="w-[261px] h-[36px] mb-2 border-[1px] border-solid border-black px-2 rounded-xl"
              placeholder="아이디(이메일)"
              onChange={(e) => handleChangeForm(e, 'id')}
              autoComplete="off"
            />
            <div className="relative">
              <input
                type={`${passwordVisibility ? 'text' : 'password'}`}
                className="w-[261px] h-[36px] border-[1px] border-solid border-black mb-1 px-2 rounded-xl"
                placeholder="비밀번호"
                onChange={(e) => handleChangeForm(e, 'password')}
                autoComplete="off"
              />
              {passwordVisibility ? (
                <button
                  className="absolute right-4 top-2"
                  type="button"
                  aria-label="비밀번호 보기"
                  onClick={handleClickPasswordVisibility}
                >
                  <LuEye size="1.3rem" color="#BCBCBC" />
                </button>
              ) : (
                <button
                  className="absolute right-4 top-2"
                  type="button"
                  aria-label="비밀번호 보이지 않기"
                  onClick={handleClickPasswordVisibility}
                >
                  <LuEyeOff size="1.3rem" color="#BCBCBC" />
                </button>
              )}
            </div>
            <div className="w-[261px] h-[50px] mb-1 text-center flex items-center justify-center">
              <span className="font-bold text-hpRed text-md text-red-400">
                {errorMessage}
              </span>
            </div>
            <button
              type="button"
              className={` text-white font-bold w-[261px] py-2 rounded-2xl mb-2 ${errorMessage === '' ? 'bg-bjsBlue' : 'bg-[#A4DEFF]'}`}
              onClick={() => {
                login(userform, setErrorMessage, navigate);
              }}
              disabled={errorMessage !== ''}
            >
              로그인
            </button>
            <button
              type="button"
              className="bg-bjsBlue text-white font-bold w-[261px] py-2 rounded-2xl"
              onClick={() => {
                navigate('/signup');
              }}
            >
              회원가입
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
