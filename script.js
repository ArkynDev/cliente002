const bronzeText = document.querySelectorAll(".bronze-text");
const prataText = document.querySelectorAll(".prata-text");
const ouroText = document.querySelectorAll(".ouro-text");

let h;
let screenSize;

document.getElementById('radioplanos').addEventListener('change', function(event) {
    if (event.target.name === 'planos') {
        checkRadioValue(event.target.value);
    }
});

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

function openWhatsApp(message) {
    const phoneNumber = "5581993771316";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
}

function checkRadioValue(value) {
    switchText(value);
}

function showElements(elements) {
    elements.forEach(element => {
        if (!element.classList.contains('show')) {
            element.classList.add('show');
        }
        if (element.classList.contains('hide')) {
            element.classList.remove('hide');
        }
    });
}

function hideElements(elements) {
    elements.forEach(element => {
        if (!element.classList.contains('hide')) {
            element.classList.add('hide');
        }
        if (element.classList.contains('show')) {
            element.classList.remove('show');
        }
    });
}

function switchText(p) {
    console.log(p);
    switch (p) {
        case "bronze":
            showElements(bronzeText);
            hideElements(prataText);
            hideElements(ouroText);
            document.getElementById('bronze-btn').classList.add('pacoteSelected');
            break;
        case "prata":
            hideElements(bronzeText);
            showElements(prataText);
            hideElements(ouroText);
            break;
        case "ouro":
            hideElements(bronzeText);
            hideElements(prataText);
            showElements(ouroText);
            break;
        default:
            break;
    }
}

// Adiciona um event listener para atualizar o tamanho da tela em tempo real
window.addEventListener('resize', displayScreenSize);