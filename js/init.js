const url = 'https://nataliasotelo.github.io/act-estrellas/estrellas.json'; 

document.addEventListener('DOMContentLoaded', function() {
    fetch(url) 
        .then(response => response.json())
        .then(data => {
            console.log(data); 
        })
        .catch(error => {
            console.error('Error:', error); // Captura cualquier error en la petición
        });
});