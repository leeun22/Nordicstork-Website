 /* < script src = "https://unpkg.com/swiper@8/swiper-bundle.min.js" > < /script> */

 /* initializing swiper slider */
 var swiper = new Swiper(".mySwiper", {
     // Show 4 card trong 1 slide
     // Có khoảng cách giữa các card là 15px
     slidesPerView: 3,
     spaceBetween: 30,
     grabCursor: true,
     // Set chuyển động cho slide mỗi 2500s 1 lần next
     // Khi di chuột vào (pauseOnMouse) thì dừng slide
     autoplay: {
         delay: 2500,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
     },
     // Số card next trong 1 slide là 1 trên tổng 3 card
     slidesPerGroup: 1,
     loop: true,
     loopFillGroupWithBlank: true,
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
     navigation: {
         prevEl: ".swiper-button-prev",
         nextEl: ".swiper-button-next",
     },

     // Responsive Card theo kích thước màn hình bằng thuộc tính (breakpoints) 
     breakpoints: {
         // Từ 0px: 1 cột
         0: {
             slidesPerView: 1,
         },
         // Từ 56px: 2 cột
         576: {
             slidesPerView: 2,
         },
         // Từ 992px: 3 cột
         992: {
             slidesPerView: 3,
         },
         // Từ 1200: 3 cột
         1200: {
             slidesPerView: 3,
         },
     },
 });


 /* initializing swiper slider */
 var swiper = new Swiper(".mySwiper-topBar", {
     // Show 4 card trong 1 slide
     // Có khoảng cách giữa các card là 15px
     slidesPerView: 1,
     spaceBetween: 30,
     grabCursor: true,
     // Set chuyển động cho slide mỗi 2500s 1 lần next
     // Khi di chuột vào (pauseOnMouse) thì dừng slide
     autoplay: {
         delay: 2500,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
     },
     // Số card next trong 1 slide là 1 trên mỗi một card
     slidesPerGroup: 1,
     loop: true,
     loopFillGroupWithBlank: true,
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
     navigation: {
         prevEl: ".swiper-button-prev",
         nextEl: ".swiper-button-next",
     },
 });