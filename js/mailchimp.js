
document.getElementById('myForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que el formulario se envíe de forma tradicional
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const response = await fetch('https://webvisionservice.com/mailchimp-test/server.php', {
        method: 'POST',
        body: new URLSearchParams(data),
    });

    const result = await response.text();

    //Modal
    if (response.ok) {
        const myModal = new bootstrap.Modal(document.getElementById('successModal'));
        myModal.show();
    } else {
        alert(result);
    }
});

/* // Selecciona el botón de cerrar y el modal
document.getElementById('closeModalBtn').addEventListener('click', function () {
    // Obtén el modal con el ID 'successModal' y usa Bootstrap para cerrarlo
    var modal = document.getElementById('successModal');
    var modalInstance = bootstrap.Modal.getInstance(modal); // Obtén la instancia del modal
    modalInstance.hide();  // Cierra el modal
}); */


