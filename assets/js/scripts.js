$(".category-items").slick({
    prevArrow: ".category-prev",
    nextArrow: ".category-next",
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
});
$(".new-items").slick({
    prevArrow: ".new-prev",
    nextArrow: ".new-next",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
});
$(".offered-items").slick({
    prevArrow: ".offered-prev",
    nextArrow: ".offered-next",
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
});
$(".bs-items").slick({
    prevArrow: ".bs-prev",
    nextArrow: ".bs-next",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
});
$(".jl-items").slick({
    prevArrow: ".js-prev",
    nextArrow: ".js-next",
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
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
