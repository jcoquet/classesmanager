export const api_postClass = level => {
  fetch('http://localhost:3001/classes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ level })
  });
};
