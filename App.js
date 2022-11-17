const show = document.getElementById("show");
const x = document.getElementById("cross");
const accept = document.getElementById("accept");
const decline = document.getElementById("decline");
const article = document.querySelector("article");
const message = document.querySelector("section");

const showMessage = () => {
  article.classList.add("hover");
  message.classList.add("see");
  document.body.style.overflowY = "hidden";
};

const hideMessage = () => {
  article.classList.remove("hover");
  message.classList.remove("see");
  document.body.style.overflowY = "";
};

show.addEventListener("click", showMessage);
x.addEventListener("click", hideMessage);
accept.addEventListener("click", hideMessage);
decline.addEventListener("click", hideMessage);

// Close modal by pressing key
const closeMessage = (key) => {
  if (key.keyCode == "27") {
    hideMessage();
  }
};

window.addEventListener("keydown", closeMessage);

// remove article by clicking outside of it HOW TO MANAGE TARGET EVENT ONLY ON SECTION!!!!!!!!!!!!!
const removeArticle = (e) => {
  if (e.target.contains(article)) {
    article.classList.remove("hover");
    message.classList.remove("see");
    document.body.style.overflowY = "";
  }
};
message.addEventListener("click", removeArticle);

// toggle  darkMode / lightMode
const body = document.querySelector("body");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");

let flaga = false;
const toggleMode = () => {
  if (!flaga) {
    flaga = !flaga;
    moon.style.display = "none";
    sun.style.display = "block";
    sun.style.color = "white";
    body.classList.add("toggleDark");
    body.style.transition = "0.4s";
    cross.style.color = "white";
    article.style.color = "white";
    article.style.boxShadow = "5px 5px 10px white";
  } else {
    flaga = !flaga;
    sun.style.display = "none";
    moon.style.display = "block";
    body.classList.remove("toggleDark");
    cross.style.color = "black";
    article.style.color = "black";
    article.style.boxShadow = "5px 5px 10px black";
  }
};

moon.addEventListener("click", toggleMode);
sun.addEventListener("click", toggleMode);
