let view = document.querySelector(".all-games");
let currenItem = 3;
view.onclick = () => {
  let boxes = [...document.querySelectorAll(".container .list-content .coba")];
  for (var i = currenItem; i < currenItem + 3; i++) {
    boxes[i].style.display = "block";
  }
  currenItem += 3;

  if (currenItem >= boxes.length) {
    view.style.display = "none";
  }
};
