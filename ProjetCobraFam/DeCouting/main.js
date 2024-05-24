document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');

    menuButton.addEventListener('click', function () {
        sidebar.classList.add('open');
        overlay.classList.add('show');
    });

    closeButton.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });

    overlay.addEventListener('click', function () {
        sidebar.classList.remove('open');
        overlay.classList.remove('show');
    });

    const button = document.getElementById("navbutton");
    const modal = document.getElementById("modal");
    const closeModal = document.querySelector(".close-modal");

    button.addEventListener("click", () => {
        modal.style.display = "block";
        overlay.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });
});
