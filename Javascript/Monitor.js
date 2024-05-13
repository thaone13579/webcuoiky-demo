let Login = localStorage.getItem("login");
if (Login == 1) {
    let carts = document.querySelectorAll('.buy-now');
    let products = [{
            name: 'Monitor Gaming MSI Optix G273QF - IPS/ WQHD/ 165Hz',
            tag: 'newmonitor1',
            catagory: 'Monitor',
            price: 9500000,
            inCart: 0
        },
        {
            name: 'Monitor Asus TUF Gaming VG34VQL1B VA/ WQHD/ 165HZ',
            tag: 'newmonitor2',
            catagory: 'Monitor',
            price: 10000000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Viewsonic VX2882-4KP IPS/ UHD / 150Hz',
            tag: 'newmonitor3',
            catagory: 'Monitor',
            price: 9500000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Viewsonic VX2705-2KP-MHD IPS/ QHD /',
            tag: 'newmonitor4',
            catagory: 'Monitor',
            price: 14200000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming LG 24GN600-B IPS/ FullHD/ 144Hz',
            tag: 'newmonitor5',
            catagory: 'Monitor',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming MSI Optix MAG271C VA/FHD/144hz',
            tag: 'newmonitor6',
            catagory: 'Monitor',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Gigabyte Monitor G24F IPS/FHD/165Hz',
            tag: 'newmonitor7',
            catagory: 'Monitor',
            price: 47400000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming AOC 24G2E IPS/ FHD/ 144Hz',
            tag: 'newmonitor8',
            catagory: 'Monitor',
            price: 28400000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming ViewSonic VX3418-2KPC VA/2K/144Hz',
            tag: 'newmonitor9',
            catagory: 'Monitor',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Gigabyte G27FCA-EK VA/ Full HD/ 165Hz',
            tag: 'newmonitor10',
            catagory: 'Monitor',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Asus ROG STRIX XG27UQ IPS/ 4K/ 144Hz',
            tag: 'newmonitor1',
            catagory: 'Monitor',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming MSI Optix MAG274QRF IPS/ WQHD/ 165HZ',
            tag: 'newmonitor3',
            catagory: 'Monitor',
            price: 16000000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming LG 27GP850-B NanoIPS/ 2K/ 165Hz',
            tag: 'newmonitor5',
            catagory: 'Monitor',
            price: 16600000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming LG 27GN800-B IPS/ 2K/ 144Hz',
            tag: 'newmonitor7',
            catagory: 'Monitor',
            price: 18900000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming LG 27GN600-B IPS/ FullHD/ 144Hz',
            tag: 'newmonitor9',
            catagory: 'Monitor',
            price: 23700000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming AOC 24B1XH5/74 IPS/ Full HD / 75Hz',
            tag: 'newmonitor2',
            catagory: 'Monitor',
            price: 37900000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Cooler Master GM34-CW VA/ UWQHD/ 144Hz',
            tag: 'newmonitor4',
            catagory: 'Monitor',
            price: 33100000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Cooler Master GM27-CF VA/ FullHD/ 165Hz',
            tag: 'newmonitor6',
            catagory: 'Monitor',
            price: 42600000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming MSI Optix G242 IPS/ FHD/ 144Hz',
            tag: 'newmonitor8',
            catagory: 'Monitor',
            price: 52050000,
            inCart: 0
        },
        {
            name: 'Monitor Asus TUF Gaming VG27VH1B VA/FullHD/144Hz/1ms',
            tag: 'newmonitor10',
            catagory: 'Monitor',
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