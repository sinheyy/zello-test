// 값을 최소·최대 사이로 맞춘다.
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}
