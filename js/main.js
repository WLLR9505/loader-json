var viewer = document.getElementById('Data_Viewer');
var file;
try {
    file = require('./dados.json');
    console.log('usando node');
} catch (e) {
    loadJSON('./js/dados.json', function (response) {
        loadedJSON(response);
    });
}

function loadedJSON (params) {
    file = JSON.parse(params);
    criaTabela(3, file.objeto);
}

function inserirConteudo (cel, conteudo) {
    if(conteudo.nome != undefined) {
        cel.innerText = conteudo.nome;
    }
    if(conteudo.descricao != undefined) {
        cel.innerText += '\n' + conteudo.descricao;
    }
    if(conteudo.img != undefined) {
        cel.innerText += '\n';
        var img = document.createElement('img');
        img.src = conteudo.img;
        cel.appendChild(img);
    }
}

function criaTabela (larguraMAX, conteudo = []) {                          //coluna x linha
    let nItens = conteudo.length;
    let nAtual = 0;
    var tabela = document.createElement('table');
    viewer.appendChild(tabela);

    for (var l = 0; l < nItens; l++) {
        var linha = document.createElement('tr');
        for (var c = 0; c < larguraMAX; c++) {
            if (conteudo[nAtual] == undefined) { break; }
            var coluna = document.createElement('td');
            coluna.style.width = 100 / larguraMAX + '%';
            var v = document.createElement('div');
            inserirConteudo(v, conteudo[nAtual]);
            coluna.appendChild(v);
            linha.appendChild(coluna);
            nAtual++;
        }
        tabela.appendChild(linha);
        if(nAtual == nItens) {
            break;
        }
    }
}
