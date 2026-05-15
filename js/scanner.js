document.addEventListener('DOMContentLoaded', function(){

    // ELEMENTOS
    const imagemImput = document.getElementById('imagemInput');
    const preview = document.getElementById('preview');
    const extrairBtn = document.getElementById('extrairBtn');
    const textoExtraido = document.getElementById('textoExtraido');


    // EXTRAIR TEXTO
    extrairBtn.addEventListener('click', function(){
        textoExtraido.innerHTML = `onde está a prova?
no drive 'd:' da máquina. arquivo: 
"checkpoint01.....pdf
como fazer a prova?
desenvolva o código em um arquivo.py
como enviar a prova p/ nac?
antes
-comprima o arquivo.py em um
arquivo.zip
-entre na nac: link: nac.fiap.com.br
insira o login e senha que você usa
para logar na máquina
-procure o arq.zip e o anexe
-envie
-confirme no projetor se o arq. foi enviado
        `;
    });
});