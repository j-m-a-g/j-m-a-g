const siteNavigation = document.getElementById("siteNavigation");
const openPanel = document.getElementById("openPanel");
const mainContent = document.getElementById("mainContent");

const home = document.getElementById("Home");
const experience = document.getElementById("Experience");
const contact = document.getElementById("Contact");

function switchSection(currentShowing) {
  // Reset the states of the individual divisions
  home.hidden = true;
  home.style.animation = "";

  experience.hidden = true;
  experience.style.animation = "";

  contact.hidden = true;
  contact.style.animation = "";

  document.getElementById(currentShowing).hidden = false;
  document.getElementById(currentShowing).style.animation = "revealSections 1s forwards";

  document.getElementById("pageTitle").innerHTML = currentShowing + " | maghamez.com";
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
    if (screen.width > 1836) {
      mainContent.style.marginLeft = "210px";
    }
    siteNavigation.hidden = false;
    siteNavigation.style.animation = "toggleMenuAnimation 1s forwards";

    openPanel.hidden = true;
    openPanel.style.animation = "";
  }
}
