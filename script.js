const siteNavigation = document.getElementById("siteNavigation");
const openPanel = document.getElementById("openPanel");
const mainContent = document.getElementById("mainContent");

const home = document.getElementById("Home");
const homeSection = document.getElementById("homeSection");
const experience = document.getElementById("Experience");
const experienceSection = document.getElementById("experienceSection");
const profiles = document.getElementById("Profiles");
const profilesSection = document.getElementById("profilesSection");

function switchSection(currentShowing) {
  // Reset the states of the individual divisions
  if (home.hidden == false) {
    home.hidden = true;
  }
  if (home.style.animation != "") {
    home.style.animation = "";
  }

  if (experience.hidden == false) {
    experience.hidden = true;
  }
  if (experience.style.animation != "") {
    experience.style.animation = "";
  }

  if (profiles.hidden == false) {
    profiles.hidden = true;
  }
  if (profiles.style.animation != "") {
    profiles.style.animation = "";
  }

  homeSection.className = "navigationLinks";
  experienceSection.className = "navigationLinks";
  profilesSection.className = "navigationLinks";
  
  document.getElementById("pageTitle").innerHTML = currentShowing + " | maghamez.com";
  document.getElementById("openPanelTitle").innerHTML = "| " + currentShowing;

  document.getElementById(currentShowing).hidden = false;
  document.getElementById(currentShowing).style.animation = "revealSections 1s forwards";

  switch (currentShowing) {
    case "Home":
      homeSection.className += " currentSection";
      break;
    case "Experience":
      experienceSection.className += " currentSection";
      break;
    case "Profiles":
      profilesSection.className += " currentSection";
      break;
  }

  if (window.innerWidth <= 600) {
    siteNavigation.hidden = true;
    openPanel.hidden = false;
  }
}

function hideMenu(isHidden) {
  if (isHidden) {
    mainContent.style.marginLeft = "10px";
    siteNavigation.hidden = true;
    siteNavigation.style.animation = "";

    openPanel.hidden = false;
    openPanel.style.animation = "toggleMenuAnimation 1s forwards";
  }
  else {
    if (window.innerWidth > 600) {
      mainContent.style.marginLeft = "210px";
    }
    siteNavigation.hidden = false;
    siteNavigation.style.animation = "toggleMenuAnimation 1s forwards";

    openPanel.hidden = true;
    openPanel.style.animation = "";
  }
}
