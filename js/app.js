/* ESPERA A PÁGINA CARREGAR */
document.addEventListener("DOMContentLoaded", function(){

    /* BOTÃO */
    const botao = document.getElementById("btnComecar");
    const botao2 = document.getElementById("botao2");
    if(botao || botao2){
        botao.addEventListener("click", function(){
            alert("Bem-vindo ao Interguide!");
            window.location.href = "login.html";
        });
        botao2.addEventListener("click", function(){
            alert("Bem-vindo ao Interguide!");
            window.location.href = "login.html";
        });
    }

    /* SLIDESHOW */
    const imagens = [
        "img/slide1.png",
        // "img/slide2.png",
        "img/slide3.png",
        "img/slide4.png",
        "img/slide5.png",
        "img/slide6.png",
        "img/slide7.png",
        "img/slide8.png"
    ];
    let imagemAtual = 0;
    const slide = document.getElementById("slide");
    function trocarImagem(){
        imagemAtual++;
        if(imagemAtual >= imagens.length){
            imagemAtual = 0;
        }
        slide.src = imagens[imagemAtual];
    }
    setInterval(trocarImagem, 3000);
});