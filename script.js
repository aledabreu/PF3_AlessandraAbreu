

const calcular = document.getElementById('calcular');

function calculos(){
    const nome = document.getElementById('nome').value;
    const valor = document.getElementById('valor').value;
    const taxa = document.getElementById('taxa').value;
    const parcelas = document.getElementById('parcelas').value;
    const resultado = document.getElementById('resultado');

    if (nome != '' && valor != '' && parcelas != '' && taxa != '') {
        const i = taxa / 100;
        const lele = ((1+i)**parcelas)-1;
        const valorfinal = 100*(lele/i).toFixed(2);
           
        resultado.textContent = ` ${nome}! se voce aplicar ${valor}, a taxa de juros de ${taxa}% ao mes, durante ${parcelas}meses, acumulara uma poupança de aproximadamente ${valorfinal}. `;
    }else {
        resultado.textContent = 'Para que o calculo seja efetuado preencha todos os campos.';
    }

}
calcular.addEventListener('click', calculos);