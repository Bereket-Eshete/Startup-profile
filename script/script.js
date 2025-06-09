const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = menuToggle.querySelector("i");
const navLinks = document.querySelectorAll(".mobile-nav a");

function toggleMobileMenu() {
  mobileMenu.classList.toggle("active");

  // Toggle between hamburger and close icon
  if (mobileMenu.classList.contains("active")) {
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-times");
  } else {
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  }
}

// Toggle menu when hamburger/close icon is clicked
menuToggle.addEventListener("click", toggleMobileMenu);

// Close menu when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    menuIcon.classList.remove("fa-times");
    menuIcon.classList.add("fa-bars");
  });
});

// Close menu when clicking outside
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

document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");
  let currentlyActive = null;

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      // If this item is already active, close it
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        currentlyActive = null;
        return;
      }

      // Close any currently open item
      if (currentlyActive) {
        currentlyActive.classList.remove("active");
      }

      // Open this item
      item.classList.add("active");
      currentlyActive = item;
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const brandBar = document.querySelector(".brand-bar");
  const slogans = document.querySelectorAll(".slogan-item");

  // Add active class to random slogan every 2 seconds
  setInterval(() => {
    slogans.forEach((slogan) => slogan.classList.remove("active"));
    const randomIndex = Math.floor(Math.random() * slogans.length);
    slogans[randomIndex].classList.add("active");
  }, 2000);

  // Mobile infinite scroll effect
  if (window.innerWidth < 768) {
    slogans.forEach((slogan) => {
      const clone = slogan.cloneNode(true);
      brandBar.appendChild(clone);
    });

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    function animateScroll() {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= brandBar.scrollWidth / 2) {
        scrollPosition = 0;
      }
      brandBar.scrollLeft = scrollPosition;
      requestAnimationFrame(animateScroll);
    }

    setTimeout(animateScroll, 1000);
  }
});
