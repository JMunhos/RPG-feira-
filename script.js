

// Array para armazenar os dados da pontuação
let pontuacoes = [];

// Função para preencher a tabela com os dados
function preencherTabela() {
    const tabela = document.getElementById("tabela-pontuacao");
    const tbody = tabela.querySelector("tbody");
    tbody.innerHTML = "";

    pontuacoes.forEach((pontuacao) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${pontuacao.nome}</td>
            <td>${pontuacao.pontuacao}</td>
        `;
        tbody.appendChild(row);
    });
}

// Adicione um evento para salvar uma nova pontuação
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("salvar-pontuacao").addEventListener("click", function () {
    const nome = document.getElementById("nome-jogador").value;
    const pontuacao = parseInt(document.getElementById("pontuacao-jogador").value);

    if (nome && !isNaN(pontuacao)) {
        pontuacoes.push({ nome, pontuacao });
        preencherTabela();
    }
});


 
    const salvarPontuacaoBtn = document.getElementById("salvar-pontuacao");
    const pontuacaoInput = document.getElementById("pontuacao-jogador");
    const slidePontuacaoAlta = document.getElementById("slide-pontuacao-alta");
        const slidePontuacaoBaixa = document.getElementById("slide-pontuacao-baixa");

    salvarPontuacaoBtn.addEventListener("click", function () {
        const pontuacao = parseInt(pontuacaoInput.value);

        if (!isNaN(pontuacao)) {
            if (pontuacao >= 7) {
                slidePontuacaoAlta.style.display = "block";
                slidePontuacaoBaixa.style.display = "none";
            } else {
                slidePontuacaoAlta.style.display = "none";
                slidePontuacaoBaixa.style.display = "block";
            }
        }
    });
});
