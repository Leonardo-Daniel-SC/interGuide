document.addEventListener("DOMContentLoaded", function(){

    /* GUIA */
    const guiaBtn = document.querySelector(".guiaBtn");
    guiaBtn.addEventListener("click", function(){
       window.location.href = "guia.html";
    });

    /* SCANNER */
    const scannerBtn = document.querySelector(".scannerBtn");
    scannerBtn.addEventListener("click", function(){
        window.location.href = "scanner.html";
    });

    /* ÁUDIO */
    const audioBtn = document.querySelector(".audioBtn");
    audioBtn.addEventListener("click", function(){
        window.location.href = "audio.html";
    });

    /* TEMA */
    const temaBtn = document.querySelector(".temaBtn");
    temaBtn.addEventListener("click", function(){
        document.body.classList.toggle("dark");
    });
});