const toggle = document.getElementById("theme-toggle");
const card = document.querySelectorAll(".card");
const miniCard = document.querySelectorAll(".mini");
const paragraph = document.getElementsByTagName("p");
const head4 = document.getElementsByTagName("h4");
const head3 = document.getElementsByTagName("h3");
const bodyElement = document.body;

// Load the saved theme from local Storage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  setTheme(savedTheme);
  toggle.checked = savedTheme === "light";
}

toggle.addEventListener("change", () => {
  setTheme(toggle.checked);
});

function setTheme(pick) {
  if (pick) {
    bodyElement.className = "light";
    card.forEach((e) => {
      e.classList.add("light");
      e.children[2].className = "light";
      e.children[0].children[1].className = "light";
    });
    miniCard.forEach((e) => {
      e.classList.add("light");
      e.children[0].children[0].style.color = "hsl(228, 12%, 44%)";
    });
    localStorage.setItem("theme", "light");
  } else {
    bodyElement.classList = " ";
    card.forEach((e) => {
      e.classList.remove("light");
      e.children[2].className = " ";
      e.children[0].children[1].className = " ";
    });
    miniCard.forEach((e) => {
      e.classList.remove("light");
      e.children[0].children[0].style.color = "hsl(228, 34%, 66%)";
    });
    localStorage.setItem("theme", "dark");
  }
}
