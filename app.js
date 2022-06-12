// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
// 这里设置好之后就可以把HTML中写的年份去掉了
const date = document.querySelector(".date");
// const today = new Date();
// const year = today.getFullYear();
// date.innerHTML = year;
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const LinksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
//在CSS中手动规定每条link的高度
/*navToggle.addEventListener("click", function () {
  LinksContainer.classList.toggle("show-links");
});*/

navToggle.addEventListener("click", function () {
  const containerHeight = LinksContainer.getBoundingClientRect().height;
  //   console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;
  //   console.log(linksHeight);
  //如果containerHeight为0，则动态添加height；反之则让container为0
  if (containerHeight === 0) {
    //注意：这一条是inline style
    LinksContainer.style.height = `${linksHeight}px`;
  } else {
    LinksContainer.style.height = 0;
  }
});
const navbar = document.querySelector("#nav");
const topLink = document.querySelector(".top-link");
// ********** fixed navbar ************
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  //   console.log(scrollHeight);
  //当页面滚动超过navbar时，将navbar固定在页面上。
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  //当页面滚动超过一定长度时，scroll button出现。
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
// select links
