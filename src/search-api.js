export async function search(query) {
  const response = await fetch('/api/search?q=' + encodeURIComponent(query))
  return response.json()
}
