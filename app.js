const toggle = document.getElementById("theme-toggle");
const card = document.querySelectorAll(".card");
const miniCard = document.querySelectorAll(".mini");
const paragraph = document.getElementsByTagName("p");
const head4 = document.getElementsByTagName("h4");
const head3 = document.getElementsByTagName("h3");
const bodyElement = document.body;

toggle.addEventListener("change", () => {
  if (toggle.checked) {
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
  }
});
// working on toggle to face the correct side during
// it switch of color and fix the rest of the theme
