$(".category-items").slick({
    prevArrow: ".category-prev",
    nextArrow: ".category-next",
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$(".new-items").slick({
    prevArrow: ".new-prev",
    nextArrow: ".new-next",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1220,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$(".offered-items").slick({
    prevArrow: ".offered-prev",
    nextArrow: ".offered-next",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1220,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$(".bs-items").slick({
    prevArrow: ".bs-prev",
    nextArrow: ".bs-next",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1220,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});
$(".jl-items").slick({
    prevArrow: ".js-prev",
    nextArrow: ".js-next",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1220,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
});

document.addEventListener("DOMContentLoaded", function () {
    var splide = new Splide(".splide", {
        type: "fade",
        rewind: true,
        autoplay: true,
        arrows: false,
        classes: {
            pagination: "splide__pagination splide__pagination--custom",
            page: "splide__pagination__page splide__pagination__page--custom",
        },
        
    });
    splide.on( 'pagination:mounted', function ( data ) {
        data.list.classList.add( 'splide__pagination--custom' );
      } );
    splide.mount();
});

const headerBurger = document.querySelector(".header-burger");
headerBurger.addEventListener("click", () => {
    document.querySelector(".header-bottom-links").classList.toggle("active");
    document
        .querySelectorAll(".header-bottom-link")
        .forEach((item) => item.classList.toggle("toggle"));
});

const categoryTitle = document.querySelectorAll(".category-title");
const allCategoryPosts = document.querySelectorAll(".product");

for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].addEventListener(
        "click",
        filterPosts.bind(this, categoryTitle[i])
    );
}

function filterPosts(item) {
    changeActivePosition(item);
    for (let i = 0; i < allCategoryPosts.length; i++) {
        if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem) {
    for (let i = 0; i < categoryTitle.length; i++) {
        categoryTitle[i].classList.remove("active");
    }
    activeItem.classList.add("active");
}

function show(smth, input) {
    document.querySelector(input).value = smth;
}

let headerTopDropdown = document.querySelector(".header-top-dropdown");
let headerBtmDropdown = document.querySelector(".header-btm-dropdown");
headerTopDropdown.onclick = () => {
    headerTopDropdown.classList.toggle("active");
};
headerBtmDropdown.onclick = () => {
    headerBtmDropdown.classList.toggle("active");
};


$(".qt-plus").click(function () {
    $(this)
        .parent()
        .children(".qt")
        .html(parseInt($(this).parent().children(".qt").html()) + 1);

});

$(".qt-minus").click(function () {
    child = $(this).parent().children(".qt");

    if (parseInt(child.html()) > 1) {
        child.html(parseInt(child.html()) - 1);
    }
});

$(".product-heart").click(function(){
    $(this).children('.fa-heart').toggleClass("active fas");;
});
