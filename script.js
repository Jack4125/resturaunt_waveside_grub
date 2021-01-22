(function () {
  'use strict';

  const email = document.querySelectorAll('.business-email');
  const phone = document.querySelectorAll('.business-phone');

  const cryptOne = ['mai', 'l:', 'wavesidegrub', '5-4521'];
  const cryptTwo = ['te', 'lto:', '(805) 33', '@gmail.com'];

  email.forEach(item => {
    item.innerHTML = `${cryptOne[2]}${cryptTwo[3]}`;
    item.href = `${cryptOne[0]}${cryptTwo[1]}${cryptOne[2]}${cryptTwo[3]}`;
  });
  phone.forEach(item => {
    item.innerHTML = `${cryptTwo[2]}${cryptOne[3]}`;
    item.href = `${cryptTwo[0]}${cryptOne[1]}${cryptTwo[2]}${cryptOne[3]}`;
  });

  // nav control
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.add('nav-show');
  document.querySelector('.nav-control').classList.add('nav-control-show');
});

document.querySelector('.nav-control').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.remove('nav-show');
  document.querySelector('.nav-control').classList.remove('nav-control-show');
});

/* Hide header on scroll down. Show on scroll up */
let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  document.querySelector('.nav-list').classList.remove('nav-show');
  document.querySelector('.nav-control').classList.remove('nav-control-show');
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  } else {
    document.querySelector("header").style.top = "-200px";
  }
  prevScrollPos = currentScrollPos;
}

})();
