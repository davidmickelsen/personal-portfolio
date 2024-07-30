// Change colors of skill elements on mouseover
document.querySelectorAll(".skill").forEach((skill) => {
  let originalColor = skill.style.color;

  skill.addEventListener("mouseover", function () {
    skill.style.color = skill.getAttribute("data-color");
  });

  skill.addEventListener("mouseout", function () {
    skill.style.color = originalColor;
  });
});
