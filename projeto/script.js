
function clickMenu() {
    let itens = document.getElementById('itens');
    if (itens.style.display === 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}


function checkWidth() {
    let itens = document.getElementById('itens');
    if (window.innerWidth >= 768) {
        itens.style.display = 'flex'; 
    } else {
        itens.style.display = 'none'; 
    }
}


window.addEventListener('resize', checkWidth);
window.addEventListener('load', checkWidth);


function manipularArrays() {
    let produtos = ['Brinquedo', 'Roupinha', 'Livro', 'Cadeira', 'Cama'];
    console.log('Produtos disponíveis:');
    
   
    for (let i = 0; i < produtos.length; i++) {
        console.log(produtos[i]);
    }

   
    if (produtos.includes('Brinquedo')) {
        console.log('Produto disponível: Brinquedo');
    } else {
        console.log('Produto não disponível.');
    }
}


function showAlert() {
    alert('Você clicou no botão!');
}


function openAd() {
    window.open('https://www.exemplo.com', '_blank');
}


function printPage() {
    window.print(); 
}


setTimeout(function() {
    alert('Esta mensagem aparece apenas 5 segundos após o carregamento!');
}, 5000);


let intervalId = setInterval(function() {
    console.log('Mensagem exibida a cada 10 segundos');
}, 10000);


function stopInterval() {
    clearInterval(intervalId);
    console.log('Mensagens de intervalo paradas.');
}


function exemploTryCatch() {
    try {
        let numero = undefined;
        console.log(numero.toString()); 
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    }
}


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('Latitude:', position.coords.latitude);
            console.log('Longitude:', position.coords.longitude);
        }, function(error) {
            console.error('Erro ao obter localização: ', error);
        });
    } else {
        console.log('Geolocalização não é suportada neste navegador.');
    }
}


function reloadPage() {
    window.location.reload();
}


manipularArrays();
exemploTryCatch();
getLocation();
