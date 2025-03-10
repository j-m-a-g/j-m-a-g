const home = document.getElementById("home");
const experience = document.getElementById("experience");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

function switchSection(currentShowing) {
  // Reset the states of the individual divisions
  home.hidden = true;
  home.style.animation = "";

  experience.hidden = true;
  experience.style.animation = "";

  projects.hidden = true;
  projects.style.animation = "";

  contact.hidden = true;
  contact.style.animation = "";

  
  document.getElementById(currentShowing).hidden = false;
  document.getElementById(currentShowing).style.animation = "revealSections 1s forwards";
}
