/* ==================================================
   TRADITIONS / ARCHIVE PAGE
================================================== */


/* ==================================================
   01. NAVBAR
================================================== */

const navbar =
    document.getElementById(
        "navbar"
    );


function updateNavbar() {

    if (!navbar) {
        return;
    }


    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

}


window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);


updateNavbar();



/* ==================================================
   02. SMOOTH MOUSE GLOW
================================================== */

const glow =
    document.getElementById(
        "mouseGlow"
    );


let mouseX =
    window.innerWidth / 2;

let mouseY =
    window.innerHeight / 2;


let glowX =
    mouseX;

let glowY =
    mouseY;



document.addEventListener(
    "mousemove",
    event => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;

    }
);



function animateGlow() {

    glowX +=
        (
            mouseX -
            glowX
        ) * 0.07;


    glowY +=
        (
            mouseY -
            glowY
        ) * 0.07;


    if (glow) {

        glow.style.transform = `
            translate3d(
                ${glowX - 250}px,
                ${glowY - 250}px,
                0
            )
        `;

    }


    requestAnimationFrame(
        animateGlow
    );

}


animateGlow();