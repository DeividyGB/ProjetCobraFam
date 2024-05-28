document.addEventListener('DOMContentLoaded', function () {
    const partnerForm = document.getElementById('partnerForm');
    const partnerList = document.getElementById('partnerList');

    partnerForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const partnerName = document.getElementById('partnerName').value;

        if (partnerName.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const partnerItem = document.createElement('li');
        partnerItem.textContent = partnerName;
        partnerList.appendChild(partnerItem);

        partnerForm.reset();
    });
});
