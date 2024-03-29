export const getSimilar = arr => {
  return fetch("http://10.1.139.26:9999/similar", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    // mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache",
    credentials: "include",
    // redirect: "follow", // manual, *follow, error
    body: JSON.stringify({ rendered: arr, topK: 10 })
  }).then(response => response.json());
};
