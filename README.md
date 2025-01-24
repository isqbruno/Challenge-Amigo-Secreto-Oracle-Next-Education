# Amigo Secreto

Bem-vindo ao projeto **Amigo Secreto**, uma aplicação web interativa que permite adicionar nomes e realizar sorteios para o clássico jogo de Amigo Secreto. Este projeto utiliza HTML, CSS e JavaScript com foco em lógica de programação, acessibilidade e personalização.

---

## Descrição do Projeto

O **Amigo Secreto** permite ao usuário adicionar nomes de participantes e, com o clique de um botão, sortear aleatoriamente um nome. Incluímos uma API de narração para tornar a aplicação mais inclusiva para pessoas com deficiência visual. O conteúdo do site é narrado dinamicamente para oferecer uma experiência acessível.

---

## Funcionalidades Principais

- Adicionar nomes de participantes.
- Evitar nomes duplicados.
- Sortear um nome aleatório.
- Narração do conteúdo do site para acessibilidade.

---

## Tecnologias Utilizadas

- **HTML5**: Estrutura do site.
- **CSS3**: Estilização responsiva e moderna.
- **JavaScript**: Lógica do programa e integração com a Web Speech API.

---

## Estrutura do Código

### Destaques do JavaScript

#### Função de Narração
Esta função utiliza a Web Speech API para narrar o conteúdo dinâmico do site:

```javascript
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto)
        utterance.lang = 'pt-BR'
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance)
    } else {
        console.log("Web Speech API não suportada neste navegador.")
    }
}
```

#### Adicionar Participante
Permite ao usuário adicionar nomes e evita duplicações:

```javascript
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo')
    const nome = inputAmigo.value.trim()

    if (nome === "") {
        alert("Por favor, insira um nome válido.")
        return
    }

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
```

#### Sorteio Aleatório
Realiza o sorteio de forma randômica e exibe o resultado:

```javascript
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.")
        return
    }

    const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length)
    const amigoSorteado = listaDeAmigos[indiceSorteado]

    exibirResultado(amigoSorteado)
}
```

---

## Acessibilidade

Implementamos recursos para tornar o site mais inclusivo, como a API de narração que lê o conteúdo exibido na tela em português brasileiro com uma velocidade confortável. Assim, pessoas com deficiência visual podem interagir facilmente com a aplicação.

---

## Como Executar o Projeto

1. Clone este repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Adicione nomes no campo fornecido.
4. Clique em "Sortear amigo" para descobrir quem foi sorteado.

---

## Melhorias Futuras

- Adicionar a funcionalidade para remover nomes da lista.
- Estilização adicional para melhorar a interface do usuário.
- Suporte a outras línguas para a API de narração.

---

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou sugestões para o projeto. Abra uma _issue_ ou envie um _pull request_.

---

## Licença

Este projeto é de código aberto e está licenciado sob os termos da [MIT License](LICENSE).
