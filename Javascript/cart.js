let Login = localStorage.getItem("login");
if (Login == 1) {
    let carts = document.querySelectorAll('.buy-now');
    let products = [{
            name: 'Laptop Aorus Eagle AN515-57-71VV i7-11800H/ 8GB/',
            tag: 'Laptop1',
            catagory: 'Laptop',
            price: 9177000,
            inCart: 0
        },
        {
            name: 'Laptop Gaming MSI GF63 Thin 10SCXR i5 10200H / 8GB /',
            tag: 'Laptop2',
            catagory: 'Laptop',
            price: 9660000,
            inCart: 0
        },
        {
            name: 'Laptop ACER Aspire 5',
            tag: 'Laptop3',
            catagory: 'Laptop',
            price: 9177000,
            inCart: 0
        },
        {
            name: 'Laptop ASUS G65 10UE 286VN Core i5-10500H/ 16GB/',
            tag: 'Laptop4',
            catagory: 'Laptop',
            price: 13777000,
            inCart: 0
        },
        {
            name: 'Laptop Gaming Dell Alienware m15 - R6 - 01NS i7-',
            tag: 'Laptop5',
            catagory: 'Laptop',
            price: 18377000,
            inCart: 0
        },
        {
            name: 'Laptop Gaming Dell Alienware m15 - R6 - 01NS i7-black',
            tag: 'Laptop6',
            catagory: 'Laptop',
            price: 18377000,
            inCart: 0
        },
        {
            name: 'LAPTOP LENOVO LEGION 5 PRO 16ITH6H',
            tag: 'Laptop7',
            catagory: 'Laptop',
            price: 46000000,
            inCart: 0
        },
        {
            name: 'LAPTOP MSI GAMING GS66 STEALTH (11UG-210VN)',
            tag: 'Laptop8',
            catagory: 'Laptop',
            price: 27577000,
            inCart: 0
        },
        {
            name: 'Laptop ACER Aspire 5 - I5 - 144hz',
            tag: 'Laptop9',
            catagory: 'Laptop',
            price: 18377000,
            inCart: 0
        },
        {
            name: 'Laptop ACER Aspire 5 - I5 - 144hz - grey',
            tag: 'Laptop10',
            catagory: 'Laptop',
            price: 18377000,
            inCart: 0
        },
        {
            name: 'Laptop Gaming Acer Nitro 5 EagleV i5 8GB',
            tag: 'Laptop11',
            catagory: 'Laptop',
            price: 18377000,
            inCart: 0
        },
        {
            name: 'Laptop Gaming ASUS TUF F15 i5',
            tag: 'Laptop12',
            catagory: 'Laptop',
            price: 14479000,
            inCart: 0
        },
        {
            name: 'Laptop Asus ROG Strix G15 R7 4800H 8GB',
            tag: 'Laptop13',
            catagory: 'Laptop',
            price: 16077000,
            inCart: 0
        },
        {
            name: 'Laptop Acer Gaming Nitro 5 2021 Ryzen 5-5600H',
            tag: 'Laptop14',
            catagory: 'Laptop',
            price: 18377000,
            inCart: 0
        },
        {
            name: 'LAPTOP ASUS ROG Zephyrus G14 R9-5900HS/',
            tag: 'Laptop15',
            catagory: 'Laptop',
            price: 22977000,
            inCart: 0
        },
        {
            name: 'Laptop Acer Predator Triton 300',
            tag: 'Laptop16',
            catagory: 'Laptop',
            price: 36777000,
            inCart: 0
        },
        {
            name: 'Laptop Gaming Asus ROG Strix SCAR 15 R9',
            tag: 'Laptop17',
            catagory: 'Laptop',
            price: 32177000,
            inCart: 0
        },
        {
            name: 'Laptop MSI Strix SCAR GF65 Thin 10UE i7',
            tag: 'Laptop18',
            catagory: 'Laptop',
            price: 41377000,
            inCart: 0
        },
        {
            name: 'LAPTOP ACER PREDATOR HELIOS 300 I7',
            tag: 'Laptop19',
            catagory: 'Laptop',
            price: 50377000,
            inCart: 0
        },
        {
            name: 'Laptop MSI Prestige 14 - Rose Pink',
            tag: 'Laptop20',
            catagory: 'Laptop',
            price: 78177000,
            inCart: 0
        },

    ]

    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);

        })
    }
    onLoadCartNumbers();
    displayCart();
} else {

}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.header_cart span').textContent = productNumbers;
    }
}

function cartNumbers(product, action) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (action) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.header_cart span').textContent = productNumbers - 1;
    } else if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.header_cart span').textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.header_cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product) {
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        let currentProduct = product.name;

        if (cartItems[currentProduct] == undefined) {
            cartItems = {
                ...cartItems,
                [currentProduct]: product
            }
        }
        cartItems[currentProduct].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.name]: product
        }
    }
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

function totalCost(product, action) {
    let cartCost = localStorage.getItem('totalCost');
    if (action) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost - product.price);
    } else if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}

function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let cartCost = localStorage.getItem("totalCost");
    cartCost = parseFloat(cartCost);
    let productContainer = document.querySelector(".product-cart");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map((item, index) => {
            productContainer.innerHTML += `
            <div class="cart">
                <div id="wrapper_6">
                    <div class="grid_row">
                        <div class="cart_info grid_column_1_6">
                            <img src="images/${item.catagory}/${item.tag}.png" class="img_cart">
                        </div>
                        <div class="cart_info grid_column_2_6">
                            <span>${item.name}</span>
                        </div>
                        <div class="cart_info grid_column_1_6 cart-price">
                            <span>${item.price} </span>
                        </div>
                        <div class="cart_info grid_column_1_6 cart-quantity">
                            <ion-icon class="decrease" name="arrow-dropleft-circle"></ion-icon>
                            <span>${item.inCart}</span>
                            <ion-icon class="increase" name="arrow-dropright-circle"></ion-icon> 
                        </div>
                        <div class="cart_info cart_end grid_column_1_6 cart-subtotal">
                            <span>${item.price * item.inCart}</span>
                            <div class="cart_edit">
                                <a href="#" class="cart_edit_icon remove-btn"><ion-icon name="close-circle-outline"></ion-icon></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

        });
        productContainer.innerHTML += `
        <br>
        <div id="wrapper_6">
            <div class="grid_row">
                <div class="cart_button1 grid_column_1_4">
                    <div class="cart_button_text">
                        <a href="/">Contiune Shopping</a>
                    </div>
                </div>
                <button class="cart_button2 grid_column_1_4" onclick="show()">
                    <div class="cart_button_text">Pay All</div>
                </button>
            </div>
        </div>
        <br>
        <!-- Fill info -->
        <hr style="width:80%;margin-left:auto;margin-right:auto">
        <div id="wrapper_6">
            <div class="header-banner-grid">
                <div class="grid_row" id="fill">
                    <div class="grid_column-5-5 ">
                        <div class="background-form-infor">
                            <div class="padding-form-infor">
                                <h2 class="form-infor-text">Fill Your Informations</h2>
                                <br>
                                <ul class="style-form-infor">
                                    <form action="/" onsubmit="return validate()">
                                        <li class="padding-text">
                                            <h4>Email Address
                                                <font color="red">*</font>
                                            </h4>
                                        </li>
                                        <li class="padding-item">
                                            <input type="text" class="form-infor-input" name="email" id="email" autofocus>
                                        </li>
                                        <li class="padding-item">
                                            <p>You can create an account after checkout.</p>
                                        </li>
                                        <li class="padding-text">
                                            <h4>First Name
                                                <font color="red">*</font>
                                            </h4>
                                        </li>
                                        <li class="padding-item">
                                            <input type="text" class="form-infor-input" name="f_name" id="f_name">
                                        </li>
                                        <li class="padding-text">
                                            <h4>Last Name
                                                <font color="red">*</font>
                                            </h4>
                                        </li>
                                        <li class="padding-item">
                                            <input type="text" class="form-infor-input" name="l_name" id="l_name">
                                        </li>
                                        <li class="padding-text">
                                            <h4>Company
                                                <font color="red">*</font>
                                            </h4>
                                        </li>
                                        <li class="padding-item">
                                            <input type="text" class="form-infor-input" name="company" id="company">
                                        </li>
                                        <li class="padding-text">
                                            <h4>State/Province
                                                <font color="red">*</font>
                                            </h4>
                                        </li>
                                        <li class="padding-item">
                                            <select name="province" id="province">
                                                            <optgroup label="Choose your state/province"></optgroup>
                                                                <option value="A">Ha Noi</option>
                                                                <option value="B">Ho Chi Minh</option>
                                                                <option value="C">Dong Thap</option>
                                                                <option value="D">Ca Mau</option>
                                                        </select>
                                        </li>
                                        <li class="padding-text">
                                            <h4>Town/District
                                                <font color="red">*</font>
                                            </h4>
                                        </li>
                                        <li class="padding-item">
                                            <input type="text" class="form-infor-input" name="town" id="town">
                                        </li>
                                        <li class="padding-text">
                                            <h4>Street Adddress
                                                <font color="red">*</font>
                                            </h4>
                                        </li>
                                        <li class="padding-item">
                                            <input type="text" class="form-infor-input" name="street" id="street">
                                        </li>
                                        <li class="padding-text">
                                            <h4>Phone Number
                                                <font color="red">*</font>
                                            </h4>
                                        </li>
                                        <li class="padding-item">
                                            <input type="text" class="form-infor-input" name="phone" id="phone">
                                        </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="grid_column-5-5 ">
                        <div class="background-form-infor1">
                            <div class="padding-form-infor">
                                <h2 class="form-infor-text">Summary</h2>
                                <div class="form-infor2-list">
                                    <p>Estimate Shipping and Tax</p>
                                    <li class="padding-item label_first">
                                        <div class="payment">
                                            <div>
                                                <label for="ship">
                                                                <b>Choose your payment methods</b>
                                                            </label>
                                            </div>
                                            <input type="radio" name="pay" class="pay_button" checked="check" />
                                            <label for="pay">Paid with COD</label>
                                            <input type="radio" name="pay" class="pay_button">
                                            <label for="pay">Paid with Credit Card</label>
                                        </div>
                                    </li>
                                    <li class="padding-item">
                                        <div>
                                            <label for="ship">
                                                            <b>Choose your shipping options</b>
                                                        </label>
                                            <div class="ship_select">
                                                <select name="ship" id="shipping">
                                                                <option value="A1">
                                                                    Fast
                                                                </option>
                                                                <option value="A2">
                                                                    Normal
                                                                </option>
                                                                <option value="A3">
                                                                    Save-money
                                                                </option>
                                                            </select>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                                <hr style="margin-left:auto;margin-right:auto">
                                <div class="grid_row grid_row_sum">
                                    <div class="grid_column_1_2">
                                        <p class="left_info">Subtotal</p>
                                    </div>
                                    <div class="grid_column_1_2">
                                        <p class="right_info">${cartCost}</p>
                                    </div>
                                </div>
                                <div class="grid_row grid_row_sum">
                                    <div class="grid_column_1_2">
                                        <p class="left_info">Shipping</p>
                                    </div>
                                    <div class="grid_column_1_2">
                                        <p class="right_info">$20</p>
                                    </div>
                                </div>
                                <p id="comment">(Standard Rate - Price may vary depending on the item/destination. Staff will contact you.)</p>
                                <div class="grid_row grid_row_sum">
                                    <div class="grid_column_1_2">
                                        <p class="left_info">TAX(10%)</p>
                                    </div>
                                    <div class="grid_column_1_2">
                                        <p class="right_info">${(cartCost * 0.1).toFixed(2)}
                                            <p>
                                    </div>
                                </div>
                                <div class="grid_row grid_row_sum">
                                    <div class="grid_column_1_2">
                                        <p class="left_info">VAT(20%)</p>
                                    </div>
                                    <div class="grid_column_1_2">
                                        <p class="right_info">${(cartCost * 0.15).toFixed(2)}</p>
                                    </div>
                                </div>
                                <div class="grid_row grid_row_sum">
                                    <div class="grid_column_1_2">
                                        <p class="left_info">Order Total</p>
                                    </div>
                                    <div class="grid_column_1_2 price">
                                        <p class="right_info">${(cartCost + cartCost * 0.1 + cartCost * 0.15 + 201).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" class="discharge" onclick="return confirm()">Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `
        deleteButtons();
        manageQuantity();
    }
}

function manageQuantity() {
    let decreaseButtons = document.querySelectorAll('.decrease');
    let increaseButtons = document.querySelectorAll('.increase');
    let currentQuantity = 0;
    let currentProduct = '';
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    for (let i = 0; i < increaseButtons.length; i++) {
        decreaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = decreaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = decreaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(currentProduct);

            if (cartItems[currentProduct].inCart > 1) {
                cartItems[currentProduct].inCart -= 1;
                cartNumbers(cartItems[currentProduct], "decrease");
                totalCost(cartItems[currentProduct], "decrease");
                localStorage.setItem('productsInCart', JSON.stringify(cartItems));
                displayCart();
            }
        });

        increaseButtons[i].addEventListener('click', () => {
            console.log(cartItems);
            currentQuantity = increaseButtons[i].parentElement.querySelector('span').textContent;
            console.log(currentQuantity);
            currentProduct = increaseButtons[i].parentElement.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(currentProduct);

            cartItems[currentProduct].inCart += 1;
            cartNumbers(cartItems[currentProduct]);
            totalCost(cartItems[currentProduct]);
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));
            displayCart();
        });
    }
}

function deleteButtons() {
    let deleteButtons = document.querySelectorAll('.cart ion-icon');
    let productNumbers = localStorage.getItem('cartNumbers');
    let cartCost = localStorage.getItem("totalCost");
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productName;
    console.log(cartItems);

    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            productName = deleteButtons[i].parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.querySelector('span').textContent;
            console.log(productName);
            localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
            localStorage.setItem('totalCost', cartCost - (cartItems[productName].price * cartItems[productName].inCart));

            delete cartItems[productName];
            localStorage.setItem('productsInCart', JSON.stringify(cartItems));

            displayCart();
            onLoadCartNumbers();
        })
    }
}

function show() {
    var f = document.getElementById("fill");
    if (f.style.display === "none") {
        f.style.display = "flex"
    } else {
        f.style.display = "none"
    }
}

function confirm() {
    var e = document.getElementById("email").value;
    var f = document.getElementById("f_name").value;
    var l = document.getElementById("l_name").value;
    var com = document.getElementById("company").value;
    var t = document.getElementById("town").value;
    var s = document.getElementById("street").value;
    var p = document.getElementById("phone").value;
    if (e == "" || f == "" || l == "" || com == "" || t == "" || s == "" || p == "") {
        alert("Please enter full information");
        return false;
    }
    localStorage.removeItem("productsInCart");
    localStorage.removeItem("totalCost");
    localStorage.removeItem("cartNumbers");
    alert("Payment success!! thanks for buying product from our store.");
    window.location.href = "http://127.0.0.1:5500/index.html";
    return true;
}