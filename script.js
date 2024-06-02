const container = document.querySelector('#carrousel-container');

let cont = 0;
let h;
let screenSize;

function slide() {
    cont++;

    if(cont > 2) {
        cont = 0;
    }

    container.style.transform = `translate(${-cont * h}px)`;
}

function getScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return { width, height };
}

// Função para exibir o tamanho da tela
function displayScreenSize() {
    screenSize = getScreenSize();
    if(screenSize.width > 768) {
        h = 750;
    } else {
        h = 380;
    }
}

// Chama a função inicialmente
displayScreenSize();

// Adiciona um event listener para atualizar o tamanho da tela em tempo real
window.addEventListener('resize', displayScreenSize);

if(screenSize.width < 993) {
    setInterval(slide, 2000);
}