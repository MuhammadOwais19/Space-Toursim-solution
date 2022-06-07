const tech1 = document.querySelector("[data-tech1]");
const tech2 = document.querySelector("[data-tech2]");
const tech3 = document.querySelector("[data-tech3]");
const techTitel = document.getElementById("tech-title");
const techName = document.getElementById("tech-name");
const techDiscription = document.getElementById("tech-discription");
const techImg = document.getElementById("tech-img");

tech1.addEventListener("click", () => {
    techTitel.innerHTML = "THE TERMINOLOGY...";
   techName.innerHTML = "LAUNCH VEHICLE";
   techDiscription.innerHTML =
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
   techImg.innerHTML = `<img src="assets/technology/image-launch-vehicle-portrait.jpg" class="tech-img" />`;
   tech1.classList.add("tech-active");
   tech2.classList.remove("tech-active");
   tech3.classList.remove("tech-active");
});
tech2.addEventListener("click", () => {
   techTitel.innerHTML = "THE TERMINOLOGY...";
   techName.innerHTML = "SPACEPORT";
   techDiscription.innerHTML =
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
   techImg.innerHTML = `<img src="assets/technology/image-spaceport-portrait.jpg" class="tech-img" />`;
     tech1.classList.remove("tech-active");
     tech2.classList.add("tech-active");
     tech3.classList.remove("tech-active");
});

tech3.addEventListener("click", () => {
   techTitel.innerHTML = "THE TERMINOLOGY...";
   techName.innerHTML = "SPACE CAPSULE";
   techDiscription.innerHTML =
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
   techImg.innerHTML = `<img src="assets/technology/image-space-capsule-portrait.jpg" class="tech-img" />`;
   tech1.classList.remove("tech-active");
   tech2.classList.remove("tech-active");
   tech3.classList.add("tech-active");
});

