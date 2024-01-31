const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
  nav.classList.add("visible");
});

close.addEventListener("click", () => {
  nav.classList.remove("visible");
});

/* Code to view text with animation considering scroll */

function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate");
      observer.unobserve(entry.target);
    }
  });
}

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver(handleIntersection, options);

const targets = document.querySelectorAll(
  ".textH2Skill, .textH2LengSpeak, .textAgi, .textAbout, .titleh1"
);

targets.forEach((target) => {
  observer.observe(target);
});
