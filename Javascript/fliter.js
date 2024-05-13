function filterFunction() {
    var input, filter, text, ul, li, a, i;
    input = document.getElementById("myInput");
    text = input.value;
    if (text.length > 0) {
        filter = text.toUpperCase();
    }

    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        // || a[i].innerText
        txtValue = a[i].textContent;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "block";
        } else if (txtValue.toUpperCase().indexOf(filter) <= -1) {
            a[i].style.display = "none";
        }
    }

    if (filter == "ALL") {
        for (i = 0; i < a.length; i++) {
            a[i].style.display = "block";
        }
    }
}