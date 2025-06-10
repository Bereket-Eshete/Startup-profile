document.addEventListener("DOMContentLoaded", function () {
  const visitorCountElement = document.getElementById("visitor-count");

  function updateVisitorCount() {
    let count = localStorage.getItem("studySphereVisitorCount");
    if (count === null) {
      count = 0;
    } else {
      count = parseInt(count) + 1;
    }
    localStorage.setItem("studySphereVisitorCount", count);
    visitorCountElement.textContent = count;
    visitorCountElement.style.transform = "scale(1.2)";
    setTimeout(() => {
      visitorCountElement.style.transform = "scale(1)";
    }, 300);
  }
  updateVisitorCount();
});
