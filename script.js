const experience = document.getElementById("Experience");
const experienceSection = document.getElementById("experienceSection");
const home = document.getElementById("Home");
const homeSection = document.getElementById("homeSection");
const mainContent = document.getElementById("mainContent");
const openPanel = document.getElementById("openPanel");
const openPanelTitle = document.getElementById("openPanelTitle");
const profiles = document.getElementById("Profiles");
const profilesSection = document.getElementById("profilesSection");
const siteNavigation = document.getElementById("siteNavigation");

function switchSection(currentShowing) {
  // Reset the states of the individual divisions
  home.hidden = true;
  if (home.style.animation !== "") {
    home.style.animation = "";
  }

  experience.hidden = true;
  if (experience.style.animation !== "") {
    experience.style.animation = "";
  }

  profiles.hidden = true;
  if (profiles.style.animation !== "") {
    profiles.style.animation = "";
  }

  homeSection.className = "navigationLinks";
  experienceSection.className = "navigationLinks";
  profilesSection.className = "navigationLinks";

  document.title = `${currentShowing} | maghamez.com`;
  openPanelTitle.innerHTML = `| ${currentShowing}`;

  document.getElementById(currentShowing).hidden = false;
  document.getElementById(currentShowing).style.animation =
    "revealSections 1s forwards";

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
  siteNavigation.hidden = isHidden;
  openPanel.hidden = !isHidden;

  if (isHidden) {
    mainContent.style.marginLeft = "10px";
    siteNavigation.style.animation = "";
    openPanel.style.animation = "toggleMenuAnimation 1s forwards";
  } else {
    if (window.innerWidth > 600) {
      mainContent.style.marginLeft = "210px";
    }

    siteNavigation.style.animation = "toggleMenuAnimation 1s forwards";
    openPanel.style.animation = "";
  }
}
