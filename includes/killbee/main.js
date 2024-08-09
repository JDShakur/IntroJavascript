
var larg = 0
var altu= 0
var num = 1
var timer = 11

function janela() {
    larg = window.innerWidth
    altu = window.innerHeight
    console.log(altu, larg)
}


var cronometro = setInterval(function() {
    timer -= 1
    if (timer < 0) {
        clearInterval(cronometro)
        clearInterval(criamosca)
        window.location.href= 'vitoria.html'
    }
    else {
        document.getElementById('relogio').innerHTML = timer
    }
}, 1000)


function x() {
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (num > 3) {
            window.location.href= 'fim_de_jogo.html'
        }
        else{
            document.getElementById('vida' + num).src = 'image/coracao_vazio.png'
            num++
        }
    }
    var axis_x = Math.floor(Math.random() * larg) - 90
    var axis_y = Math.floor(Math.random() * altu) - 90

    axis_x = axis_x < 0 ? 0 : axis_x
    axis_y = axis_y < 0 ? 0 : axis_y

    var mosquito = document.createElement('img')
    mosquito.src = 'https://terraria.wiki.gg/images/6/60/Queen_Bee.gif'
    mosquito.className = tipo() + ' ' + figLado()
    mosquito.style.left = axis_x + 'px'
    mosquito.style.top = axis_y + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {this.remove()}
}

function tipo() {
    var size = Math.floor(Math.random() * 3)
    switch (size) {
        case 0: return 'mosca1'
        case 1: return 'mosca2'
        case 2: return 'mosca3'
    }
}

function figLado() {
    var lado = Math.floor(Math.random() * 2)
    switch (lado) {
        case 0: return 'ladoA'
        case 1: return 'ladoB'
    }
}

janela()









































    
