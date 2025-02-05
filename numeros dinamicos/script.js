let select = document.getElementById('fnum');
let flista = document.getElementById('flista');
let res = document.getElementById('res');

// Popula o select com números de 0 a 100
for (let i = 0; i <= 100; i++) {
    let option = document.createElement('option');
    option.value = i;
    option.text = i;
    select.appendChild(option);
}

let numeros = [];

function adicionar() {
    let numero = parseInt(select.value);

    // Verificando se o valor é um número válido
    if (isNaN(numero)) {
        alert('Por favor, selecione um número válido.');
        return;
    }

    // Verificando se o número já foi adicionado
    if (numeros.includes(numero)) {
        alert(`O número ${numero} já foi adicionado!`);
        return;
    }

    // Verificando se o número está entre 0 e 100
    if (numero < 0 || numero > 100) {
        alert('Por favor, insira um número entre 0 e 100.');
        return;
    }

    numeros.push(numero);

    let option = document.createElement('option');
    option.text = `Valor ${numero} adicionado`;
    flista.appendChild(option);

    res.innerHTML = ''; // Limpa a div de resultados
    select.value = ''; // Reseta o input de seleção
}

function finalizar() {
    if (numeros.length === 0) {
        alert('Adicione valores antes de finalizar!');
        return;
    }

    numeros.sort((a, b) => a - b);

    let totalNumeros = numeros.length;
    let maiorNumero = numeros[totalNumeros - 1];
    let menorNumero = numeros[0];
    let somaTotal = 0;

    for (let i = 0; i < totalNumeros; i++) {
        somaTotal += numeros[i];
    }

    let media = somaTotal / totalNumeros;

    res.innerHTML = `
    <p>Total de números cadastrados: ${totalNumeros}</p>
    <p>Maior número: ${maiorNumero}</p>
    <p>Menor número: ${menorNumero}</p>
    <p>Soma de todos os valores: ${somaTotal}</p>
    <p>Média de todos os números: ${media.toFixed(2)}</p>
    `;
}
