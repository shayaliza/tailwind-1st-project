const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const section1 = document.getElementById("section1");
const section2 = document.getElementById("section2");

button1.addEventListener("click", () => {
  section1.classList.add("show");
  section1.classList.remove("hidden");

  section2.classList.add("hidden");
  section2.classList.remove("show");
});

button2.addEventListener("click", () => {
  section1.classList.add("hidden");
  section1.classList.remove("show");

  section2.classList.add("show");
  section2.classList.remove("hidden");
});
// button1.addEventListener("click", () => {
//   section1.classList.add("show");
//   section1.classList.remove("none");
// });
