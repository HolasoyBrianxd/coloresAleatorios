const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

const textoRGB = document.getElementById('texto-rgb');

const copiar = document.getElementById('copiar');

// COLORES RGB
// selecciono el valor iniciar dde los input
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

function actualizarColor(rojo, verde, azul){
    let colorRGB = `rgb(${rojo}, ${verde}, ${azul})`
    document.body.style.backgroundColor = colorRGB;
}

// actualiza Rojo
inputRojo.addEventListener('change', (e) => {
    rojo = e.target.value;
    textoRojo.innerText = rojo;
    actualizarColor(rojo, verde, azul);
    textoRGB.innerText = `rgb(${rojo}, ${verde}, ${azul})`;
    copiar.innerText = "";
});

// actualiza Verde
inputVerde.addEventListener('change', (e) => {
    verde = e.target.value;
    textoVerde.innerText = verde;
    actualizarColor(rojo, verde, azul);
    textoRGB.innerText = `rgb(${rojo}, ${verde}, ${azul})`;
    copiar.innerText = "";
});

// actualiza Azul
inputAzul.addEventListener('change', (e) => {
    azul = e.target.value;
    textoAzul.innerText = azul;
    actualizarColor(rojo, verde, azul);
    textoRGB.innerText = `rgb(${rojo}, ${verde}, ${azul})`;
    copiar.innerText = "";
});

// copiar color Hex hacienddo click en el texto
textoRGB.addEventListener('click', function(){
    navigator.clipboard.writeText(textoRGB.textContent);
    copiar.innerText = "COLOR RGB COPIADO";
});

