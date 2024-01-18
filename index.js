// Add your code here

// document.addEventListener("DOMContentLoaded", initialise);

function initialise() {}

function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((resp) => resp.json())
    .then((object) => {
      let { id } = object;
      let div = document.createElement("div");
      let p = document.createElement("p");
      p.innerHTML = id;
      div.appendChild(p);

      document.body.appendChild(div);
    })
    .catch((error) => {
      let p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}
