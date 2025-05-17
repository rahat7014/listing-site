$(document).ready(function () {

  var swiper = new Swiper(".hero-banner", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".testimonials-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  $(document).ready(function () {
    $('.counter').counterUp({
      delay: 100,
      time: 5000
    });
  });

  $('#location-select').select2({
    theme: "bootstrap-5",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    placeholder: $(this).data('placeholder'),
  });

  $('#category-select').select2({
    theme: "bootstrap-5",
    width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
    placeholder: $(this).data('placeholder'),
  });
  $(document).ready(function () {
    $('select').niceSelect();
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  tooltipTriggerList.forEach(function (tooltipTriggerEl) {
    new bootstrap.Tooltip(tooltipTriggerEl)
  })
});



// Run baguetteBox on all swiper slides (inside .swiper)
baguetteBox.run('.swiper', {
  animation: 'fadeIn',
  captions: true
});

// Enable Swiper with hover autoplay
document.querySelectorAll('.pgSwiper').forEach((swiperContainer) => {
  const swiper = new Swiper(swiperContainer, {
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
  });

  swiper.autoplay.stop(); // default paused

  // Hover to play, leave to stop
  swiperContainer.addEventListener('mouseenter', () => swiper.autoplay.start());
  swiperContainer.addEventListener('mouseleave', () => swiper.autoplay.stop());
});



const pwShowHide = document.querySelectorAll(".showHidePw");

pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pwField = eyeIcon.closest('.input-area').querySelector('input[type="password"], input[type="text"]');
    if (pwField.type === "password") {
      pwField.type = "text";
      eyeIcon.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      pwField.type = "password";
      eyeIcon.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});


const inputs = document.querySelectorAll('.otp-digit');
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value === '' && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

document.getElementById('otp-form').addEventListener('submit', (e) => {
  e.preventDefault();
  let otp = '';
  inputs.forEach(input => otp += input.value);
  alert('OTP entered: ' + otp);
  // Add your verification logic here
});