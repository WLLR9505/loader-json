var viewer = document.getElementById('Data_Viewer');
var showJson = true;

function loadJSON (file, callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType('application/json');
    xhr.open('GET', file, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == '200') {
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}
if (showJson == true) {
    loadJSON('./js/dados.json', function (response) {
        Show(response);
    });
}

function Show (params) {
    var file = JSON.parse(params);

    //mantém a extrutura e exibe no console
    console.log(Object.entries(file));

    //converte para texto e exibe no HTML
    let text = JSON.stringify(file, null, '\t');
    viewer.innerText = text;
}

try {
    //tenta exportar para fazer testes no jest
    module.exports = { loadJSON };
} catch(e) {
    console.log('reader.js :: module.exports inutilizado');
}
