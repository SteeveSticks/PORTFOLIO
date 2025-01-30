function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function handleRedirect() {
  window.location.href = "./#contacts";
}

function github() {
  window.location.href = "https://github.com/";
}

function facebookLink() {
  window.location.href = "https://www.facebook.com";
}

function instagramLink() {
  window.location.href = "https://www.instagram.com";
}

function twitterLink() {
  window.location.href = "https://www.twitter.com";
}

function LinkedInLink() {
  window.location.href = "https://www.linkedin.com";
}

export {
  toggleMenu,
  handleRedirect,
  github,
  facebookLink,
  instagramLink,
  twitterLink,
  LinkedInLink,
};
