const licenciaturas = [
    { name: "Administración de Empresas", url: "licenciaturas/admin_empresas.html" },
    { name: "Derecho", url: "licenciaturas/derecho.html" },
    { name: "Ingeniería en Sistemas", url: "licenciaturas/ing_sistemas.html" },
    { name: "Psicología", url: "licenciaturas/psicologia.html" },
    { name: "Medicina", url: "licenciaturas/medicina.html" },
    { name: "Arquitectura", url: "licenciaturas/arquitectura.html" }
];

const fuse = new Fuse(licenciaturas, {
    keys: ['name'],
    threshold: 0.3
});

document.getElementById("searchBox").addEventListener("input", function() {
    const query = this.value;
    const results = fuse.search(query);
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    results.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("result-item");
        div.innerHTML = `<a href="${item.item.url}">${item.item.name}</a>`;
        resultsDiv.appendChild(div);
    });
});
