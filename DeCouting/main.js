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
    const cancelButton = document.getElementById("cancelButton");
    const purchaseForm = document.getElementById("purchaseForm");
    const entriesContainer = document.getElementById("entriesContainer");

    button.addEventListener("click", () => {
        modal.style.display = "block";
        overlay.style.display = "block";
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    cancelButton.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    overlay.addEventListener("click", () => {
        modal.style.display = "none";
        overlay.style.display = "none";
    });

    purchaseForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const entryType = document.getElementById("entryType").value;
        const description = document.getElementById("description").value;
        const value = document.getElementById("value").value;
        const date = document.getElementById("date").value;
        const details = document.getElementById("details").value;

        const entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");
        entryDiv.innerHTML = `
            <h3>${entryType.charAt(0).toUpperCase() + entryType.slice(1)}</h3>
            <p><strong>Descrição:</strong> ${description}</p>
            <p><strong>Valor:</strong> R$ ${value}</p>
            <p><strong>Data:</strong> ${date}</p>
            <p><strong>Detalhes:</strong> ${details}</p>
        `;

        entriesContainer.appendChild(entryDiv);

        modal.style.display = "none";
        overlay.style.display = "none";
        purchaseForm.reset();
    });
});
