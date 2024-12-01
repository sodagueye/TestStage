// menu
$(document).ready(function () {

    $(".nav-link").click(function () {

        $(".nav-link").removeClass("active");


        $(this).addClass("active");
    });
});




fetch('api/teacher.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        displayAuthors(data); // Appel de la fonction pour afficher les auteurs
    })
    .catch(error => console.error("Erreur lors du chargement des données JSON", error));

function displayAuthors(auteur) {
    const container = document.getElementById("auteurs-container");

    auteur.forEach(auteur => {
        const authorCard = document.createElement("div");
        authorCard.classList.add("col-md-3", "mt-4");

        authorCard.innerHTML = `
            <div class="card border border-0 m-3 defar">
                <img src="${auteur.image}" class="card-img-top" alt="${auteur.name}">
                <div class="card-body">
                    <h5 class="card-title auteur">${auteur.name}</h5>
                    <p class="card-text description">${auteur.description}</p>
                    <hr>
                    <div class="socials d-flex gap-4 text-black">
                        <a href="${auteur.socials[0].facebook}" class="" target="_blank"><i class="bi bi-facebook text-black"></i></a>
                        <a href="${auteur.socials[0].twitter}" class="" target="_blank"><i class="bi bi-twitter text-black"></i></a>
                        <a href="${auteur.socials[0].linkedin}" class="" target="_blank"><i class="bi bi-linkedin text-black"></i></a>
                        <a href="${auteur.socials[0].instagram}" class="" target="_blank"><i class="bi bi-instagram text-black"></i></a>
                    </div>
                </div>
            </div>
        `;

        container.appendChild(authorCard);
    });
}
