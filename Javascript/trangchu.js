let Login = localStorage.getItem("login");
if (Login == 1) {
    let carts = document.querySelectorAll('.buy-now');
    let products = [{
            name: 'Laptop ACER Aspire 5 - 144Hz - I5',
            tag: 'Laptop3',
            catagory: 'Laptop',
            price: 9500000,
            inCart: 0
        },
        {
            name: 'Lenovo Legion 5 15 - 120Hz',
            tag: 'Laptop1',
            catagory: 'Product details',
            price: 12000000,
            inCart: 0
        },
        {
            name: 'Lenovo IdeaPad Gaming 3 15',
            tag: 'Laptop2',
            catagory: 'Product details',
            price: 15500000,
            inCart: 0
        },
        {
            name: 'ASUS TUF Dash F15',
            tag: 'detailLaptop3',
            catagory: 'Product details',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'Laptop MSI gaming PRO I9-11100k - 240Hz',
            tag: 'Laptop4',
            catagory: 'Laptop',
            price: 22500000,
            inCart: 0
        },
        {
            name: 'HP Omen i5 10400F RTX 2060',
            tag: 'PC1',
            catagory: 'Product details',
            price: 8050000,
            inCart: 0
        },
        {
            name: 'Titan M - G6405 - GT1030 - 8GB',
            tag: 'newPC2',
            catagory: 'PC',
            price: 10700000,
            inCart: 0
        },
        {
            name: 'CyberPowerPC Infinity X109 Gaming PC',
            tag: 'PC2',
            catagory: 'Product details',
            price: 28400000,
            inCart: 0
        },
        {
            name: 'Phamtom S - I5 11400F - GTX 3060 - 16GB',
            tag: 'newPC4',
            catagory: 'PC',
            price: 40200000,
            inCart: 0
        },
        {
            name: 'Alienware Aurora R12 - 32GB i5 11400F–Core i9 11900KF',
            tag: 'PC3',
            catagory: 'Product details',
            price: 45000000,
            inCart: 0
        },
        {
            name: 'Monitor Asus TUF Gaming VG34VQL1B VA/ WQHD/ 165HZ',
            tag: 'newmonitor1',
            catagory: 'Monitor',
            price: 9500000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Viewsonic VX2882-4KP IPS/ UHD / 150Hz',
            tag: 'newmonitor2',
            catagory: 'Monitor',
            price: 10700000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming MSI Optix MAG274QRF IPS/ WQHD/ 165HZ',
            tag: 'newmonitor3',
            catagory: 'Monitor',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming LG 24GN600-B IPS/ FullHD/ 144Hz',
            tag: 'newmonitor4',
            catagory: 'Monitor',
            price: 23700000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming AOC 24G2E IPS/ FHD/ 144Hz',
            tag: 'newmonitor5',
            catagory: 'Monitor',
            price: 33100000,
            inCart: 0
        },
        {
            name: 'Ratchet M - I5 11400F - GT2060 - 16GB',
            tag: 'newPC6',
            catagory: 'PC',
            price: 16600000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Asus ROG STRIX XG27UQ IPS/ 4K/ 144Hz',
            tag: 'newmonitor6',
            catagory: 'Monitor',
            price: 12000000,
            inCart: 0
        },
        {
            name: 'Titan M - G6405 - GT1030 - 8GB',
            tag: 'Laptop6',
            catagory: 'Laptop',
            price: 10700000,
            inCart: 0
        },
        {
            name: 'Volibear S - I8 11400F - GTX 1650Ti - 16GB',
            tag: 'newPC8',
            catagory: 'PC',
            price: 23700000,
            inCart: 0
        },
        {
            name: 'Laptop Asus X413JA 90NB0RC8 - I9 - 240hz - 16GB',
            tag: 'Laptop7',
            catagory: 'Laptop',
            price: 26000000,
            inCart: 0
        },
        {
            name: 'Laptop Asus Vivobook M513UA-L1240T - AMD Ryzen 7',
            tag: 'Laptop8',
            catagory: 'Laptop',
            price: 45000000,
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