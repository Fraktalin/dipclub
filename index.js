const menuBtn = document.querySelector(".menu-btn"),
  burgerLinks = document.querySelectorAll(".burger-link"),
  menu = document.querySelector(".menu"),
  join = document.querySelector("#join"),
  form = document.querySelector(".main-form"),
  inputs = document.querySelectorAll(".main-form-input"),
  mainForm = document.querySelector(".main-form"),
  overlay = document.querySelector(".overlay");

// $(document).ready(function () {
//   $(".members-wrap").slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 3,
//     arrow: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           dots: false,
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       // You can unslick at a given breakpoint now by adding:
//       // settings: "unslick"
//       // instead of a settings object
//     ],
//   });
// });
for (const i of burgerLinks) {
  i.addEventListener("click", hideBurger);
}
function hideBurger() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}
menuBtn.addEventListener("click", function () {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
});

mainForm.addEventListener("submit", sendForm);
join.addEventListener("click", showForm);
overlay.addEventListener("click", hideForm);

function sendForm(e) {
  e.preventDefault();
  $(document).ready(function () {
    $.ajax({
      url: "ajax_quest.php",
      method: "GET",
      data: {
        user_phone: $("#phone").val(),
        user_name: $("#name").val(),
        user_email: $("#email").val(),
      },
      success: function (data) {
        console.log(data);
        hideForm();
        showThanks();
      },
      error: function (data) {
        hideForm();
        showError();
        console.log(data);
      },
    });
  });
}
function showError() {
  console.log("err");
  overlay.classList.remove("hidden");
  document.querySelector(".error").classList.remove("hidden");
  setTimeout(() => {
    overlay.classList.add("hidden");
    document.querySelector(".error").classList.add("hidden");
  }, 2000);
}
function showThanks() {
  console.log("success");
  overlay.classList.remove("hidden");
  document.querySelector(".message").classList.remove("hidden");
  setTimeout(() => {
    overlay.classList.add("hidden");
    document.querySelector(".message").classList.add("hidden");
  }, 2000);
}
function hideForm() {
  overlay.classList.add("hidden");
  form.classList.add("hidden");
}
function showForm() {
  overlay.classList.remove("hidden");
  form.classList.remove("hidden");
}
for (const i of inputs) {
  i.addEventListener("keypress", checkCode);
}

function checkCode(e) {
  if (
    e.key === "{" ||
    e.key === "}" ||
    e.key === "&" ||
    e.key === "%" ||
    e.key === ":" ||
    e.key === ">" ||
    e.key === "<" ||
    e.key === "+" ||
    e.key === "*" ||
    e.key === "#" ||
    e.key === "$"
  ) {
    e.preventDefault();
  }
}
