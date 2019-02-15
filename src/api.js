export const api_postClass = level => {
  return fetch('http://localhost:3001/classes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ level, id: 'a' + new Date().getTime() })
  })
    .then(response => response.json())
    .then(json => json);
};

export const api_listClass = () => {
  return fetch('http://localhost:3001/classes?_embed=students', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(json => json);
};

export const api_getClass = classId => {
  return fetch(`http://localhost:3001/classes/${classId}?_embed=students`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
    .then(response => response.json())
    .then(json => json);
};

export const api_addStudent = data => {
  const { classId, ...student } = data;

  return fetch(`http://localhost:3001/classes/${classId}/students`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...student })
  })
    .then(response => response.json())
    .then(json => json);
};
