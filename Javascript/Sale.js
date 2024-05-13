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
            name: 'AXE M - I3 10100F - GT730 - 8GB',
            tag: 'newPC1',
            catagory: 'PC',
            price: 11477000,
            inCart: 0
        },
        {
            name: 'Titan M - G6405 - GT1030 - 8GB',
            tag: 'newPC2',
            catagory: 'PC',
            price: 11477000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Asus ROG STRIX XG27UQ IPS/ 4K/ 144Hz',
            tag: 'newmonitor1',
            catagory: 'Monitor',
            price: 16077000,
            inCart: 0
        },
        {
            name: 'Laptop Gaming Dell Alienware m15 - R6 - 01NS i7-',
            tag: 'Laptop5',
            catagory: 'Laptop',
            price: 20677000,
            inCart: 0
        },
        {
            name: 'Ratchet M - I5 11400F - GT2060 - 16GB',
            tag: 'newPC3',
            catagory: 'PC',
            price: 17917000,
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
            name: 'Garen S - I7 11700F - RTX 3070 - 16GB',
            tag: 'newPC4',
            catagory: 'PC',
            price: 45977000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Viewsonic VX2882-4KP IPS/ UHD / 150Hz',
            tag: 'newmonitor2',
            catagory: 'Monitor',
            price: 18377000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming MSI Optix MAG274QRF IPS/ WQHD/ 165HZ',
            tag: 'newmonitor3',
            catagory: 'Monitor',
            price: 18377000,
            inCart: 0
        },
        {
            name: 'Laptop Gaming Acer Nitro 5 EagleV i5 8GB',
            tag: 'Laptop11',
            catagory: 'Laptop',
            price: 20677000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming LG 24GN600-B IPS/ FullHD/ 144Hz',
            tag: 'newmonitor4',
            catagory: 'Monitor',
            price: 15709000,
            inCart: 0
        },
        {
            name: 'Hextech S - I5 11400F - GTX 1650Ti - 16GB',
            tag: 'newCP5',
            catagory: 'PC',
            price: 16077000,
            inCart: 0
        },
        {
            name: 'Laptop Acer Gaming Nitro 5 2021 Ryzen 5-5600H',
            tag: 'Laptop14',
            catagory: 'Laptop',
            price: 25277000,
            inCart: 0
        },
        {
            name: 'LAPTOP ASUS ROG Zephyrus G14 R9-5900HS',
            tag: 'Laptop15',
            catagory: 'Laptop',
            price: 19500000,
            inCart: 0
        },
        {
            name: 'Laptop Acer Predator Triton 300',
            tag: 'newPC6',
            catagory: 'PC',
            price: 1520,
            inCart: 0
        },
        {
            name: 'Monitor Gaming AOC 24G2E IPS/ FHD/ 144H',
            tag: 'newmonitor6',
            catagory: 'Monitor',
            price: 34900000,
            inCart: 0
        },
        {
            name: 'Laptop MSI Strix SCAR GF65 Thin 10UE i7',
            tag: 'Laptop18',
            catagory: 'Laptop',
            price: 40900000,
            inCart: 0
        },
        {
            name: 'Monitor Gaming Asus ROG STRIX XG27UQ IPS/ 4K/ 144Hz',
            tag: 'newmonitor7',
            catagory: 'Monitor',
            price: 50577000,
            inCart: 0
        },
        {
            name: 'Volibear S - I8 11400F - GTX 1650Ti - 16GB',
            tag: 'newPC7',
            catagory: 'PC',
            price: 73577000,
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