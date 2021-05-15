let list = document.querySelector(".item-list");
let listItems = document.querySelectorAll(".item-list li");
let content = document.querySelectorAll(".content");

// Sticky Navigation
function stickyNav(e) {
  if (window.scrollY > 200) {
    list.classList.add("fixed");
  } else {
    list.classList.remove("fixed");
  }
}

// SelectItem
function selectItem(index) {
  removeActive();
  listItems[index].classList.add("active");
  let contentPos = content[index].offsetTop - list.offsetHeight;
  window.scrollTo("0", contentPos);
  return contentPos;
}

// Scroll Spy
function scrollSpy() {
  let currentTop = window.pageYOffset;
  content.forEach(function (cont, index) {
    let contTop = this[index].offsetTop - list.offsetHeight;
    let contBottom = contTop + this[index].offsetHeight;
    if (currentTop >= contTop && currentTop <= contBottom) {
      removeActive();
      listItems[index].classList.add("active");
    }
  }, content);
}

window.addEventListener("scroll", stickyNav);

listItems.forEach(function (list, index) {
  list.addEventListener("click", function () {
    selectItem(index);
  });
});

window.addEventListener("scroll", function () {
  scrollSpy();
});

// Remove Selected
function removeActive() {
  listItems.forEach(function (list) {
    list.classList.remove("active");
  });
}
