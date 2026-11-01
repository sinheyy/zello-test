export function LoginForm() {
  return '<form><input name="email" /><button>로그인</button></form>'
}

// 비밀번호 길이 검사 (리뷰에서 수정 요청을 받아 볼 용도)
export function isValidPassword(password) {
  return password.length > 4
}
