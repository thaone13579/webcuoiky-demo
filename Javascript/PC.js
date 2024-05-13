let Login = localStorage.getItem("login");
if (Login == 1) {
    let carts = document.querySelectorAll('.buy-now');
    let products = [{
            name: 'GVN AXE M',
            tag: 'newPC1',
            catagory: 'PC',
            price: 9500000,
            inCart: 0
        },
        {
            name: 'GVN Titan M',
            tag: 'newPC2',
            catagory: 'PC',
            price: 10000000,
            inCart: 0
        },
        {
            name: 'GVN Ventus M',
            tag: 'newPC3',
            catagory: 'PC',
            price: 9500000,
            inCart: 0
        },
        {
            name: 'GVN Mystic M',
            tag: 'newPC4',
            catagory: 'PC',
            price: 14200000,
            inCart: 0
        },
        {
            name: 'GVN Ivy M',
            tag: 'newPC5',
            catagory: 'PC',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'GVN Ratchet M',
            tag: 'newPC6',
            catagory: 'PC',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'GVN Athen M',
            tag: 'newPC7',
            catagory: 'PC',
            price: 47400000,
            inCart: 0
        },
        {
            name: 'GVN Hextech S',
            tag: 'newPC8',
            catagory: 'PC',
            price: 28400000,
            inCart: 0
        },
        {
            name: 'GVN Ghost S',
            tag: 'newPC9',
            catagory: 'PC',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'GVN Phantom S',
            tag: 'newPC10',
            catagory: 'PC',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'GVN Volibear S',
            tag: 'newPC1',
            catagory: 'PC',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'GVN Garen S',
            tag: 'newPC3',
            catagory: 'PC',
            price: 16000000,
            inCart: 0
        },
        {
            name: 'GVN Valorant Z',
            tag: 'newPC5',
            catagory: 'PC',
            price: 16600000,
            inCart: 0
        },
        {
            name: 'GVN Avengers Z',
            tag: 'newPC7',
            catagory: 'PC',
            price: 1890000,
            inCart: 0
        },
        {
            name: 'GVN Phoenix Z',
            tag: 'newPC9',
            catagory: 'PC',
            price: 23700000,
            inCart: 0
        },
        {
            name: 'GVN Predator Z',
            tag: 'newPC2',
            catagory: 'PC',
            price: 38000000,
            inCart: 0
        },
        {
            name: 'GVN VISION Z',
            tag: 'newPC4',
            catagory: 'PC',
            price: 33100000,
            inCart: 0
        },
        {
            name: 'GVN ROG X',
            tag: 'newPC6',
            catagory: 'PC',
            price: 42600000,
            inCart: 0
        },
        {
            name: 'GVN Dragon X',
            tag: 'newPC8',
            catagory: 'PC',
            price: 52050000,
            inCart: 0
        },
        {
            name: 'GVN AORUS X',
            tag: 'newPC10',
            catagory: 'PC',
            price: 80500000,
            inCart: 0
        },

    ]

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