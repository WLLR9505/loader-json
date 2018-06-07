var viewer = document.getElementById('Data_Viewer');

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

loadJSON('./js/dados.json', function (response) {
    Show(response);
});

function Show (params) {
    var file = JSON.parse(params);

    //mantém a extrutura e exibe no console
    console.log(file);
    console.log(file.objeto.nome);
    console.log(file.objeto.descricao);

    //converte para texto e exibe no HTML
    let text = JSON.stringify(file, null, '\t');
    viewer.innerText = text;
}
