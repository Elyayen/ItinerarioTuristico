document.addEventListener('DOMContentLoaded', () => {

    const avion = document.querySelector('.avion');
    // La función que se ejecutará CADA VEZ que el usuario haga scroll
    function controlarVuelo() {
        // Obtenemos la posición actual del scroll 
        const scrollPosicion = window.scrollY;

        // Vamos a cambiar la propiedad 'transform' del avión basándonos en el scroll.

        // Calculamos cuánto se moverá el avión hacia abajo y hacia la derecha
        const moverEnY = scrollPosicion * 0.9; // Se moverá hacia abajo al 70% de la velocidad del scroll
        const moverEnX = scrollPosicion * 0.6; // Se moverá hacia la derecha al 40% de la velocidad del scroll

        // Calculamos cuánto rotará
        const rotacion = -25 + (scrollPosicion * 0.03); // Empieza en -25deg y rota lentamente

        // Calculamos cuánto se encogerá para dar efecto de profundidad
        const escala = 1 - (scrollPosicion * 0.0005);

        // Aplicamos todos los cambios al estilo del avión en tiempo real
        avion.style.transform = `
            translate(calc(-50% + ${moverEnX}px), calc(-50% + ${moverEnY}px)) 
            rotate(${rotacion}deg) 
            scale(${escala})
        `;
    }

    // Le decimos al navegador que ejecute la función 'controlarVuelo' cada vez que se detecte un scroll
    window.addEventListener('scroll', controlarVuelo);
});