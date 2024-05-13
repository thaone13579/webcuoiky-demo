function store() {
    var email = document.getElementById("email").value;
    var pw = document.getElementById("password").value;
    var dp = document.getElementById("display").value;
    var rpw = document.getElementById("re-password").value;

    if (email == "" || pw == "" || dp == "" || rpw == "") {
        alert("Please enter full information");
        return false;
    } else {
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", pw);
        localStorage.setItem("DisplayName", dp);
        // window.location = "https://baitapthuchanh1234.000webhostapp.com/Do_an/dangnhap.html";
        window.location.href = "http://127.0.0.1:5500/dangnhap.html";
        alert("Sign up Success");
        return false;
    }
}



function checklogin() {
    let storeEmail = localStorage.getItem("Email");
    let storePW = localStorage.getItem("Password");

    var email = document.getElementById("username").value;
    var pw = document.getElementById("password").value;

    if (email != storeEmail || pw != storePW) {
        alert("Email or password incorrect");
        return false;
        
    } else {
        localStorage.setItem("login", 1);
        // window.location = "https://baitapthuchanh1234.000webhostapp.com/Do_an/index.html";
        window.location.href = "http://127.0.0.1:5500/index.html";
        alert("Sign in success");
        return false;
    }
}

function logined() {
    let storeLG = localStorage.getItem("login");
    let storeDP = localStorage.getItem("DisplayName");
    // let selectUser = document.getElementById("UserName");
    // let selectLink = document.getElementById("login-link");
    let selectClass = document.querySelector(".header_account");
    if (storeLG == 1) {
        if (selectClass) {
            selectClass.innerHTML = ``;
            selectClass.innerHTML += `
            <a href="#"><i class="header_account_icon fas fa-user-circle"></i></a>
            <p class="user-display-name">${storeDP}</p>
            <a href="" onclick="logout()" class="log-out"><i class="fas fa-sign-out-alt"></i> Sign out</a>
            `;
        }
    }
}

function login() {
    let storeLG = localStorage.getItem("login");
    if (storeLG != null) return true;
    return false;
}

function logout() {
    localStorage.removeItem("login");
}

function showDialogCart() {
    if (login() == false) {
        alert("Please sign in to do that");
        return false;
    } else {
        // window.location = "https://baitapthuchanh1234.000webhostapp.com/Do_an/giohang.html";
        window.location.href  = "http://127.0.0.1:5500/giohang.html";
        return true;
    }
}

function showDialog() {
    if (login() == false) {
        alert("Please sign in to do that");
        return false;
    }
}