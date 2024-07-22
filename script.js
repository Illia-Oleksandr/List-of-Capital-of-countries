const questions = [
    { country: "France", capital: "Paris", image: "images/paris.jpg" },
    { country: "Japan", capital: "Tokyo", image: "images/tokyo.jpg" },
    { country: "Brazil", capital: "Brasília", image: "images/brasilia.jpg" },
    { country: "Canada", capital: "Ottawa", image: "images/ottawa.jpg" },
    { country: "Australia", capital: "Canberra", image: "images/canberra.jpg" },
    { country: "Germany", capital: "Berlin", image: "images/berlin.jpg" },
    { country: "India", capital: "New Delhi", image: "images/newdelhi.jpg" },
    { country: "China", capital: "Beijing", image: "images/beijing.jpg" },
    { country: "Italy", capital: "Rome", image: "images/rome.jpg" },
    { country: "United Kingdom", capital: "London", image: "images/london.jpg" },
    { country: "Mexico", capital: "Mexico City", image: "images/mexicocity.jpg" },
    { country: "South Africa", capital: "Pretoria", image: "images/pretoria.jpg" },
    { country: "South Korea", capital: "Seoul", image: "images/seoul.jpg" },
    { country: "Egypt", capital: "Cairo", image: "images/cairo.jpg" },
    { country: "Turkey", capital: "Ankara", image: "images/ankara.jpg" }
];

let currentQuestionIndex = 0;
let nextQuestionTimeout;

document.addEventListener("DOMContentLoaded", () => {
    showQuestion();
});

function showQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.innerText = `Яка столиця ${questions[currentQuestionIndex].country}?`;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("revealed-picture").innerHTML = "";
    document.getElementById("next-button").style.display = "none";
}

function checkAnswer() {
    const answer = document.getElementById("answer").value.trim();
    const resultElement = document.getElementById("result");

    if (answer.toLowerCase() === questions[currentQuestionIndex].capital.toLowerCase()) {
        resultElement.innerText = "Правильно!";
        revealPicture();
        document.getElementById("next-button").style.display = "block";
        nextQuestionTimeout = setTimeout(nextQuestion, 5000);
    } else {
        resultElement.innerText = "Неправильно, спробуйте ще раз.";
    }
}

function revealPicture() {
    const pictureContainer = document.getElementById("revealed-picture");
    const img = document.createElement("img");
    img.src = questions[currentQuestionIndex].image;
    img.style.display = "block";
    pictureContainer.appendChild(img);
}

function nextQuestion() {
    clearTimeout(nextQuestionTimeout);
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question-container").innerText = "Ви відповіли на всі питання!";
        document.getElementById("next-button").style.display = "none";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
}
