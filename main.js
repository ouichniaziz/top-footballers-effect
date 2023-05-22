import gsap from "gsap";
const works = document.querySelectorAll(".work");
const section = document.querySelector("section");

let lastOrder = 0;
let direction = true;

section.addEventListener("mouseleave", () => {
  lastOrder = 0;
});

works.forEach((work) => {
  const link = work.querySelector(".link");
  const overlay = work.querySelector(".overlay");
  const workTimeline = gsap.timeline();

  work.addEventListener("mouseenter", () => {
    workTimeline.set(overlay, {
      transformOrigin: direction ? "0px 0px" : "0px 100%",
      duration: 0.001,
    });
    workTimeline
      .set(overlay, { scaleY: 0 })
      .set(link, { x: 0 })
      .to(link, { x: 12, duration: 0.25, ease: "power1.out" })
      .to(overlay, { scaleY: 1, duration: 0.5, ease: "power1.out" });
  });

  work.addEventListener("mouseleave", () => {
    workTimeline.to(overlay, {
      transformOrigin: direction ? "0px 100%" : "0px 0px",
      duration: 0.001,
    });

    workTimeline.to(link, { x: 0, duration: 0.25, ease: "power1.out" });
    workTimeline.to(overlay, { scaleY: 0, duration: 0.5, ease: "power1.out" });
  });
});
