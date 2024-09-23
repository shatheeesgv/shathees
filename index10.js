<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles10.css">
    <title>Food Delivery Service</title>
</head>
<body>
    <div id="login-container">
        <h2>Login</h2>
        <form id="login-form">
            <input type="text" id="username" placeholder="Username" required>
            <input type="password" id="password" placeholder="Password" required>
            <button type="submit">Login</button>
            <p id="login-error" style="color: red;"></p>
        </form>
    </div>

    <div id="hotel-container" style="display:none;">
        <h2>Select a Hotel</h2>
        <ul id="hotel-list">
            <li onclick="showMenu('Anjappar')">
                <img src="anjappar.jpg" alt="Anjappar" class="hotel-image" /> Anjappar
            </li>
            <li onclick="showMenu('Ravuthar')">
                <img src="ravuthar.jpg" alt="Ravuthar" class="hotel-image" /> Ravuthar
            </li>
            <li onclick="showMenu('KFC')">
                <img src="kfc.jpg" alt="KFC" class="hotel-image" /> KFC
            </li>
            <li onclick="showMenu('Popeyes')">
                <img src="popeyes.jpg" alt="Popeyes" class="hotel-image" /> Popeyes
            </li>
            <li onclick="showMenu('McDonald\'s')">
                <img src="mcdonalds.jpg" alt="McDonald's" class="hotel-image" /> McDonald’s
            </li>
            <li onclick="showMenu('The Wedding Biryani')">
                <img src="wedding-biryani.jpg" alt="The Wedding Biryani" class="hotel-image" /> The Wedding Biryani
            </li>
        </ul>
    </div>

    <div id="main-content" style="display:none;">
        <header>
            <h1 id="hotel-name"></h1>
            <button id="back-button" onclick="goBack()" style="display:none;">&#8592;</button>
        </header>
        <main>
            <section id="menu">
                <h2>Menu</h2>
                <!-- Menu Sections -->
                <div id="anjappar-menu" class="menu-section" style="display:none;">
                    <div class="item" data-name="Thandoori" data-price="12">
                        <img src="anjappar-thandoori.jpg" alt="Thandoori" />
                        <h3>Thandoori</h3>
                        <p>$12</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Chicken Chettinad" data-price="14">
                        <img src="anjappar-chicken-chettinad.jpg" alt="Chicken Chettinad" />
                        <h3>Chicken Chettinad</h3>
                        <p>$14</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Mutton Chukka" data-price="16">
                        <img src="anjappar-mutton-chukka.jpg" alt="Mutton Chukka" />
                        <h3>Mutton Chukka</h3>
                        <p>$16</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Mutton Biryani" data-price="15">
                        <img src="anjappar-mutton-biryani.jpg" alt="Mutton Biryani" />
                        <h3>Mutton Biryani</h3>
                        <p>$15</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Kalaki" data-price="10">
                        <img src="anjappar-kalaki.jpg" alt="Kalaki" />
                        <h3>Kalaki</h3>
                        <p>$10</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                </div>

                <div id="ravuthar-menu" class="menu-section" style="display:none;">
                    <div class="item" data-name="Grill Chicken" data-price="12">
                        <img src="ravuthar-grill-chicken.jpg" alt="Grill Chicken" />
                        <h3>Grill Chicken</h3>
                        <p>$12</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Chicken Chukka" data-price="14">
                        <img src="ravuthar-chicken-chukka.jpg" alt="Chicken Chukka" />
                        <h3>Chicken Chukka</h3>
                        <p>$14</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Garlic Naan" data-price="4">
                        <img src="ravuthar-garlic-naan.jpg" alt="Garlic Naan" />
                        <h3>Garlic Naan</h3>
                        <p>$4</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Chicken Butter Masala" data-price="13">
                        <img src="ravuthar-chicken-butter-masala.jpg" alt="Chicken Butter Masala" />
                        <h3>Chicken Butter Masala</h3>
                        <p>$13</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Lamb Sheek" data-price="15">
                        <img src="ravuthar-lamb-sheek.jpg" alt="Lamb Sheek" />
                        <h3>Lamb Sheek</h3>
                        <p>$15</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                </div>

                <div id="kfc-menu" class="menu-section" style="display:none;">
                    <div class="item" data-name="Fried Chicken" data-price="10">
                        <img src="kfc-fried-chicken.jpg" alt="Fried Chicken" />
                        <h3>Fried Chicken</h3>
                        <p>$10</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Popcorn Chicken" data-price="8">
                        <img src="kfc-popcorn-chicken.jpg" alt="Popcorn Chicken" />
                        <h3>Popcorn Chicken</h3>
                        <p>$8</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Nuggets" data-price="6">
                        <img src="kfc-nuggets.jpg" alt="Nuggets" />
                        <h3>Nuggets</h3>
                        <p>$6</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="OMG Burger" data-price="9">
                        <img src="kfc-omg-burger.jpg" alt="OMG Burger" />
                        <h3>OMG Burger</h3>
                        <p>$9</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Pepsi" data-price="3">
                        <img src="kfc-pepsi.jpg" alt="Pepsi" />
                        <h3>Pepsi</h3>
                        <p>$3</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                </div>

                <div id="popeyes-menu" class="menu-section" style="display:none;">
                    <div class="item" data-name="Burrito" data-price="8">
                        <img src="popeyes-burrito.jpg" alt="Burrito" />
                        <h3>Burrito</h3>
                        <p>$8</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Tacos" data-price="7">
                        <img src="popeyes-tacos.jpg" alt="Tacos" />
                        <h3>Tacos</h3>
                        <p>$7</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Beef Wellington" data-price="20">
                        <img src="popeyes-beef-wellington.jpg" alt="Beef Wellington" />
                        <h3>Beef Wellington</h3>
                        <p>$20</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Fried Chicken" data-price="10">
                        <img src="popeyes-fried-chicken.jpg" alt="Fried Chicken" />
                        <h3>Fried Chicken</h3>
                        <p>$10</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Coca-Cola" data-price="3">
                        <img src="popeyes-coca-cola.jpg" alt="Coca-Cola" />
                        <h3>Coca-Cola</h3>
                        <p>$3</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                </div>

                <div id="mcdonalds-menu" class="menu-section" style="display:none;">
                    <div class="item" data-name="Pepperoni Pizza" data-price="12">
                        <img src="mcdonalds-pepperoni-pizza.jpg" alt="Pepperoni Pizza" />
                        <h3>Pepperoni Pizza</h3>
                        <p>$12</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Cheese Pizza" data-price="10">
                        <img src="mcdonalds-cheese-pizza.jpg" alt="Cheese Pizza" />
                        <h3>Cheese Pizza</h3>
                        <p>$10</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Choco Lava Cake" data-price="5">
                        <img src="mcdonalds-choco-lava-cake.jpg" alt="Choco Lava Cake" />
                        <h3>Choco Lava Cake</h3>
                        <p>$5</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Veggie Burger" data-price="6">
                        <img src="mcdonalds-veggie-burger.jpg" alt="Veggie Burger" />
                        <h3>Veggie Burger</h3>
                        <p>$6</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="French Fries" data-price="3">
                        <img src="mcdonalds-french-fries.jpg" alt="French Fries" />
                        <h3>French Fries</h3>
                        <p>$3</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                </div>

                <div id="wedding-biryani-menu" class="menu-section" style="display:none;">
                    <div class="item" data-name="Chicken Biryani" data-price="12">
                        <img src="wedding-biryani-chicken.jpg" alt="Chicken Biryani" />
                        <h3>Chicken Biryani</h3>
                        <p>$12</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Mutton Biryani" data-price="15">
                        <img src="wedding-biryani-mutton.jpg" alt="Mutton Biryani" />
                        <h3>Mutton Biryani</h3>
                        <p>$15</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Prawn Biryani" data-price="18">
                        <img src="wedding-biryani-prawn.jpg" alt="Prawn Biryani" />
                        <h3>Prawn Biryani</h3>
                        <p>$18</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Fish Biryani" data-price="17">
                        <img src="wedding-biryani-fish.jpg" alt="Fish Biryani" />
                        <h3>Fish Biryani</h3>
                        <p>$17</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                    <div class="item" data-name="Chicken 65" data-price="9">
                        <img src="wedding-biryani-chicken-65.jpg" alt="Chicken 65" />
                        <h3>Chicken 65</h3>
                        <p>$9</p>
                        <button onclick="addToCart(this)">Add to Cart</button>
                    </div>
                </div>
            </section>
            <section id="cart">
                <h2>Your Cart</h2>
                <ul id="cart-items"></ul>
                <p id="total-price">Total: $0</p>
                <button onclick="checkout()">Checkout</button>
            </section>
        </main>
    </div>

    <script src="script10.js"></script>
</body>
</html>
