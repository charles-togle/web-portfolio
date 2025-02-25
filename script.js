
let currentSpotlight = 3;
const eventListeners = document.querySelectorAll(".img-eventlistener");
const toRight = document.querySelector("div.to-right")
const toLeft = document.querySelector("div.to-left")


const changeSpotlight = (spotlight) => {
  currentSpotlight += spotlight;
  console.log(currentSpotlight)  
}

toRight.addEventListener("click", changeSpotlight(1))
toLeft.addEventListener("click", changeSpotlight(-1))

const navigation = document.querySelector("aside");
const ShowNavigation = () => {
  navigation.classList.toggle("show");
};

document.addEventListener("click", (e) => {
  const header = document.querySelector("header");
  const aside = document.querySelector("aside");

  if (!header.contains(e.target) && !aside.contains(e.target)) {
    aside.classList.remove("show");
  }
});

const asideLinks = document.querySelectorAll("aside a");

asideLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("show");
  });
});
