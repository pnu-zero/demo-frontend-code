export function idValidation(id) {
  const idRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const idTest = idRegex.test(id);
  if (id.length === 0) return '';
  if (!idTest) {
    return '아이디는 이메일 형식입니다';
  }
  return '';
}

export function passwordValidation(password) {
  if ((password.length > 0 && password.length <= 7) || password.length > 20) {
    return '비밀번호는 8자~20자 입니다.';
  }
  return '';
}
