import story from "./alice.md";

document.getElementById("story").insertAdjacentHTML(
  "afterBegin",
  story
    .split(/(?=<h3[^>]*>)/g)
    .map((f, i) => (i ? `<section class="container">${f}</section>` : f))
    .join("")
);
