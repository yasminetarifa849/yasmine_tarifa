const questions = [
    {
        question: "Qu'est-ce que HTML?",
        options: ["HyperText Markup Language", "HighTech Machine Learning", "HyperTransfer and Markup Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "Quel est le langage de programmation utilisé pour les pages web?",
        options: ["Java", "Python", "HTML"],
        correctAnswer: "HTML"
    },
    {
        question: "Quel langage est principalement utilisé pour le développement côté serveur?",
        options: ["Contrôler le comportement côté serveur", "Python", "PHP"],
        correctAnswer: "PHP"
    },
    {
        question: "Quelle est la principale fonction de CSS dans le développement web?",
        options: ["Contrôler le comportement côté serveur", "Gérer la présentation des pages web", "Effectuer des calculs mathématiques"],
        correctAnswer: "Gérer la présentation des pages web"
    },
    {
        question: "Quel est le rôle d'un gestionnaire de versions (Version Control System) comme Git?",
        options: ["Gérer les versions du code source", "Gérer les versions des bases de données", "Gérer les versions des logiciels"],
        correctAnswer: "Gérer les versions du code source"
    },
    {
        question: "Quel est le langage de balisage utilisé pour structurer le contenu des pages web?",
        options: ["JavaScript", "CSS", "HTML"],
        correctAnswer: "HTML"
    },
    {
        question: "Quel langage est souvent utilisé pour ajouter du style et de la mise en page aux pages web?",
        options: ["JavaScript", "CSS", "HTML"],
        correctAnswer: "CSS"
    },
    {
        question: "Qu'est-ce qu'un algorithme dans le contexte de la programmation?",
        options: ["Un type de virus informatique", "Une série d'instructions pour effectuer une tâche spécifique", "Un périphérique d'entrée"],
        correctAnswer: "Une série d'instructions pour effectuer une tâche spécifique"
    },
    {
        question: "Quel terme est utilisé pour décrire un petit programme qui résout une tâche spécifique?",
        options: ["Widget", "Snippet", "Script"],
        correctAnswer: "Script"
    },
    {
        question: "Quel est le principal rôle d'une variable en programmation?",
        options: ["Stocker des informations", "Créer des boucles", "Afficher du contenu sur une page web"],
        correctAnswer: "Stocker des informations"
    },
];

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
let score = 0;

function generateQuiz() {
    questions.forEach((q, index) => {
        const questionElement = document.createElement("div");
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        q.options.forEach((option, optionIndex) => {
            const optionButton = document.createElement("button");
            optionButton.innerHTML = option;
            optionButton.addEventListener("click", () => checkAnswer(index, optionIndex));
            questionElement.appendChild(optionButton);
        });

        quizContainer.appendChild(questionElement);
    });
}

function checkAnswer(questionIndex, optionIndex) {
    const selectedOption = questions[questionIndex].options[optionIndex];
    const correctAnswer = questions[questionIndex].correctAnswer;

    if (selectedOption === correctAnswer) {
        score++;
    }

    /*vérifiez si toutes les questions ont été répondues*/
    if (questionIndex === questions.length - 1) {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = "none"; /*masquer le conteneur du quiz*/
    resultContainer.innerHTML = `<p>Votre score est ${score} sur ${questions.length} questions.</p>`;
    resultContainer.style.display = "block"; /*afficher le conteneur de résultats*/
}

/*appel de la fonction pour générer le quiz*/
generateQuiz();

// Animation d'apparition
window.addEventListener('load', () => {
    const homeText = document.querySelector('.home-text');
    homeText.classList.add('fade-in');
});
