const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = menuToggle.querySelector("i");
const navLinks = document.querySelectorAll(".mobile-nav a");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");
  if (mobileMenu.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
}

menuToggle.addEventListener("click", toggleMobileMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  });
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".header") &&
    !event.target.closest(".mobile-menu-overlay")
  ) {
    mobileMenu.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
});
//faq
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");
  let currentlyActive = null;

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", function () {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        currentlyActive = null;
        return;
      }
      if (currentlyActive) {
        currentlyActive.classList.remove("active");
      }
      item.classList.add("active");
      currentlyActive = item;
    });
  });
});
//backtoTop
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("visible");
    } else {
      backToTopButton.classList.remove("visible");
    }
  });

  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
