const saldo = 5530.75; 

const historico = [
    {tipo: "Entrada", valor: 1106.15},
    {tipo: "Saída", valor: 1659.22},
    {tipo: "Entrada", valor: 2765.38}
];

document.getElementById("saldo").innerText = saldo.toFixed(2);

const lista = document.getElementById("historico");

historico.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = `${item.tipo}: R$ ${item.valor.toFixed(2)}`;
    lista.appendChild(li);
})