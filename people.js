/* ==================================================
   PEOPLE PAGE
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
        window.scrollY > 40
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
   02. PERSON CARD REVEAL
================================================== */

const cards =
    document.querySelectorAll(
        ".person-card"
    );


const cardObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add(
                                "visible"
                            );


                        cardObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {
            threshold: 0.12
        }
    );


cards.forEach(
    card => {

        cardObserver.observe(
            card
        );

    }
);



/* ==================================================
   03. SMOOTH MOUSE GLOW
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
        ) * 0.08;


    glowY +=
        (
            mouseY -
            glowY
        ) * 0.08;


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