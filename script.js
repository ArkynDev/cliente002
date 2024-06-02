const container = document.querySelector('#carrousel-container');

let cont = 0;

function slide() {
    cont++;

    if(cont > 2) {
        cont = 0;
    }

    container.style.transform = `translate(${-cont * 380}px)`;
}

function getScreenSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    return { width, height };
}

// Função para exibir o tamanho da tela
function displayScreenSize() {
    const screenSize = getScreenSize();
    console.log(`Largura: ${screenSize.width}, Altura: ${screenSize.height}`);
}

// Chama a função inicialmente
displayScreenSize();

// Adiciona um event listener para atualizar o tamanho da tela em tempo real
window.addEventListener('resize', displayScreenSize);


if(screenSize.width < 993) {
    setInterval(slide, 2000);
}