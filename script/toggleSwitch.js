// Updated JavaScript
document.addEventListener("DOMContentLoaded", function () {
  const studentContent = document.getElementById("students-content");
  const mentorContent = document.getElementById("mentors-content");
  const studentOption = document.querySelector('[data-audience="students"]');
  const mentorOption = document.querySelector('[data-audience="mentors"]');
  const slider = document.querySelector(".toggle-slider");

  function switchToStudents() {
    studentContent.classList.add("active");
    mentorContent.classList.remove("active");
    studentOption.classList.add("active");
    mentorOption.classList.remove("active");
    slider.style.left = "5px";
  }

  function switchToMentors() {
    studentContent.classList.remove("active");
    mentorContent.classList.add("active");
    studentOption.classList.remove("active");
    mentorOption.classList.add("active");
    slider.style.left = "calc(50% - 5px)";
  }

  studentOption.addEventListener("click", switchToStudents);
  mentorOption.addEventListener("click", switchToMentors);
});
