const wrapper = document.getElementById("wrapper");
const prevBtns = document.querySelectorAll(".prev")
const nextBtns = document.querySelectorAll(".next");

prevBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    wrapper.style.transform = "translateX(0)"
  })
})

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    wrapper.style.transform = "translateX(-100vw)"
  })
})