function calcular() {
   
    let velocidade = document.getElementById("vel").value;
   
 
    velocidade = Number(velocidade);
 
   
    let resposta = document.getElementById("resp");
 
   
    if (velocidade > 60) {
        resposta.innerHTML = `<p style="color: red;">Você foi multado otário haha! Sua velocidade foi ${velocidade} km/h.</p>`;
    } else {
        resposta.innerHTML = `<p style="color: green;">Velocidade dentro do limite, boa cz. Dirija com segurança!</p>`;
    }
}
 