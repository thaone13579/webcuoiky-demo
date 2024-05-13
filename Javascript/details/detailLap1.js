let Login = localStorage.getItem("login");
if (Login == 1) {
    let carts = document.querySelectorAll('.add-to-cart');
    let products = [{
        name: 'Lenovo Legion 5 15 - 120Hz',
        tag: 'Laptop1',
        catagory: 'Laptop',
        price: 499,
        inCart: 0
    }, ]

    for (let i = 0; i < carts.length; i++) {
        carts[i].addEventListener('click', () => {
            cartNumbers(products[i]);
            totalCost(products[i]);

        })
    }
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

onLoadCartNumbers();