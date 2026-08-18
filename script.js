/* ==================================================
   01. AARAMBH EVENT DATABASE
================================================== */

const events = [
    {
        title: "Ganesh Chaturthi",
        category: "CELEBRATION",
        type: "TRADITION_01",
        quote: "Where devotion meets celebration.",
        video: "https://res.cloudinary.com/sn8krgue/video/upload/v1787062351/ganesh_chaturthi.mp4"
    },

    {
        title: "Onam",
        category: "TRADITION",
        type: "TRADITION_02",
        quote: "Colours. Traditions. Togetherness.",
        video: "https://res.cloudinary.com/sn8krgue/video/upload/v1787062369/onam.mp4"
    },

    {
        title: "Shiv Jayanti",
        category: "LEGACY",
        type: "TRADITION_03",
        quote: "A celebration of courage and legacy.",
        video: "https://res.cloudinary.com/sn8krgue/video/upload/v1787062349/shivjaynati.mp4"
    },

    

   
];



/* ==================================================
   02. DOM ELEMENTS
================================================== */

const intro =
    document.getElementById("intro");

const enterBtn =
    document.getElementById("enterBtn");

const website =
    document.getElementById("website");

const eventTrack =
    document.getElementById("eventTrack");

const cursor =
    document.getElementById("cursor");

const videoExperience =
    document.getElementById("videoExperience");

const mainVideo =
    document.getElementById("mainVideo");

const videoTitle =
    document.getElementById("videoTitle");

const videoCategory =
    document.getElementById("videoCategory");

const videoQuote =
    document.getElementById("videoQuote");

const videoIndex =
    document.getElementById("videoIndex");

const currentNumber =
    document.getElementById("currentNumber");

const totalNumber =
    document.getElementById("totalNumber");

const soundButton =
    document.getElementById("soundButton");

const navbar =
    document.getElementById("navbar");

const mouseGlow =
    document.getElementById("mouseGlow");

const codeRain =
    document.getElementById("codeRain");

const scrollProgress =
    document.getElementById("scrollProgress");



/* ==================================================
   03. STATE
================================================== */

let currentVideoIndex = 0;

let soundEnabled = true;



/* ==================================================
   04. BACKGROUND CODE PARTICLES
================================================== */

const codeWords = [
    "01",
    "10",
    "{}",
    "</>",
    "void",
    "while",
    "culture",
    "memory",
    "aarambh",
    "0x01",
    "true",
    "return;"
];


function createCodeRain() {

    if (!codeRain) {
        return;
    }


    const particleCount =
        window.innerWidth < 768
            ? 15
            : 35;


    for (
        let i = 0;
        i < particleCount;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );


        particle.className =
            "code-particle";


        particle.textContent =
            codeWords[
                Math.floor(
                    Math.random() *
                    codeWords.length
                )
            ];


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            8 +
            Math.random() * 15 +
            "s";


        particle.style.animationDelay =
            Math.random() * 10 +
            "s";


        codeRain.appendChild(
            particle
        );

    }

}


createCodeRain();



/* ==================================================
   05. SOUND SYSTEM
================================================== */

let audioContext;


function getAudioContext() {

    if (!audioContext) {

        const AudioContextClass =
            window.AudioContext ||
            window.webkitAudioContext;


        if (!AudioContextClass) {
            return null;
        }


        audioContext =
            new AudioContextClass();

    }


    return audioContext;

}



function clickSound() {

    if (!soundEnabled) {
        return;
    }


    const ctx =
        getAudioContext();


    if (!ctx) {
        return;
    }


    const oscillator =
        ctx.createOscillator();


    const gain =
        ctx.createGain();


    oscillator.connect(
        gain
    );


    gain.connect(
        ctx.destination
    );


    oscillator.type =
        "sine";


    oscillator.frequency
        .setValueAtTime(
            190,
            ctx.currentTime
        );


    oscillator.frequency
        .exponentialRampToValueAtTime(
            90,
            ctx.currentTime + 0.08
        );


    gain.gain
        .setValueAtTime(
            0.05,
            ctx.currentTime
        );


    gain.gain
        .exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + 0.1
        );


    oscillator.start();


    oscillator.stop(
        ctx.currentTime + 0.1
    );

}



function transitionSound() {

    if (!soundEnabled) {
        return;
    }


    const ctx =
        getAudioContext();


    if (!ctx) {
        return;
    }


    const oscillator =
        ctx.createOscillator();


    const gain =
        ctx.createGain();


    oscillator.connect(
        gain
    );


    gain.connect(
        ctx.destination
    );


    oscillator.type =
        "triangle";


    oscillator.frequency
        .setValueAtTime(
            80,
            ctx.currentTime
        );


    oscillator.frequency
        .exponentialRampToValueAtTime(
            300,
            ctx.currentTime + 0.4
        );


    gain.gain
        .setValueAtTime(
            0.025,
            ctx.currentTime
        );


    gain.gain
        .exponentialRampToValueAtTime(
            0.001,
            ctx.currentTime + 0.45
        );


    oscillator.start();


    oscillator.stop(
        ctx.currentTime + 0.45
    );

}



/* ==================================================
   06. ENTER EXPERIENCE
================================================== */

if (
    enterBtn &&
    intro
) {

    enterBtn.addEventListener(
        "click",
        () => {

            clickSound();

            transitionSound();


            intro.classList.add(
                "closed"
            );

        }
    );

}



/* ==================================================
   07. RENDER EVENT CARDS
================================================== */

function renderEvents() {

    if (!eventTrack) {
        return;
    }


    eventTrack.innerHTML =
        "";


    events.forEach(
        (event, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "event-card";


            card.innerHTML = `

                <video
                    muted
                    loop
                    playsinline
                    preload="metadata"
                >
                    <source
                        src="${event.video}"
                        type="video/mp4"
                    >
                </video>


                <div class="card-overlay"></div>

                <div class="card-scan"></div>


                <span class="card-type">
                    ${event.type}
                </span>


                <span class="card-number">
                    ${String(index + 1)
                        .padStart(2, "0")}
                </span>


                <div class="card-content">

                    <p>
                        ${event.category}
                    </p>

                    <h3>
                        ${event.title}
                    </h3>

                    <span>
                        ${event.quote}
                    </span>

                </div>


                <div class="card-play">
                    ▶
                </div>

            `;


            setupCardInteractions(
                card,
                index
            );


            eventTrack.appendChild(
                card
            );

        }
    );

}


renderEvents();



/* ==================================================
   08. EVENT CARD INTERACTIONS
================================================== */

function setupCardInteractions(
    card,
    index
) {

    const video =
        card.querySelector(
            "video"
        );


    /*
       Desktop hover preview
    */

    card.addEventListener(
        "mouseenter",
        () => {

            if (cursor) {

                cursor.classList.add(
                    "play"
                );

            }


            if (video) {

                video.play()
                    .catch(() => {});

            }

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            if (cursor) {

                cursor.classList.remove(
                    "play"
                );

            }


            if (video) {

                video.pause();

                video.currentTime =
                    0;

            }


            card.style.transform =
                "rotateX(0deg) rotateY(0deg)";

        }
    );



    /*
       Desktop 3D tilt
    */

    if (
        window.matchMedia(
            "(hover: hover)"
        ).matches
    ) {

        card.addEventListener(
            "mousemove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    (
                        x -
                        centerX
                    ) / 25;


                const rotateX =
                    (
                        centerY -
                        y
                    ) / 20;


                card.style.transform = `
                    perspective(900px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.035)
                `;

            }
        );

    }



    /*
       Open fullscreen memory
    */

    card.addEventListener(
        "click",
        () => {

            openVideo(
                index,
                card
            );

        }
    );

}



/* ==================================================
   09. CARD → FULLSCREEN TRANSITION
================================================== */

function openVideo(
    index,
    card
) {

    if (
        !website ||
        !videoExperience
    ) {
        return;
    }


    clickSound();

    transitionSound();


    currentVideoIndex =
        index;


    const rect =
        card.getBoundingClientRect();



    /*
       Clone selected card
    */

    const clone =
        card.cloneNode(
            true
        );


    clone.classList.add(
        "flying-card"
    );


    clone.style.top =
        rect.top + "px";


    clone.style.left =
        rect.left + "px";


    clone.style.width =
        rect.width + "px";


    clone.style.height =
        rect.height + "px";


    clone.style.transform =
        "none";


    clone.style.flex =
        "none";


    document.body.appendChild(
        clone
    );



    /*
       Play clone video
    */

    const cloneVideo =
        clone.querySelector(
            "video"
        );


    if (cloneVideo) {

        cloneVideo.play()
            .catch(() => {});

    }



    website.classList.add(
        "video-open"
    );


    document.body.style.overflow =
        "hidden";



    /*
       Expand clone toward center
    */

    requestAnimationFrame(
        () => {

            requestAnimationFrame(
                () => {

                    const finalWidth =
                        Math.min(
                            window.innerWidth *
                            0.84,

                            1100
                        );


                    const finalHeight =
                        Math.min(
                            window.innerHeight *
                            0.65,

                            620
                        );


                    clone.style.width =
                        finalWidth +
                        "px";


                    clone.style.height =
                        finalHeight +
                        "px";


                    clone.style.left =
                        "50%";


                    clone.style.top =
                        "50%";


                    clone.style.transform =
                        "translate(-50%, -50%)";


                    clone.style.borderRadius =
                        "2px";

                }
            );

        }
    );



    /*
       Replace clone by full video player
    */

    setTimeout(
        () => {

            updateVideoContent();


            videoExperience
                .classList
                .add(
                    "active"
                );


            if (mainVideo) {

                mainVideo.play()
                    .catch(() => {});

            }


            clone.style.opacity =
                "0";


            setTimeout(
                () => {

                    clone.remove();

                },

                200
            );

        },

        580
    );

}



/* ==================================================
   10. UPDATE VIDEO PLAYER CONTENT
================================================== */

function updateVideoContent() {

    const event =
        events[
            currentVideoIndex
        ];


    if (!event) {
        return;
    }


    if (mainVideo) {

        mainVideo.src =
            event.video;

        mainVideo.load();

    }


    if (videoTitle) {

        videoTitle.textContent =
            event.title;

    }


    if (videoCategory) {

        videoCategory.textContent =
            event.category;

    }


    if (videoQuote) {

        videoQuote.textContent =
            event.quote;

    }


    if (videoIndex) {

        videoIndex.textContent =
            "MEMORY_" +
            String(
                currentVideoIndex + 1
            ).padStart(
                2,
                "0"
            );

    }


    if (currentNumber) {

        currentNumber.textContent =
            String(
                currentVideoIndex + 1
            ).padStart(
                2,
                "0"
            );

    }


    if (totalNumber) {

        totalNumber.textContent =
            String(
                events.length
            ).padStart(
                2,
                "0"
            );

    }

}



/* ==================================================
   11. CLOSE VIDEO
================================================== */

function closeVideo() {

    if (
        !videoExperience ||
        !videoExperience
            .classList
            .contains(
                "active"
            )
    ) {
        return;
    }


    clickSound();


    videoExperience
        .classList
        .remove(
            "active"
        );


    if (website) {

        website.classList.remove(
            "video-open"
        );

    }


    if (mainVideo) {

        mainVideo.pause();

    }


    document.body.style.overflow =
        "";

}



/* ==================================================
   12. NEXT VIDEO
================================================== */

function nextVideo() {

    clickSound();


    currentVideoIndex =
        (
            currentVideoIndex + 1
        ) %
        events.length;


    changeVideoAnimation();

}



/* ==================================================
   13. PREVIOUS VIDEO
================================================== */

function previousVideo() {

    clickSound();


    currentVideoIndex--;


    if (
        currentVideoIndex <
        0
    ) {

        currentVideoIndex =
            events.length - 1;

    }


    changeVideoAnimation();

}



/* ==================================================
   14. VIDEO CHANGE ANIMATION
================================================== */

function changeVideoAnimation() {

    const videoPlayer =
        document.getElementById(
            "videoPlayer"
        );


    if (!videoPlayer) {
        return;
    }


    videoPlayer.style.opacity =
        "0.25";


    videoPlayer.style.transform =
        "translateX(20px) scale(.98)";


    setTimeout(
        () => {

            updateVideoContent();


            if (mainVideo) {

                mainVideo.play()
                    .catch(() => {});

            }


            videoPlayer.style.opacity =
                "1";


            videoPlayer.style.transform =
                "none";

        },

        250
    );

}



/* ==================================================
   15. KEYBOARD VIDEO CONTROLS
================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            !videoExperience ||
            !videoExperience
                .classList
                .contains(
                    "active"
                )
        ) {
            return;
        }


        if (
            event.key ===
            "Escape"
        ) {

            closeVideo();

        }


        if (
            event.key ===
            "ArrowRight"
        ) {

            nextVideo();

        }


        if (
            event.key ===
            "ArrowLeft"
        ) {

            previousVideo();

        }

    }
);



/* ==================================================
   16. SOUND TOGGLE
================================================== */

if (soundButton) {

    soundButton.addEventListener(
        "click",
        () => {

            soundEnabled =
                !soundEnabled;


            soundButton.textContent =
                soundEnabled
                    ? "🔊"
                    : "🔇";


            if (soundEnabled) {

                clickSound();

            }

        }
    );

}



/* ==================================================
   17. SMOOTH CURSOR + MOUSE GLOW
================================================== */

let mouseX =
    window.innerWidth / 2;

let mouseY =
    window.innerHeight / 2;


let cursorX =
    mouseX;

let cursorY =
    mouseY;


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



function animateMouseEffects() {

    /*
       Cursor movement
    */

    cursorX +=
        (
            mouseX -
            cursorX
        ) * 0.75;


    cursorY +=
        (
            mouseY -
            cursorY
        ) * 0.75;


    if (cursor) {

        cursor.style.transform = `
            translate3d(
                ${cursorX - 15}px,
                ${cursorY - 15}px,
                0
            )
        `;

    }



    /*
       Glow movement
    */

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


    if (mouseGlow) {

        mouseGlow.style.transform = `
            translate3d(
                ${glowX - 300}px,
                ${glowY - 300}px,
                0
            )
        `;

    }


    requestAnimationFrame(
        animateMouseEffects
    );

}


animateMouseEffects();



/* ==================================================
   18. HERO PARALLAX
================================================== */

const hero =
    document.querySelector(
        ".hero"
    );


const heroVideo =
    document.querySelector(
        ".hero-video"
    );


const heroContent =
    document.getElementById(
        "heroContent"
    );



if (
    hero &&
    heroVideo &&
    heroContent
) {

    hero.addEventListener(
        "mousemove",
        event => {

            if (
                window.innerWidth <
                900
            ) {
                return;
            }


            const x =
                event.clientX /
                window.innerWidth -
                0.5;


            const y =
                event.clientY /
                window.innerHeight -
                0.5;


            heroVideo.style.transform = `
                scale(1.08)
                translate(
                    ${x * -12}px,
                    ${y * -10}px
                )
            `;


            heroContent.style.transform = `
                translate(
                    ${x * 12}px,
                    ${y * 8}px
                )
            `;

        }
    );


    hero.addEventListener(
        "mouseleave",
        () => {

            heroVideo.style.transform =
                "scale(1.05)";


            heroContent.style.transform =
                "none";

        }
    );

}



/* ==================================================
   19. MAGNETIC BUTTONS
================================================== */

document
    .querySelectorAll(
        ".magnetic-button"
    )
    .forEach(
        button => {

            button.addEventListener(
                "mousemove",
                event => {

                    if (
                        window.innerWidth <
                        900
                    ) {
                        return;
                    }


                    const rect =
                        button
                            .getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    button.style.transform = `
                        translate(
                            ${x * 0.15}px,
                            ${y * 0.15}px
                        )
                    `;

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "none";

                }
            );

        }
    );



/* ==================================================
   20. SCROLL PROGRESS + NAVBAR
================================================== */

function updateScrollUI() {

    const pageHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    if (
        scrollProgress &&
        pageHeight > 0
    ) {

        const progress =
            (
                window.scrollY /
                pageHeight
            ) * 100;


        scrollProgress.style.width =
            progress + "%";

    }


    if (navbar) {

        navbar.classList.toggle(
            "scrolled",
            window.scrollY >
            80
        );

    }

}


window.addEventListener(
    "scroll",
    updateScrollUI,
    {
        passive: true
    }
);


updateScrollUI();



/* ==================================================
   21. SECTION SCROLL REVEAL
================================================== */

const revealObserver =
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


                        revealObserver
                            .unobserve(
                                entry.target
                            );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }
    );


document
    .querySelectorAll(
        ".section-reveal"
    )
    .forEach(
        section => {

            revealObserver.observe(
                section
            );

        }
    );



/* ==================================================
   22. NAVIGATION FUNCTIONS
================================================== */

function scrollToExperiences() {

    clickSound();


    const section =
        document.getElementById(
            "experiences"
        );


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}



function scrollToCulture() {

    clickSound();


    const section =
        document.getElementById(
            "culture"
        );


    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}
