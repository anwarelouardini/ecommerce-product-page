const menuIcon = document.getElementById("menuIcon");
const closeSideBar = document.getElementById("close");
const sideBar = document.getElementById("sideBar");
const myCart = document.getElementById("card");
const cartMenu = document.getElementById("cartMenu");
const slides = document.querySelectorAll("#slides img");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const addAmount = document.getElementById("addAmount");
const decreaseAmount = document.getElementById("decreaseAmount");
const addToCart = document.getElementById("addToCart");
const deleteCart = document.getElementById("deleteCart");
const showItems = document.getElementById("cartItems");
const thumbnails = document.querySelectorAll(".thumb");
let totalAmount = 0;
let sliderIndex = 0;
let intervalId = null;
menuIcon.addEventListener("click", () => {
    sideBar.classList.add("active");
    document.getElementById("overlay").classList.add("active");
});
closeSideBar.addEventListener("click", () => {
    sideBar.classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
});
myCart.addEventListener("click", () => {
    cartMenu.classList.toggle("show");
});
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
showSlide(sliderIndex);
function showSlide (index) {
    if (index >= slides.length) {
        sliderIndex = 0;
    }
    else if (index < 0) {
        sliderIndex = slides.length - 1;
    }
    else {
        sliderIndex = index
    }
    slides.forEach(slide => {
        slide.classList.remove("show");
        slide.classList.add("hidden");
    });
    slides[sliderIndex].classList.remove("hidden");
    slides[sliderIndex].classList.add("show");    
}
function nextSlide() {
    showSlide(sliderIndex + 1);
}
function prevSlide() {
    showSlide(sliderIndex - 1);
}
addAmount.addEventListener("click", () => {
    totalAmount++;
    console.log(totalAmount);
    document.getElementById("totalAmount").textContent = `${totalAmount}`;
    document.getElementById("productAmount").textContent = `${totalAmount}`;
});
decreaseAmount.addEventListener("click", () => {
    if(totalAmount > 0) {
        totalAmount--
    }
    else {
        totalAmount = 0;
    }
    document.getElementById("totalAmount").textContent = `${totalAmount}`;
});
hideCart();
addToCart.addEventListener("click", () => {
    if(totalAmount === 0) {
        showItems.style.visibility = "hidden";
        return;
    };
    const sneakersPrice = 125.00;
    const total = sneakersPrice * totalAmount;
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
    showItems.textContent = totalAmount;
    showItems.style.visibility = "visible";
    showCart();
});
thumbnails[0].classList.add("active-thumb");
function thumbStyle(index) {
    thumbnails.forEach((element, i) => {
        element.classList.remove("active-thumb"); 
    });
    thumbnails[index].classList.add("active-thumb");
}
deleteCart.addEventListener("click", () => {
    showItems.textContent = 0;
    showItems.style.visibility = "hidden";
    hideCart();
});
function hideCart() {
    document.getElementById("emptyMssg").classList.remove("hidden");
    document.getElementById("productContainer").classList.add("hidden");
    document.getElementById("checkoutBtn").classList.add("hidden");
}
function showCart() {
    document.getElementById("emptyMssg").classList.add("hidden");
    document.getElementById("productContainer").classList.remove("hidden");
    document.getElementById("checkoutBtn").classList.remove("hidden");
}
