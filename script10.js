let cart = [];
let total = 0;

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('hotel-container').style.display = 'block';
});

function showMenu(hotelName) {
    document.getElementById('hotel-container').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('hotel-name').textContent = hotelName;
    document.getElementById('back-button').style.display = 'block';
    
    // Hide all menus
    const menus = document.querySelectorAll('.menu-section');
    menus.forEach(menu => menu.style.display = 'none');

    // Show the selected menu
    document.getElementById(hotelName.toLowerCase().replace(/ /g, '-') + '-menu').style.display = 'block';
}

function goBack() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('hotel-container').style.display = 'block';
}

function addToCart(button) {
    const item = button.parentElement;
    const itemName = item.getAttribute('data-name');
    const itemPrice = parseFloat(item.getAttribute('data-price'));

    cart.push({ name: itemName, price: itemPrice });
    total += itemPrice;
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
    });

    document.getElementById('total-price').textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert(`Checkout successful! Total amount: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}
