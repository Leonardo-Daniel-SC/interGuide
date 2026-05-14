/* ESPERA A PÁGINA CARREGAR */

document.addEventListener("DOMContentLoaded", function(){

    /* PEGA O FORMULÁRIO */
    const formulario = document.getElementById("loginForm");

    /* EVENTO DE ENVIO */
    formulario.addEventListener("submit", function(event){

        /* impede recarregar a página */
        event.preventDefault();

        /* pega os valores */
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        /* VALIDAÇÕES */
        if(email === "" || senha === ""){
            alert("Preencha todos os campos!");
            return;
        }
        if(senha.length < 6){
            alert("A senha deve ter pelo menos 6 caracteres!");
            return;
        }
        if(email !== "usuario@fiap.com" || senha !== "123456"){
            alert("Email ou senha incorretos!");
            return;
        }

        /* LOGIN OK */
        alert("Login realizado com sucesso!");

        /* REDIRECIONA */
        window.location.href = "dashboard.html";
    });
});