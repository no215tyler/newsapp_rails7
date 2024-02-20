const menu = () => {
  console.log("リロードで発火");
  const pullDownButton = document.getElementById("menu1");

  pullDownButton.addEventListener("mouseover", function () {
    this.setAttribute("style", "background-color: #3136bd;");
  });

  pullDownButton.addEventListener("mouseout", function () {
    this.removeAttribute("style");
  });
};

window.addEventListener("turbo:load", menu);
