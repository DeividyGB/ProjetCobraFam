function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", function() {
    var menuButton = document.querySelector(".menu-button");
    var closeButton = document.querySelector(".close-button");
    var overlay = document.getElementById("overlay");
    
    menuButton.addEventListener("click", toggleSidebar);
    closeButton.addEventListener("click", toggleSidebar);
    overlay.addEventListener("click", toggleSidebar);
});
