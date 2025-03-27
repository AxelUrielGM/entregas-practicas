const CienciasSociales = [
    { name: "Administración Pública", url: "LXO/CienciasSociales/administracion-publica.html" },
    { name: "Criminología", url: "LXO/CienciasSociales/criminologia.html" },
    { name: "Derecho", url: "LXO/CienciasSociales/derecho.html" },
    { name: "Historia", url: "LXO/CienciasSociales/historia.html" },
    { name: "Lengua y Literatura", url: "LXO/CienciasSociales/lengua-literatura.html" },
    { name: "Lenguas Extranjeras", url: "LXO/CienciasSociales/lenguas-extranjeras.html" },
    { name: "Licenciatura Ejecutiva en Ciencias de la Comunicación Online", url: "LXO/CienciasSociales/ciencias-comunicacion.html" },
    { name: "Licenciatura Ejecutiva en Educación Online", url: "LXO/CienciasSociales/educacion.html" },
    { name: "Licenciatura Ejecutiva en Pedagogía", url: "LXO/CienciasSociales/pedagogia.html" },
    { name: "Licenciatura Ejecutiva en Relaciones Públicas", url: "LXO/CienciasSociales/relaciones-publicas.html" },
    { name: "Relaciones Internacionales", url: "LXO/CienciasSociales/relaciones-internacionales.html" },
    { name: "Seguridad Pública", url: "LXO/CienciasSociales/seguridad-publica.html" },
    { name: "Sociología", url: "LXO/CienciasSociales/sociologia.html" }
];

const DisenoArteArquitectura = [
    { name: "Arquitectura", url: "LXO/DisenoArteArquitectura/arquitectura.html" },
    { name: "Diseño de Interiores", url: "LXO/DisenoArteArquitectura/diseno-interiores.html" },
    { name: "Diseño Digital", url: "LXO/DisenoArteArquitectura/diseno-digital.html" },
    { name: "Diseño y Comunicación Gráfica", url: "LXO/DisenoArteArquitectura/diseno-comunicacion-grafica.html" }
];

const HospitalidadTurismoGastronomia = [
    { name: "Administración Turística y Hotelera", url: "LXO/HospitalidadTurismoGastronomia/administracion-turistica-hotelera.html" },
    { name: "Gastronomía", url: "LXO/HospitalidadTurismoGastronomia/gastronomia.html" }
];

const Ingenierias = [
    { name: "Desarrollo de Videojuegos", url: "LXO/Ingenierias/desarrollo-videojuegos.html" },
    { name: "Ing. en Ciencia de Datos Online", url: "LXO/Ingenierias/ciencia-datos.html" },
    { name: "Ing. en Diseño de Software y Redes", url: "LXO/Ingenierias/diseno-software-redes.html" },
    { name: "Ing. en Electrónica", url: "LXO/Ingenierias/electronica.html" },
    { name: "Ing. en Física", url: "LXO/Ingenierias/fisica.html" },
    { name: "Ing. en Matemáticas", url: "LXO/Ingenierias/matematicas.html" },
    { name: "Ing. en Mecatrónica", url: "LXO/Ingenierias/mecatronica.html" },
    { name: "Ing. en Negocios y Manufactura", url: "LXO/Ingenierias/negocios-manufactura.html" },
    { name: "Ing. en Tecnologías y Sistemas de la Información", url: "LXO/Ingenierias/tecnologias-sistemas.html" },
    { name: "Ingeniería en Logística Online", url: "LXO/Ingenierias/logistica.html" },
    { name: "Ingeniería Industrial y de Sistemas Online", url: "LXO/Ingenierias/industrial-sistemas.html" }
];

const Negocios = [
    { name: "Actuaría", url: "LXO/Negocios/actuaria.html" },
    { name: "Administración de Empresas del Entretenimiento", url: "LXO/Negocios/administracion-entretenimiento.html" },
    { name: "Administración de Negocios Internacionales", url: "LXO/Negocios/negocios-internacionales.html" },
    { name: "Administración de Recursos Humanos", url: "LXO/Negocios/recursos-humanos.html" },
    { name: "Comercio y Logística Internacionales", url: "LXO/Negocios/comercio-logistica.html" },
    { name: "Contaduría Pública y Finanzas", url: "LXO/Negocios/contaduria-finanzas.html" },
    { name: "Economía y Finanzas", url: "LXO/Negocios/economia-finanzas.html" },
    { name: "Estrategia y Gestión de Ventas", url: "LXO/Negocios/gestion-ventas.html" },
    { name: "Finanzas y Banca", url: "LXO/Negocios/finanzas-banca.html" },
    { name: "Licenciatura Ejecutiva en Administración de Empresas Online", url: "LXO/Negocios/administracion-empresas.html" },
    { name: "Mercadotecnia", url: "LXO/Negocios/mercadotecnia.html" },
    { name: "Mercadotecnia y Publicidad en Entornos Digitales", url: "LXO/Negocios/mercadotecnia-digital.html" }
];


const allPrograms = [
    ...CienciasSociales,
    ...DisenoArteArquitectura,
    ...HospitalidadTurismoGastronomia,
    ...Ingenierias,
    ...Negocios
];

const fuse = new Fuse(allPrograms, {
    keys: ['name'],
    threshold: 0.3
});

document.getElementById("searchBox").addEventListener("input", function() {
    const query = this.value;
    const results = fuse.search(query);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    results.forEach(result => {
        const div = document.createElement("div");
        div.classList.add("result-item");
        div.innerHTML = `<a href="${result.item.url}">${result.item.name}</a>`;
        resultsDiv.appendChild(div);
    });
});

