function carregar() {
    // Função que pode ser utilizada para carregar alguma coisa ao iniciar a página
}

function verificarIdade() {
    const dataNascimento = new Date(document.getElementById('dataNascimento').value);
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNascimento.getFullYear();
    const mes = hoje.getMonth() - dataNascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNascimento.getDate())) {
        idade--;
    }

    let pronome = '';
    let senhorOuSenhora = '';
    let umaUm = '';
    let cons = '';
    let genero = '';

    if (document.getElementById('homem').checked) {
        pronome = 'ele';
        senhorOuSenhora = 'senhor';
        umaUm = 'um';
        cons = 'considerado';
        genero = 'm';
    } else if (document.getElementById('mulher').checked) {
        pronome = 'ela';
        senhorOuSenhora = 'senhora';
        umaUm = 'uma';
        cons = 'considerada';
        genero = 'f';
    }

    let categoria = '';
    let imagem = '';

    if (idade >= 0 && idade <= 2) {
        categoria = 'bebê';
        imagem = `${genero}_bebe.jfif`;  
    } else if (idade >= 3 && idade <= 13) {
        categoria = 'criança';
        imagem = `${genero}_crianca.jfif`;  
    } else if (idade >= 14 && idade <= 18) {
        categoria = 'adolescente';
        imagem = `${genero}_adolescente.jfif`;  
    } else if (idade >= 19 && idade <= 59) {
        categoria = 'adulto';
        imagem = `${genero}_adulto.jpg`;  
    } else if (idade >= 60 && idade <= 100) {
        categoria = 'idoso';
        imagem = `${genero}_idoso.jpg`;  
    } else if (idade >= 101) {
        categoria = 'morto';
        imagem = `${genero}_morto.jfif`;  
    }

    const resultado = `Você é ${umaUm} ${senhorOuSenhora} de ${idade} anos e é ${cons} ${categoria}.`;
    document.getElementById('resultado').innerText = resultado;
    document.getElementById('imagem').src = imagem;
}
