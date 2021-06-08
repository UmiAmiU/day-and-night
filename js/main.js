const header = document.querySelector(".head");
const regBlock = document.querySelector(".register");
const helloBlock = document.querySelector(".hello");
const enter = document.querySelector(".enter");
const signOut = document.querySelector(".signout");

function register() {
  const input = document.querySelector(".username");

  if (input.value === "") {
    return;
  }
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: input.value,
      theme: "light",
    })
  );
  input.value = "";
  setup();
}

function setup() {
  const lightBut = document.querySelector(".light");
  const darkBut = document.querySelector(".dark");

  lightBut.addEventListener("click", () => {
    lightBut.disabled = true;
    darkBut.disabled = false;
    header.classList.replace("head-dark", "head-light");
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: user.username,
        theme: "light",
      })
    );
  });
  darkBut.addEventListener("click", () => {
    const user = JSON.parse(localStorage.getItem("user"));
    darkBut.disabled = true;
    lightBut.disabled = false;
    header.classList.replace("head-light", "head-dark");
    localStorage.setItem(
      "user",
      JSON.stringify({
        username: user.username,
        theme: "dark",
      })
    );
  });

  if (!localStorage.getItem("user")) {
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));

  regBlock.classList.add("hidden");
  helloBlock.classList.remove("hidden");
  document.querySelector(".hello-text").innerHTML = `Hello, ${user.username}`;
  if (user.theme === "dark") {
    darkBut.disabled = true;
    lightBut.disabled = false;
    header.classList.replace("head-light", "head-dark");
  }
}

function signout() {
  localStorage.removeItem("user");
  header.classList.replace("head-dark", "head-light");
  helloBlock.classList.add("hidden");
  regBlock.classList.remove("hidden");
}

enter.addEventListener("click", () => register());
signOut.addEventListener("click", () => signout());

setup();
