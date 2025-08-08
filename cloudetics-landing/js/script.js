document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(".fade-heading");
  let index = 0;

  function showHeading(i) {
    headings.forEach((h, idx) => {
      h.style.opacity = idx === i ? "1" : "0";
      h.style.transform = idx === i ? "translateY(0)" : "translateY(10px)";
    });
  }

  setInterval(() => {
    index = (index + 1) % headings.length;
    showHeading(index);
  }, 3000);

  showHeading(index);
});

const ctaBtn = document.querySelector(".cta-button");
const notifySection = document.getElementById("mc_embed_signup");

if (ctaBtn && notifySection) {
  ctaBtn.addEventListener("click", () => {
    notifySection.scrollIntoView({ behavior: "smooth" });
  });
}
