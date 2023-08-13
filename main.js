const cardImage = document.getElementById('cardImage');
const cambiarImagenButton = document.getElementById('cambiarImagen');

const imagenes = ['imagenes/emmet_live_extension_vs_code.png', 'imagenes/regex_previewer_ap2mwd.jpg', 'imagenes/path_intellisense_eaouso.jpg', 'imagenes/gitlens_mrqzgk.jpg'];
let indiceImagenActual = 0;

cambiarImagenButton.addEventListener('click', () => {
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
    cardImage.src = imagenes[indiceImagenActual];
});