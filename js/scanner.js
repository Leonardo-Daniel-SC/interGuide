document.addEventListener('DOMContentLoaded', function(){

    // ELEMENTOS
    const imagemImput = document.getElementById('imagemInput');
    const preview = document.getElementById('preview');
    const extrairBtn = document.getElementById('extrairBtn');
    const textoExtraido = document.getElementById('textoExtraido');

    // PREVIW DA IMAGEM
    imagemImput.addEventListener('change', function(){
        const arquivo = imagemInput.files[0];

        if(arquivo){
            const leitor = new FileReader();
            leitor.onload = function(event){
                preview.src = event.target.result;
                preview.style.display = 'block';
            };
            leitor.readAsDataURL(arquivo);
        }
    });

    // EXTRAIR TEXTO
    extrairBtn.addEventListener('click', function(){
        if(preview.src === ""){
            alert('Escolha uma imagem primeiro!');
            return;
        }
        textoExtraido.innerHTML = 'Texto estraído da imagem.';
    });
});