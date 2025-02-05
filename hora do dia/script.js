function carregar() {
    var agora = new Date();
    var hora = agora.getHours();
    var minuto = agora.getMinutes();
    var horas = document.getElementById('horas');
    var img = document.getElementById('imagem');
    var corpo = document.body;

    var periodos = [
        { limite: 5, saudacao: 'Boa madrugada', cor: '#20100D', imagem: 'madrugada.jpg' },
        { limite: 12, saudacao: 'Bom dia', cor: '#33949B', imagem: 'manha.jfif' },
        { limite: 18, saudacao: 'Boa tarde', cor: '#C95E00', imagem: 'tarde.jfif' },
        { limite: 24, saudacao: 'Boa noite', cor: '#19375D', imagem: 'noite.jfif' }
    ];

    var periodo = periodos.find(p => hora <= p.limite);
    horas.innerText = `${periodo.saudacao}, agora são ${hora} hora ${minuto} min!`;
    img.src = periodo.imagem;
    corpo.style.backgroundColor = periodo.cor;
}
