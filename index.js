const proyectos = [{
    title: "E-Commers",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0R7cHQNmwEK8sreus_MLA8sP-ZtsLcYmwQ&s"
},{
    title:"WordPress Website",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0R7cHQNmwEK8sreus_MLA8sP-ZtsLcYmwQ&s"
},{
    title: "gigs/Resolucion de Bugs",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0R7cHQNmwEK8sreus_MLA8sP-ZtsLcYmwQ&s"
},{
    title: "Bases de Datos",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0R7cHQNmwEK8sreus_MLA8sP-ZtsLcYmwQ&s"
}
]

const container = document.querySelector(".row");

// Renderizado dinámico:
proyectos.forEach(project => {
    const card = document.createElement("section");
    card.className = "col d-flex justify-content-around";
    card.innerHTML = `
    <section class="card containerCard">
        <div class="card-bg" style="background-image: url('${project.img}');"></div>
            <section class="card-img-overlay">
                <section class="textCard">
                    <h5 class="card-title">${project.title}</h5>
                    <button class="btnCard">Ver más</button>
                </section>
            </section>
        </div>
        </section>
    `;
    container.appendChild(card);
});