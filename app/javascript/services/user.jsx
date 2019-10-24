async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  return error;
}

async function login(user) {
  const response = await fetch("/login", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const { name, id, email, rol } = await response.json();
  return { name, email, id, rol };
}

async function logout() {
  const response = await fetch("/logout", {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
}

export { login, logout };
