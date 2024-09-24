const url = 'https://nataliasotelo.github.io/act-estrellas/estrellas.json';

document.addEventListener('DOMContentLoaded', function() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const Listado = data.map(user => ({
                name: user.name,
                company: user.company,
                stars: '★'.repeat(user.numberrange)
            }));

            // Nueva parte: obtener el contenedor donde se agregarán las tarjetas**
            const relatedProductsContainer = document.getElementById('related-products-container');
            relatedProductsContainer.classList.add('row');

            // Nueva parte: recorrer los datos para crear elementos dinámicos**
            Listado.forEach(user => {
                const userElement = document.createElement('div');
                userElement.classList.add('col-md-4', 'col-lg-3', 'mb-4');

             // Nueva parte: crear el contenido HTML dinámicamente**
                userElement.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${user.name}</h5>
                            <p class="card-text">Compañía: ${user.company}</p>
                            <p class="card-text">Estrellas: ${user.stars}</p>
                        </div>
                    </div>
                `;

                // Nueva parte: agregar el nuevo elemento al contenedor**
                relatedProductsContainer.appendChild(userElement);

                console.log(`Nombre: ${user.name}\nCompañía: ${user.company}\nEstrellas: ${user.stars}\n`);
            });

        })
        .catch(error => {
            console.error('Error:', error);
        });
});
