const saldoAtual = 5530.75;
document.getElementById("transferencia-form").addEventListener ("submit", function(e){
    e.preventDefault();
    const destinatario = document.getElementById("destinatario"). value;
    const valor = parseFloat(document.getElementById("valor"). value);
    const msg = document.getElementById("mensagem")

    if(!destinatario || isNaN(valor) || valor <= 0) {
        msg.innerText = "Preencha todos os campos corretamente.";
        msg.style.color = "red"; return;
    }
    
    if(valor > saldoAtual){
        msg.innerText = "Saldo Insuficiente para esta transferência.";
        msg.style.color = "red"; return;
    
    }
     msg.innerText = `Transferência de R$ ${valor.toFixed(2)} para ${destinatario}`
     msg.style.color = "green";
})