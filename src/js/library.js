// ====NAV BAR MENU MOBILE====
function openNav() {
    const headerNav = document.getElementById("mySidenav");
    headerNav.classList.add('active');
}

function closeNav() {
    const headerNav = document.getElementById("mySidenav");
    headerNav.classList.remove('active');
}

//  ====DROP-DOWN MENU MOBILE====
/* Tạo vòng lặp For có biến chạy i, chạy từ ptu thứ 0 đến hết các ptu có trong lớp "menu__dropdown", để load dl.
    Tại bất kì ptu thứ i nào trong lớp "menu__dropdown" có sự kiện "click", thì sẽ tạo ra một function: 
    funtion này, tạo thêm 1 class "active" để thực hiện các thay đổi về style cho class "menu_dropdown" khi đc click vào.
    Tạo một biến mới có tên là dropdownContent, với hđ lấy phần tử element tiếp theo sau element "menu__dropdown"
    bằng thuộc tính HTML DOM nextElementSibling (Đó chính là class: "group-menu-dropdown", set none trong css trc). Sau đó thực hiện hđ if - else.
*/
var dropdown = document.getElementsByClassName("menu__dropdown");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active-MenuDropdn");

        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}


//  ====SLIDER====
/* < script src = "https://unpkg.com/swiper@8/swiper-bundle.min.js" > < /script> */

/* SLIDER PRODUCT: initializing swiper slider */
var swiper = new Swiper(".mySwiper", {
    // Show 3 card trong 1 slide
    // Có khoảng cách giữa các card là 30px
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

    // Responsive Card theo kích thước màn hình bằng thuộc tính (Breakpoints) 
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


/* SLIDER TOPBAR: initializing swiper slider */
var swiper = new Swiper(".mySwiper-topBar", {
    // Show 1 card trong 1 slide
    // Có khoảng cách giữa các card là 30px
    //  slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
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
    navigation: {
        prevEl: ".button--prev",
        nextEl: ".button--next",
    },
});