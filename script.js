// ============================
// INDEX PAGE
// ============================

const talkBtn = document.getElementById("talkBtn");
const noTalkBtn = document.getElementById("noTalkBtn");

if (talkBtn) {

    talkBtn.addEventListener("click", function () {

        window.location.href = "message.html";

    });

}

if (noTalkBtn) {

    noTalkBtn.addEventListener("click", function () {

        window.location.href = "second.html";

    });

}



// ============================
// SECOND PAGE
// ============================

const birthdayBtn = document.getElementById("birthdayBtn");
const leaveBtn = document.getElementById("leaveBtn");

if (birthdayBtn) {

    birthdayBtn.addEventListener("click", function () {

        window.location.href = "message.html";

    });

}

if (leaveBtn) {

    leaveBtn.addEventListener("click", function () {

        window.location.href = "third.html";

    });

}

// ============================
// THIRD PAGE
// ============================

const doneBtn = document.getElementById("doneBtn");
const sayBtn = document.getElementById("sayBtn");


// Say button
if (sayBtn) {

    sayBtn.addEventListener("click", function () {

        window.location.href = "message.html";

    });

}



// Done button vanish animation
if (doneBtn) {

    doneBtn.addEventListener("click", function () {

        // Add vanish class
        doneBtn.classList.add("vanish");



        // After animation completes
        setTimeout(() => {

            doneBtn.style.display = "none";

            alert("ONLY ONE OPTION LEFT 😌❤️");



            // Center remaining button
            const buttonArea =
                document.querySelector(".button-area");

            buttonArea.style.display = "flex";

            buttonArea.style.justifyContent = "center";

            buttonArea.style.alignItems = "center";



            // Make YES button bigger
            sayBtn.style.transform = "scale(1.15)";

        }, 800);

    });

}