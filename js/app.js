const boton = document.getElementById('btn-color');
const color = document.getElementById('color');
const copiar = document.getElementById('copiar')
// const color1 = document.getElementById('color1');
// const color2 = document. getElementById('color2');

// COLORES HEX
function colorHexRandom(){
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';

    for(let i = 0; i < 6; i++){
        let indiceRandom = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceRandom];
    }

    return colorHex;
}

// copiar color Hex hacienddo click en el texto
color.addEventListener('click', function(){
    navigator.clipboard.writeText(color.textContent);
    copiar.innerText = "COLOR HEX COPIADO";
});

boton.addEventListener('click', function(){
    // cambio de texto color
    let obtenerColor = colorHexRandom();
    color.textContent = obtenerColor;
    // cambio de color de fondo
    document.body.style.backgroundColor = obtenerColor;
    // quita el texto al hacer click nuevamente en el boton
    copiar.innerText = "";
});