// 상단 nav 삽입
$('.main-nav-include').load('../include/nav.html', function() {
  // === Main Navigation ===
  const mainNav = document.querySelector(".main-nav");
  const mainNavLists = document.querySelectorAll(".nav-left .nav-menu > li > a");
  const subMenus = document.querySelectorAll(".sub-menu");
  const subMenuBG = document.querySelector(".sub-menu-bg-pc");
  let listIndex = 0;

  mainNavLists.forEach(list => {
    list.addEventListener("mouseover", (e) => {
      const lists = [...e.target.parentElement.parentElement.children];
      listIndex = lists.indexOf(e.target.parentElement);
      
      lists.forEach(li => {
        li.classList.remove("active");
      });
      subMenus.forEach(subMenu => {
        subMenu.classList.remove("active");
      });

      list.parentElement.classList.add("active");
        subMenus[listIndex].classList.add("active");
        subMenuBG.classList.add("active");
    });
  });
  mainNav.addEventListener("mouseleave", () => {
    const mainNavLi = document.querySelectorAll(".nav-left .nav-menu > li");
    mainNavLi.forEach(li => {
      li.classList.remove("active");
    });
    subMenus.forEach(subMenu => {
      subMenu.classList.remove("active");
    });
    subMenuBG.classList.remove("active");
  });

  // langMenu
  const langMenu = document.querySelector(".lang-menu");
  const langMenuList = document.querySelector(".lang-menu-list");
  langMenu.addEventListener("click", function() {
    langMenuList.classList.toggle("active");
  });

  // === Mobile Main Navigation ===
  const mobileMenuBtn = document.querySelector("input#menu-btn");
  const mobileMenuBox = document.querySelector(".nav-mo-menu-box");
  const body = document.querySelector('body');

  mobileMenuBtn.addEventListener("click", () => {
    if(mobileMenuBtn.checked) {
      mobileMenuBox.scrollTo(0, 0);
      // mobileMenuBox.style.transform = "translateX(0)";
      mobileMenuBox.style.width = "70%";
      mobileMenuBox.style.opacity = "1";
      mobileMenuBox.style.transition = "300ms";
      // scroll 방지
      body.style.overflow = 'hidden';
    } else {
      // mobileMenuBox.style.transform = "translateX(-100%)";
      mobileMenuBox.style.width = "0";
      mobileMenuBox.style.opacity = "0";
      body.style.overflow = 'visible';
    }
  });
});

// 하단 footer 삽입
$(function() {
  $('.main-footer-include').load('../include/footer.html');
});