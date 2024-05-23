 let quantity = document.querySelector(".quantity");
var foodMenuContainer = document.querySelector('.food-menu-container');

foodMenuContainer.addEventListener('click', function(event) {
   
    if (event.target.classList.contains('btn')) {

        quantity.textContent = Number(quantity.textContent) + 1;
    };  
});

//---------------------------------------------------------------------------------
document.getElementById('cartButton').addEventListener('click', function() {
    var cartSlider = document.getElementById('cartSlider');
    cartSlider.classList.toggle('active');
});
// -----------------------------------------------------------------------
var addToCartButtons = document.querySelectorAll('.addToCartButton');
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = "green";
        
        var item = this.getAttribute('data-item');
        var price = this.getAttribute('data-price');
        var cartItems = document.getElementById('cartItems');
        let charges = document.querySelector(".charges");
        charges.textContent = Number(charges.textContent)  + Number(price);

        var newItem = document.createElement('li');
        newItem.textContent = item;
        newItem.style.fontSize = "15px";
        cartItems.appendChild(newItem);
    });
});

// ------------------------------------------------------------------------------------------
// script.js
// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
    var player;
    player = new YT.Player('testimonialVideo', {
    });
}




