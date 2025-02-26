let altura = 0;
let largura = 0;
let vidas =1;
let tempo = 15;

let gerarTempo = 1500;

let vjNivel = window.location.search;
vjNivel = vjNivel.replace('?','');

if(vjNivel == "Normal"){
    gerarTempo = 1500;
}
else if(vjNivel == "Médio"){
    gerarTempo = 1000;
}
else if(vjNivel == "Difícil"){
    gerarTempo = 750;
}

function ajustaPalco(){
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(largura, altura);
}
ajustaPalco();

let VjCronometro = setInterval (function(){
    tempo -=1
    if(tempo < 0){
        clearInterval(VjCronometro);
        clearInterval (criarBB);
        window.location.href = "vitoria.html";
    }
    else{
    document.getElementById('meuCronometro').innerHTML = tempo
    }
},1000)

function posRandomica(){

        //remover o elemento bb(caso existir)

        if(document.getElementById('tempoBB')){
        document.getElementById('tempoBB').remove();

            if(vidas > 3){
               window.location.href= "finaljogo.html";
            }
        else{
        document.getElementById('v' + vidas ).src="sources/coracaov.png";
        vidas++;
        }
        }

    let posx = Math.floor(Math.random() * largura)-90;  
    let posy = Math.floor(Math.random() * altura)-90;
    
    posx = posx < 0?0:posx;
    posy = posy < 0?0:posy;

    console.log(posx, posy);

    let bb = document.createElement('img');
    bb.src = "sources/bb.png";
    bb.style.position = "absolute";  
    bb.style.left = `${posx}px`;   
    bb.style.top = `${posy}px`;     

    document.body.appendChild(bb);
    bb.className = tamanhoBB() +  ' ' + ladoAleatorio();
    bb.id='tempoBB';

   bb.onclick=function(){
    this.remove();
   }
}

function tamanhoBB (){
let classe = Math.floor(Math.random() * 3);


switch(classe){
    case 0:
        return 'bb01';
    case 1: 
        return 'bb02';
    case 2:
        return 'bb03';
}

}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2);


switch(classe){
    case 0:
        return 'ladoA';
    case 1: 
        return 'ladoB';

}

}
