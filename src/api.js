export const api_postClass = level => {
  return fetch('http://localhost:3001/classes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ level })
  })
    .then(response => response.json())
    .then(json => json);
};

export const api_listClass = () => {
  return fetch('http://localhost:3001/classes', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(json => json);
};
