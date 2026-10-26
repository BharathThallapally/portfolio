const typingText = document.getElementById("typingText");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (typingText) {
  const name = "Bharath Kumar";
  if (reducedMotion) {
    typingText.textContent = name;
  } else {
    let index = 0;
    let deleting = false;

    function typeEffect() {
      typingText.textContent = name.substring(0, index);
      if (!deleting && index < name.length) {
        index++;
        window.setTimeout(typeEffect, 95);
      } else if (!deleting) {
        deleting = true;
        window.setTimeout(typeEffect, 1800);
      } else if (index > 0) {
        index--;
        window.setTimeout(typeEffect, 55);
      } else {
        deleting = false;
        window.setTimeout(typeEffect, 500);
      }
    }
    typeEffect();
  }
}

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const open = navMenu.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
    menuToggle.textContent = open ? "×" : "☰";
  });

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// Reveal sections gently as they enter the viewport.
const revealTargets = document.querySelectorAll(
  ".section-heading, .section-intro, .about-grid, .skill-card, .experience-card, .project-card, .achievement-timeline article, .cert-grid article, .education-card, .contact-inner"
);
revealTargets.forEach((element) => element.classList.add("reveal"));

if ("IntersectionObserver" in window && !reducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

// Highlight the navigation item for the section currently being viewed.
const sectionLinks = [...document.querySelectorAll('#navMenu a[href^="#"]')];
const pageSections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      sectionLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        if (active) link.classList.add("active");
        else link.classList.remove("active");
      });
    });
  }, { rootMargin: "-25% 0px -65% 0px" });
  pageSections.forEach((section) => activeObserver.observe(section));
}
