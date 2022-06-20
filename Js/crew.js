const crew1 = document.querySelector("[data-crew1]");
const crew2 = document.querySelector("[data-crew2]");
const crew3 = document.querySelector("[data-crew3]");
const crew4 = document.querySelector("[data-crew4]");
const crewTitle = document.getElementById("crew-title");
const crewName = document.getElementById("crew-name");
const crewDiscription = document.getElementById("crew-discription");
const crewImg = document.getElementById("crewImg");

crew1.addEventListener("click", () => {
   crewTitle.innerHTML = "FLIGHT ENGINEER";
   crewName.innerHTML = "ANOUSHEH ANSARI";
   crewDiscription.innerHTML =
   "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
      crewImg.innerHTML = `<img src="assets/crew/image-anousheh-ansari.webp" alt="moon" class="main-img crew-img">`;
   crew1.classList.add('crew-active');
   crew2.classList.remove('crew-active');
   crew3.classList.remove('crew-active');
   crew4.classList.remove('crew-active');
});
crew2.addEventListener("click", () => {
   crewTitle.innerHTML = "COMMANDER";
   crewName.innerHTML = "DOUGLAS HURLEY";
   crewDiscription.innerHTML =
      "souglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
      crewImg.innerHTML = ` <img src="assets/crew/image-douglas-hurley.webp" alt="moon" class="main-img crew-img">`;
      crew2.classList.add('crew-active');
      crew1.classList.remove('crew-active');
      crew3.classList.remove('crew-active');
      crew4.classList.remove('crew-active');
});

crew3.addEventListener("click", () => {
   crewTitle.innerHTML = "MISSION SPECIALIST";
   crewName.innerHTML = "MARK SHUTTLEWORTH";
   crewDiscription.innerHTML =
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
      crewImg.innerHTML = `<img src="assets/crew/image-mark-shuttleworth.webp" alt="moon" class="main-img crew-img">`;
   crew2.classList.remove('crew-active');
   crew1.classList.remove('crew-active');
   crew3.classList.add('crew-active');
   crew4.classList.remove('crew-active');
});

crew4.addEventListener("click", () => {
   crewTitle.innerHTML = "PILOT";
   crewName.innerHTML = "VICTOR GLOVER";
   crewDiscription.innerHTML =
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer";
      crewImg.innerHTML = ` <img src="assets/crew/image-victor-glover.webp" alt="moon" class="main-img crew-img">`;
      crew4.classList.add('crew-active');
      crew1.classList.remove('crew-active');
      crew2.classList.remove('crew-active');
   crew3.classList.remove('crew-active');
});
