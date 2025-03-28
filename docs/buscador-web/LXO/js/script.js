function togglePDF() {
    var pdfViewer = document.getElementById("pdfViewer");
    var button = document.querySelector(".toggle-button");

    if (pdfViewer.style.display === "none" || pdfViewer.style.display === "") {
        pdfViewer.style.display = "block";
        button.textContent = "Ocultar Plan de Estudios ▲"; 
    } else {
        pdfViewer.style.display = "none";
        button.textContent = "Ver Plan de Estudios ▼"; 
    }
}

function openFullScreen() {
    var url = document.getElementById("pdfViewer").src;
    window.open(url, "_blank");
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}

function goToScholarshipCalculator() {
    window.open("https://fichas-precio.uvm.mx/", "_blank");
}

function goToCertifications() {
    document.getElementById('certifications-section').scrollIntoView({ behavior: "smooth" });
}

