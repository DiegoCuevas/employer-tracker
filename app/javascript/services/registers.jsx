const API_REGISTER = "/api/users";

async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  console.log(error);
  return error;
}

async function createRegister(id, values, token) {
  console.log(token)
  const response = await fetch(`${API_REGISTER}/${id}/registers`, {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(values),
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${token}`
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

async function reports(id) {
  const response = await fetch(`${API_REGISTER}/${id}/registers`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

export { reports, createRegister };
