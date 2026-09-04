/* =====================================
   ELEMENTS
===================================== */

const startBtn =
    document.getElementById("startBtn");

const surpriseBtn =
    document.getElementById("surpriseBtn");

const overlay =
    document.getElementById("surpriseOverlay");

const count =
    document.getElementById("count");

const surpriseText =
    document.getElementById("surpriseText");

const finalMessage =
    document.getElementById("finalMessage");

const closeSurprise =
    document.getElementById("closeSurprise");

const hearts =
    document.getElementById("hearts");

const music =
    document.getElementById("music");

const stars =
    document.getElementById("stars");


/* =====================================
   START
===================================== */

startBtn.addEventListener(
    "click",
    () => {

        startMusic();

        createHeartBurst(20);

        document
            .querySelector(".intro-section")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);


/* =====================================
   MUSIC
===================================== */

function startMusic() {

    if (!music) {
        return;
    }

    if (
        music.querySelector("source")
    ) {

        music.volume = 0.35;

        music.play().catch(() => {});

    }

}


/* =====================================
   HEART
===================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className =
        "float-heart";

    const symbols = [
        "❤️",
        "♡",
        "💗",
        "✦",
        "♥"
    ];

    heart.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        (
            14 +
            Math.random() * 24
        ) + "px";


    heart.style.animationDuration =
        (
            3 +
            Math.random() * 3
        ) + "s";


    hearts.appendChild(
        heart
    );


    setTimeout(
        () => {
            heart.remove();
        },
        6500
    );

}


function createHeartBurst(
    amount = 25
) {

    for (
        let i = 0;
        i < amount;
        i++
    ) {

        setTimeout(
            createHeart,
            i * 90
        );

    }

}


/* =====================================
   SCROLL REVEAL
===================================== */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("show");

                    }

                }
            );

        },
        {
            threshold: 0.13
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );


/* =====================================
   BACKGROUND STARS
===================================== */

function createStars() {

    if (!stars) {
        return;
    }


    for (
        let i = 0;
        i < 35;
        i++
    ) {

        const star =
            document.createElement("span");


        star.style.position =
            "absolute";

        star.style.width =
            "1px";

        star.style.height =
            "1px";

        star.style.background =
            "#ffffff";

        star.style.borderRadius =
            "50%";

        star.style.opacity =
            (
                0.15 +
                Math.random() * 0.5
            );


        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";


        stars.appendChild(
            star
        );

    }

}


createStars();


/* =====================================
   FINAL SURPRISE
===================================== */

let timers = [];


function clearTimers() {

    timers.forEach(
        (timer) => clearTimeout(timer)
    );

    timers = [];

}


surpriseBtn.addEventListener(
    "click",
    () => {

        clearTimers();


        overlay.classList.add(
            "active"
        );


        finalMessage.classList.remove(
            "visible"
        );


        closeSurprise.style.display =
            "none";


        count.style.display =
            "block";


        surpriseText.style.display =
            "block";


        count.textContent =
            "3";


        surpriseText.textContent =
            "صبر کن...";


        timers.push(
            setTimeout(
                () => {

                    count.textContent =
                        "2";

                },
                750
            )
        );


        timers.push(
            setTimeout(
                () => {

                    count.textContent =
                        "1";

                },
                1500
            )
        );


        timers.push(
            setTimeout(
                () => {

                    count.style.display =
                        "none";


                    surpriseText.style.display =
                        "none";


                    finalMessage.classList.add(
                        "visible"
                    );


                    closeSurprise.style.display =
                        "inline-block";


                    createHeartBurst(
                        60
                    );

                },
                2250
            )
        );

    }
);


/* =====================================
   CLOSE
===================================== */

closeSurprise.addEventListener(
    "click",
    () => {

        overlay.classList.remove(
            "active"
        );

        clearTimers();


        setTimeout(
            () => {

                count.style.display =
                    "block";

                surpriseText.style.display =
                    "block";

                finalMessage.classList.remove(
                    "visible"
                );

            },
            500
        );

    }
);


/* =====================================
   ESC KEY
===================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            overlay.classList.remove(
                "active"
            );

        }

    }
);
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("bgMusic");

    if (!music) return;

    document.addEventListener("click", function () {
        music.volume = 0.5;

        music.play().catch(function () {
            console.log("Music playback was blocked.");
        });
    }, { once: true });
});