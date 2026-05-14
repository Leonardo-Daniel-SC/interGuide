/* ESPERA A PÁGINA CARREGAR */

document.addEventListener("DOMContentLoaded", function(){


    /* BOTÃO */

    const botao = document.getElementById("btnComecar");

    if(botao){

        botao.addEventListener("click", function(){

            alert("Bem-vindo ao Interguide!");

            window.location.href = "login.html";

        });

    }


    /* SLIDESHOW */

    const imagens = [
        "img/slide1.jpg",
        "img/slide2.jpg",
        "img/slide3.jpg"
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