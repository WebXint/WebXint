
function toggleDropdown() {
    var menu = document.getElementById("dropdownContent");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

window.addEventListener("click", function (e) {
    if (!e.target.matches(".navbar a")) {
        var dropdown = document.getElementById("dropdownContent");
        if (dropdown && dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
});
