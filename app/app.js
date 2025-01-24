/*

O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
Aqui você deverá desenvolver a lógica para resolver o problema.

*/

// Array para armazenar os nomes dos amigos
let listaDeAmigos = []

// API para exibir texto na tela e narrar
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto)
        utterance.lang = 'pt-BR'
        utterance.rate = 1.2
        window.speechSynthesis.speak(utterance)
    } else {
        console.log("Web Speech API não suportada neste navegador.")
    }
}

// Função para narrar o conteúdo inicial da página
function narrarConteudoInicial() {
    const titulo = document.querySelector('.main-title').textContent
    const subtitulo = document.querySelector('.section-title').textContent
    if ('speechSynthesis' in window) {
        let utteranceTitulo = new SpeechSynthesisUtterance(titulo)
        utteranceTitulo.lang = 'pt-BR'
        utteranceTitulo.rate = 1.2
        window.speechSynthesis.speak(utteranceTitulo)

        let utteranceSubtitulo = new SpeechSynthesisUtterance(subtitulo)
        utteranceSubtitulo.lang = 'pt-BR'
        utteranceSubtitulo.rate = 1.2
        window.speechSynthesis.speak(utteranceSubtitulo)
    }
}

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo')
    const nome = inputAmigo.value.trim()

    if (nome === "") {
        alert("Por favor, insira um nome válido.")
        return;
    }

    // Verifica se o nome já foi adicionado
    if (listaDeAmigos.includes(nome)) {
        alert("Este nome já foi adicionado.")
        inputAmigo.value = ""
        return
    }

    listaDeAmigos.push(nome)
    inputAmigo.value = ""
    inputAmigo.focus()
    exibirTextoNaTela('#resultado', `O nome ${nome} foi adicionado à lista.`)
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.")
        return
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length)
    const amigoSorteado = listaDeAmigos[indiceSorteado]

    exibirResultado(amigoSorteado)
}

// Função para exibir o resultado do sorteio e narrar
function exibirResultado(nome) {
    const resultadoElement = document.getElementById('resultado')
    resultadoElement.innerHTML = ""

    const texto = `O amigo secreto sorteado é: ${nome}`
    const li = document.createElement('li')
    li.textContent = texto
    resultadoElement.appendChild(li)

    exibirTextoNaTela('#resultado', texto)
}

// Inicia a narração do conteúdo inicial ao carregar a página
window.onload = narrarConteudoInicial
