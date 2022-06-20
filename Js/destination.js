//  page destination

const mars = document.querySelector("[data-mars]");
const moon = document.querySelector("[data-moon]");
const europa = document.querySelector("[data-euripa]");
const titan = document.querySelector("[data-titan]");

const setliteName = document.getElementById("setliteName");
const discription = document.getElementById("discription");
const img = document.getElementById("img");
const distance = document.getElementById("distance");
const timeTake = document.getElementById("timeTake");

moon.addEventListener("click", () => {
   img.innerHTML = `<img src="assets/destination/image-moon.webp" alt="moon" class="main-img">`;
   setliteName.innerHTML = "MOON";
   discription.innerHTML = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`;
   distance.innerHTML = `384,400 KM`;
   timeTake.innerHTML = `3 DAYS`;
   moon.classList.add("active");
   mars.classList.remove("active");
   europa.classList.remove("active");
   titan.classList.remove("active");
});

mars.addEventListener("click", () => {
   img.innerHTML = `<img src="assets/destination/image-mars.webp" alt="moon" class="main-img"></img>`;
   setliteName.innerHTML = "MARS";
   discription.innerHTML = `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!`;
   distance.innerHTML = `225 MIL.KM`;
   timeTake.innerHTML = `9 MONTHS`;
   mars.classList.add("active");
   moon.classList.remove("active");
   europa.classList.remove("active");
   titan.classList.remove("active");
});

europa.addEventListener("click", () => {
   img.innerHTML = `<img src="assets/destination/image-europa.webp" alt="moon" class="main-img">`;
   setliteName.innerHTML = "EUROPA";
   discription.innerHTML = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`;
   distance.innerHTML = `628 MIL.KM`;
   timeTake.innerHTML = `3 YEARS`;
   europa.classList.add("active");
   mars.classList.remove("active");
   moon.classList.remove("active");
   titan.classList.remove("active");
});

titan.addEventListener("click", () => {
   img.innerHTML = `<img src="assets/destination/image-titan.webp" alt="moon" class="main-img">`;
   setliteName.innerHTML = "TITAN";
   discription.innerHTML = `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`;
   distance.innerHTML = `1.6 BIL.KM`;
   timeTake.innerHTML = `7 YEARS`;
   titan.classList.add("active");
   europa.classList.remove("active");
   mars.classList.remove("active");
   moon.classList.remove("active");
});
