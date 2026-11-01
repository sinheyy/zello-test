// 제목을 주소에 쓸 수 있는 문자열로 바꾼다.
export function slugify(text) {
  return text.trim().toLowerCase().replace(/\s+/g, '-')
}
