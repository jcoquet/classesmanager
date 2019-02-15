export const api_postClass = data => {
  return fetch('http://localhost:3001/classes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...data, id: 'a' + new Date().getTime() })
  })
    .then(response => response.json())
    .then(json => json);
};

export const api_updateClass = data => {
  return fetch(`http://localhost:3001/classes/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
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

export const api_updateStudent = data => {
  const { id, ...student } = data;

  return fetch(`http://localhost:3001/students/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...student })
  })
    .then(response => response.json())
    .then(json => json);
};
