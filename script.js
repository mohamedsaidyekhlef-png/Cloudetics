document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".fade-cycle h2");
  let index = 0;

  function showNext() {
    headings.forEach(h => h.classList.remove("active"));
    headings[index].classList.add("active");
    index = (index + 1) % headings.length;
  }

  showNext();
  setInterval(showNext, 4000);
});
