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
    body: user ? JSON.stringify(user) : "{}",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

async function logout() {
  const response = await fetch("/logout", {
    method: "DELETE",
    credentials: "include"
  });
  if (!response.ok) throw createError(response);
}

export { login, logout };
