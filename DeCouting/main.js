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
});
