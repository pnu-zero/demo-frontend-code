export function idValidation(id) {
  const idRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const idTest = idRegex.test(id);

  if (!idTest) {
    return '아이디는 이메일 형식입니다';
  }
  return '';
}

export function passwordValidation(password) {
  if (password.length < 7 || password.length > 20) {
    return '비밀번호를 8자리 ~ 20자리 이내로 입력해주세요.';
  }
  return '';
}
