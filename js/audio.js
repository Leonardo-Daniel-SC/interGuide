document.addEventListener("DOMContentLoaded", function(){
    const iniciarBtn = document.getElementById("iniciarBtn");
    const pararBtn = document.getElementById("pararBtn");
    const transcricao = document.getElementById("transcricao");
    const pdfBtn = document.getElementById("pdfBtn");
    const txtBtn = document.getElementById("txtBtn");

    /* INICIAR */
    iniciarBtn.addEventListener("click", function(){
        alert("Gravação iniciada!");
        transcricao.value =
        "Professor explicou lógica de programação e manipulação do DOM em JavaScript.";
    });

    /* PARAR */
    pararBtn.addEventListener("click", function(){
        alert("Gravação finalizada!");
    });

    /* EXPORTAR PDF */
    pdfBtn.addEventListener("click", function(){
        alert("PDF exportado com sucesso!");
    });

    /* EXPORTAR TXT */
    txtBtn.addEventListener("click", function(){
        alert("TXT exportado com sucesso!");
    });
});