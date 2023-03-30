
// 1. Сделать плавный скролинг
$('.nav-link a, .nav-logo a').on('click', function(event) {
  event.preventDefault();
  let href = $(this).attr('href');
  let targetOffset = $(href).offset().top;
  let duration = 1000;

  $('html, body').animate({
    scrollTop: targetOffset
  }, duration);
});


//автозаполнение точками и тире
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item) => {
  const name = item.querySelector('.menu-item__name').textContent;
  const dots = '.'.repeat(30 - name.length); 

  item.querySelector('.menu-item__price').insertAdjacentHTML('beforebegin', dots);
});

function setPlaceholder(input) {
    const inputWidth = input.offsetWidth;
    const dotsCount = Math.round(inputWidth);
    const dots = "_ ".repeat(dotsCount);
    input.setAttribute("placeholder", dots);
  }
  
  const inputs = document.querySelectorAll(".coupons__reservation-input");
  inputs.forEach((input) => {
    setPlaceholder(input);
  });
  

//день-ночь
  const sun = document.querySelector(".container__item__image--sun");
  const moon = document.querySelector(".container__item__image--moon");
  const header = document.querySelector("header");
  const reservationDiv = document.querySelector(".coupons__reservation");
  const deliveryAddress = document.querySelector('.delivery-image');
  
  sun.addEventListener("click", () => {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
      moon.style.display = "inline";
      sun.style.display = "none";
      header.style.backgroundColor = "#151515";
      reservationDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      deliveryAddress.style.backgroundColor = "#FFF";
      document.querySelector(".coupons").classList.add("dark");
  });
  
  moon.addEventListener("click", () => {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
      sun.style.display = "inline";
      moon.style.display = "none";
      header.style.backgroundColor = "#F4F4F4";
      reservationDiv.style.backgroundColor = "#F4F4F4";
      deliveryAddress.style.backgroundColor = "#000";
      document.querySelector(".coupons").classList.remove("dark");
  });




  // при клике на кнопку переход на конструктор пицци
document.querySelector('.btn-more').onclick = function() {
    window.location.href = '#constructor';
};

document.querySelector('#resultBtn').onclick = function() {
  window.location.href = '#contactUs';
}

document.querySelector('#discount-btn').onclick = function() {
  window.location.href = '#contactUs';
}

//завершающее модальное окно
const confirmBtn = document.getElementById("confirm");
const continueShoppingBtn = document.getElementById("continue-shopping-btn");
const confirModal = document.querySelector(".confirmation-modal");

confirmBtn.addEventListener("click", () => {
  confirModal.style.display = "flex";

});

continueShoppingBtn.addEventListener("click", () => {
  confirModal.style.display = "none";
  document.querySelector("#home").scrollIntoView({ behavior: "smooth" });
});

// кнопка бургер меню
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
