/* =========================================
   DATA HIRAGANA
========================================= */

const hiraganaData = [

    { char: "あ", romaji: "a" },
    { char: "い", romaji: "i" },
    { char: "う", romaji: "u" },
    { char: "え", romaji: "e" },
    { char: "お", romaji: "o" },

    { char: "か", romaji: "ka" },
    { char: "き", romaji: "ki" },
    { char: "く", romaji: "ku" },
    { char: "け", romaji: "ke" },
    { char: "こ", romaji: "ko" },

    { char: "さ", romaji: "sa" },
    { char: "し", romaji: "shi" },
    { char: "す", romaji: "su" },
    { char: "せ", romaji: "se" },
    { char: "そ", romaji: "so" },

    { char: "た", romaji: "ta" },
    { char: "ち", romaji: "chi" },
    { char: "つ", romaji: "tsu" },
    { char: "て", romaji: "te" },
    { char: "と", romaji: "to" },

    { char: "な", romaji: "na" },
    { char: "に", romaji: "ni" },
    { char: "ぬ", romaji: "nu" },
    { char: "ね", romaji: "ne" },
    { char: "の", romaji: "no" },

    { char: "は", romaji: "ha" },
    { char: "ひ", romaji: "hi" },
    { char: "ふ", romaji: "fu" },
    { char: "へ", romaji: "he" },
    { char: "ほ", romaji: "ho" },

    { char: "ま", romaji: "ma" },
    { char: "み", romaji: "mi" },
    { char: "む", romaji: "mu" },
    { char: "め", romaji: "me" },
    { char: "も", romaji: "mo" },

    { char: "や", romaji: "ya" },
    { char: "ゆ", romaji: "yu" },
    { char: "よ", romaji: "yo" },

    { char: "ら", romaji: "ra" },
    { char: "り", romaji: "ri" },
    { char: "る", romaji: "ru" },
    { char: "れ", romaji: "re" },
    { char: "ろ", romaji: "ro" },

    { char: "わ", romaji: "wa" },
    { char: "を", romaji: "wo" },

    { char: "ん", romaji: "n" }

];


/* =========================================
   ELEMENT
========================================= */

const startPage =
    document.getElementById("startPage");

const quizPage =
    document.getElementById("quizPage");

const resultPage =
    document.getElementById("resultPage");

const startButton =
    document.getElementById("startButton");

const retryButton =
    document.getElementById("retryButton");

const hiraganaCharacter =
    document.getElementById("hiraganaCharacter");

const answers =
    document.getElementById("answers");

const nextButton =
    document.getElementById("nextButton");

const questionNumber =
    document.getElementById("questionNumber");

const progressBar =
    document.getElementById("progressBar");

const currentScore =
    document.getElementById("currentScore");

const speechText =
    document.getElementById("speechText");

const finalScore =
    document.getElementById("finalScore");

const resultTitle =
    document.getElementById("resultTitle");

const resultMessage =
    document.getElementById("resultMessage");

const correctCount =
    document.getElementById("correctCount");

const wrongCount =
    document.getElementById("wrongCount");

const kanjiButton =
    document.getElementById("kanjiButton");

const resultNote =
    document.getElementById("resultNote");


/* =========================================
   GAME VARIABLES
========================================= */

let quizQuestions = [];

let currentQuestion = 0;

let correctAnswers = 0;

let wrongAnswers = 0;

let answered = false;


/* =========================================
   SHUFFLE
========================================= */

function shuffle(array) {

    return array.sort(
        () => Math.random() - 0.5
    );

}


/* =========================================
   CREATE QUIZ
========================================= */

function createQuiz() {

    quizQuestions =
        shuffle([...hiraganaData])
        .slice(0, 20);

}


/* =========================================
   START QUIZ
========================================= */

function startQuiz() {

    createQuiz();

    currentQuestion = 0;

    correctAnswers = 0;

    wrongAnswers = 0;

    currentScore.textContent = "0";

    startPage.classList.remove("active");

    resultPage.classList.remove("active");

    quizPage.classList.add("active");

    showQuestion();

}


/* =========================================
   SHOW QUESTION
========================================= */

function showQuestion() {

    answered = false;

    nextButton.style.display = "none";

    answers.innerHTML = "";

    const question =
        quizQuestions[currentQuestion];


    hiraganaCharacter.textContent =
        question.char;


    questionNumber.textContent =
        `Soal ${currentQuestion + 1} / 20`;


    progressBar.style.width =
        `${((currentQuestion + 1) / 20) * 100}%`;


    speechText.textContent =
        getRandomMessage();


    createAnswers(question);

}


/* =========================================
   CREATE ANSWERS
========================================= */

function createAnswers(question) {

    let choices = [
        question.romaji
    ];


    let otherAnswers =
        hiraganaData.filter(
            item =>
                item.romaji !==
                question.romaji
        );


    otherAnswers =
        shuffle(otherAnswers)
        .slice(0, 3);


    choices.push(
        ...otherAnswers.map(
            item => item.romaji
        )
    );


    choices =
        shuffle(choices);


    choices.forEach(choice => {

        const button =
            document.createElement("button");


        button.className =
            "answer-button";


        button.textContent =
            choice;


        button.addEventListener(
            "click",
            () =>
                checkAnswer(
                    button,
                    choice,
                    question
                )
        );


        answers.appendChild(button);

    });

}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(
    selectedButton,
    selectedAnswer,
    question
) {

    if (answered) return;

    answered = true;


    const allButtons =
        document.querySelectorAll(
            ".answer-button"
        );


    allButtons.forEach(button => {

        button.disabled = true;

    });


    /* =========================
       BENAR
    ========================== */

    if (
        selectedAnswer ===
        question.romaji
    ) {

        selectedButton.classList.add(
            "correct"
        );


        correctAnswers++;


        currentScore.textContent =
            correctAnswers * 5;


        speechText.textContent =
            "✨ Benar! Hebat sekali!";

    }


    /* =========================
       SALAH
    ========================== */

    else {

        selectedButton.classList.add(
            "wrong"
        );


        wrongAnswers++;


        speechText.textContent =
            `❌ Salah! Jawabannya adalah "${question.romaji}".`;


        allButtons.forEach(button => {

            if (
                button.textContent ===
                question.romaji
            ) {

                button.classList.add(
                    "correct"
                );

            }

        });

    }


    nextButton.style.display =
        "inline-block";

}


/* =========================================
   NEXT QUESTION
========================================= */

nextButton.addEventListener(
    "click",
    () => {

        currentQuestion++;


        if (
            currentQuestion >= 20
        ) {

            finishQuiz();

        }

        else {

            showQuestion();

        }

    }
);


/* =========================================
   FINISH QUIZ
========================================= */

function finishQuiz() {

    quizPage.classList.remove(
        "active"
    );


    resultPage.classList.add(
        "active"
    );


    let score =
        correctAnswers * 5;


    if (score === 0) {

        score = 1;

    }


    finalScore.textContent =
        score;


    correctCount.textContent =
        correctAnswers;


    wrongCount.textContent =
        wrongAnswers;


    /* =========================
       PASS
    ========================== */

    if (score >= 80) {

        resultTitle.textContent =
            "🎉 Selamat! Kamu Lulus!";


        resultMessage.innerHTML =
            `
            Kemampuan Hiragana kamu
            sudah cukup baik.
            <br>
            Kamu bisa melanjutkan
            ke tahap berikutnya.
            `;


        kanjiButton.style.display =
            "inline-block";


        resultNote.textContent =
            "Nilai 80 atau lebih membuka materi belajar Kanji.";

    }


    /* =========================
       FAIL
    ========================== */

    else {

        resultTitle.textContent =
            "📖 Terus Berlatih!";


        resultMessage.innerHTML =
            `
            Jangan menyerah!
            <br>
            Pelajari kembali Hiragana
            dan coba lagi.
            `;


        kanjiButton.style.display =
            "none";


        resultNote.textContent =
            "Kamu membutuhkan nilai minimal 80 untuk melanjutkan.";

    }

}


/* =========================================
   RETRY
========================================= */

retryButton.addEventListener(
    "click",
    startQuiz
);


/* =========================================
   START BUTTON
========================================= */

startButton.addEventListener(
    "click",
    startQuiz
);


/* =========================================
   IZANAGI MESSAGES
========================================= */

function getRandomMessage() {

    const messages = [

        "Pilih jawaban yang benar!",

        "Ayo, kamu pasti bisa!",

        "Perhatikan Hiragananya!",

        "Jangan terburu-buru.",

        "Ganbatte! 💪",

        "Ingat cara membacanya!",

        "Fokus dan jawab!",

        "Semangat belajar bahasa Jepang!"

    ];


    return messages[
        Math.floor(
            Math.random() *
            messages.length
        )
    ];

}