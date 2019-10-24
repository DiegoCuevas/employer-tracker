async function createError(response) {
  const { errors } = await response.json();
  const error = new Error(errors.message);
  error.status = response.status;
  error.statusText = response.statusText;
  console.log(error);
  return error;
}

async function reportList() {
  const response = await fetch("/api/reports", {
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if (!response.ok) throw createError(response);
  const data = await response.json();
  return data;
}

export { reportList };