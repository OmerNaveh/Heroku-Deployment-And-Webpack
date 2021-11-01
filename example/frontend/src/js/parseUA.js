export default function parseUA(type) {
  return fetch(`/ua/${type}`)
    .then((response) => response.json())
    .then((json) => json.message);
}
