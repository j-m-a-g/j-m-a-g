const siteNavigation = document.getElementById("siteNavigation");
const openPanel = document.getElementById("openPanel");
const mainContent = document.getElementById("mainContent");

const home = document.getElementById("Home");
const experience = document.getElementById("Experience");
const profiles = document.getElementById("Profiles");

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
  
  document.getElementById("pageTitle").innerHTML = currentShowing + " | maghamez.com";
  document.getElementById("openPanelTitle").innerHTML = "| " + currentShowing;
  document.getElementById(currentShowing).hidden = false;
  document.getElementById(currentShowing).style.animation = "revealSections 1s forwards";

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
