const proyectos = [
  {
        id: 1,
        title: "E-Commers",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0R7cHQNmwEK8sreus_MLA8sP-ZtsLcYmwQ&s",
        elements: [
        {
            title: "Carrito de Compras",
            description: "Carrito con persistencia y actualizaciones dinámicas.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        },
        {
            title: "Página de Producto",
            description: "Vista detallada de productos, precios, y variantes.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        },
        {
            title: "Checkout Integrado",
            description: "Proceso de compra completo con validaciones.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        }
        ]
    },
    {
        id: 2,
        title: "WordPress Website",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0R7cHQNmwEK8sreus_MLA8sP-ZtsLcYmwQ&s",
        elements: [
        {
            title: "Tema personalizado",
            description: "Creación y adaptación de temas desde cero.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        },
        {
            title: "Plugins a medida",
            description: "Desarrollo de funcionalidades con plugins propios.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        },
        {
            title: "Web Corporativa",
            description: "Sitio institucional optimizado para SEO.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        }
        ]
    },
    {
        id: 3,
        title: "gigs/Resolucion de Bugs",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0R7cHQNmwEK8sreus_MLA8sP-ZtsLcYmwQ&s",
        elements: [
        {
            title: "Fix Login",
            description: "Resolución de errores de autenticación.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        },
        {
            title: "Compatibilidad mobile",
            description: "Ajustes para responsive en dispositivos móviles.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        },
        {
            title: "Integración APIs",
            description: "Solución a problemas en consumo de APIs externas.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        }
        ]
    },
    {
        id: 4,
        title: "Bases de Datos",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0R7cHQNmwEK8sreus_MLA8sP-ZtsLcYmwQ&s",
        elements: [
        {
            title: "Modelo relacional",
            description: "Diseño de ERD y relaciones SQL.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        },
        {
            title: "Consultas complejas",
            description: "JOINs, Subqueries y funciones agregadas.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        },
        {
            title: "Optimización de queries",
            description: "Indexación y análisis de rendimiento.",
            img: [
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" },
            { src: "https://via.placeholder.com/300x200" }
            ]
        }
        ]
    }
];

//Codigo para esconder nav
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

//Codigo para inyectar las opciones del nav
const opcionNav = document.getElementById("opcionNav");

proyectos.forEach(p => {
    const section = document.createElement("section");
    section.className = " d-flex justify-content-around";
    section.innerHTML=`
        <a class="navText text-white text-decoration-none" href="#" id="${p.id}">${p.title}</a>
    `;
    opcionNav.appendChild(section);
});


//Codigo paramostrar cards

const container = document.querySelector(".row");

// Renderizado dinámico:
proyectos.forEach(project => {
    const card = document.createElement("section");
    card.innerHTML = `
    <section class="card containerCard">
        <div class="card-bg" style="background-image: url('${project.img}');"></div>
            <section class="card-img-overlay">
                <section class="textCard">
                    <h5 class="card-title">${project.title}</h5>
                    <button class="btnCard" id="${project.id}">Ver más</button>
                </section>
            </section>
        </div>
        </section>
    `;
    container.appendChild(card);
});

//Codigo para el modal que muestra los proyectos

const landingCards = document.getElementById("landingCards");


