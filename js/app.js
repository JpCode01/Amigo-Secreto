let amigosAdicionados = [];
let sorteado = [];
function adicionar() {
    let nomeAmigo = document.getElementById('nome-amigo').value;
    if (amigosAdicionados.includes(nomeAmigo)){
        alert('Erro! Nome já adicionado.');
        return;
    } else {
        amigosAdicionados.push(nomeAmigo);
    }
    
    document.getElementById('nome-amigo').value = '';
    amigosIncluidos();
}

function sortear() {
    if (amigosAdicionados.length <= 3) {
        alert('Erro! Adicione pelo menos 4 nomes.');
        reiniciar();
        return;
    }
    document.getElementById('lista-sorteio').innerHTML = '<p id="lista-sorteio"></p>'
    listaComSorteados();
}

function amigoSecretoSorteado() {
    let indice = amigosAdicionados.length

    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [amigosAdicionados[indice], amigosAdicionados[indiceAleatorio]] = 
            [amigosAdicionados[indiceAleatorio], amigosAdicionados[indice]];
    }
}
  

function listaComSorteados() {
    amigoSecretoSorteado();
    
    for (let i = 0; i < amigosAdicionados.length; i++) {

        if (i == amigosAdicionados.length - 1) {
            document.getElementById('lista-sorteio').innerHTML += amigosAdicionados[i] + ' --> ' + amigosAdicionados[0] + '<br>';
        } else {
            document.getElementById('lista-sorteio').innerHTML += amigosAdicionados[i] + ' --> ' + amigosAdicionados[i + 1] + '<br>';
        }

    }
}

function amigosIncluidos() {
    document.getElementById('lista-amigos').innerHTML = amigosAdicionados;
}

function reiniciar() {
    amigosAdicionados = [];
    nomes = '';
    document.getElementById('lista-sorteio').innerHTML = '<p id="lista-sorteio"></p>'
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('nome-amigo').value = '';
}