const menu = () => {
  const pullDownButton = document.getElementById("menu1");
  const pullDownMenu = document.getElementById("menu1-pull-down");

  pullDownButton.addEventListener("mouseover", function () {
    this.setAttribute("style", "background-color: #3136bd;");
  });

  pullDownButton.addEventListener("mouseout", function () {
    this.removeAttribute("style");
  });

  pullDownButton.addEventListener("click", function () {
    if (pullDownMenu.getAttribute("style") == "display: block;") {
      pullDownMenu.removeAttribute("style");
    } else {
      pullDownMenu.setAttribute("style", "display: block;");
    }
  });
};

window.addEventListener("turbo:load", menu);
