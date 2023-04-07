export default async function (url: string, data = undefined) {
  return await fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (response.status > 399 || response.status < 200) {
      throw new Error();
    }
    return response.json();
  });
}
