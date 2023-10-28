const questions = [
  {
    location: "nord",
    question:
      "Le Musée-Placard présente la plus grande collection de placards au monde",
    reponse: false,
    more: "Le Musée-Placard était le plus petit musée au monde! Il a fermé il y a 10 ans",
  },

  {
    location: "nord",
    question:
      "Le Fabuleux destin d’Amélie Poulain a été tourné à Montmartre en 2001",
    reponse: true,
    more: "C'est vrai !",
  },

  {
    location: "nord",
    question:
      " La grosse cloche de la basilique du Sacré cœur s’appelle la Parisienne ",
    reponse: false,
    more: "C'est la Savoyarde",
  },

  {
    location: "nord",
    question: "L’origine de la Villette est « petit village » ",
    reponse: true,
    more: "C'est vrai !",
  },

  {
    location: "nord",
    question: "Le Musée Nissim de Camondo donne sur le parc Monceau",
    reponse: true,
    more: "C'est vrai !",
  },

  {
    location: "nord",
    question: "Montmartre se trouve dans le 18e arrondissement ",
    reponse: true,
  },

  {
    location: "nord",
    question: "L’altitude du point culminant de Montmartre est de près de 130m",
    reponse: true,
  },

  {
    location: "south",
    question:
      "Dans le quartier de Montparnasse une colline constituée de gravats déposés depuis des lustres, est appelée avec humour par les étudiants du 17ème siècle, le Mont Parnasse, résidence des dieux grecs de la mythologie",
    reponse: true,
  },

  {
    location: "south",
    question:
      "La station Gobelins a été nommée ainsi en hommage à la banque Gringotts dans Harry Potter. ",
    reponse: false,
  },

  {
    location: "south",
    question:
      "Le quartier de Croulebarbe doit son nom au fait que jusqu’au 19e siècle, le quartier croulait sous le nombre de barbiers. ",
    reponse: false,
  },

  {
    location: "south",
    question: "Le Musée Zadkine se trouve près du jardin du Luxembourg",
    reponse: true,
  },

  {
    location: "nord",
    question: "Montmartre se trouve dans le 18e arrondissement ",
    reponse: true,
  },

  {
    location: "east",
    question:
      "Le quartier de Charonne doit son nom à la présence de nombreux restaurants de viande",
    reponse: false,
  },

  {
    location: "east",
    question:
      "Le monument central de la place de la Nation est un groupe en bronze commandé en 1879 par la ville de Paris au sculpteur Jules Dalou.",
    reponse: true,
  },

  {
    location: "east",
    question: "Le cimetière du Père Lachaise abrite la tombe d’Oscar Wilde. ",
    reponse: true,
  },

  {
    location: "nord",
    question:
      " La grosse cloche de la basilique du Sacré cœur s’appelle la Parisienne ",
    reponse: false,
  },

  {
    location: "east",
    question: "Bercy Village est né en 2001.",
    reponse: true,
  },

  {
    location: "east",
    question: "Le meilleur cinéma de l’est parisien est le MK2 bibliothèque",
    reponse: true,
  },

  {
    location: "east",
    question:
      "Frédéric Chopin et Jim Morrisson sont enterrés au cimetière du Père Lachaise",
    reponse: true,
  },

  {
    location: "east",
    question:
      "La gare de Lyon a été construite pour l’Exposition universelle de 1900 ",
    reponse: true,
  },

  {
    location: "west",
    question:
      "Le quartier de la Muette dans le 16e, doit son nom à une célèbre écrivaine du 19e surnommée « la Muette ». ",
    reponse: false,
  },

  {
    location: "west",
    question:
      "Le Musée du Quai Branly abrite les collections du physicien Edouard Branly",
    reponse: false,
  },

  {
    location: "west",
    question:
      "Le quartier de Javel a été nommé en hommage à l’invention de l’eau de Javel. ",
    reponse: false,
  },

  {
    location: "west",
    question:
      "Le Palais de Chaillot abrite des collections liées à l’architecture",
    reponse: true,
  },

  {
    location: "west",
    question: "L’avenue des Champs Elysées est longue de près de 2km de long ",
    reponse: true,
  },

  {
    location: "west",
    question:
      "L’origine du nom d’Auteuil vient de sa situation géographique car elle était située en hauteur. ",
    reponse: true,
  },

  {
    location: "west",
    question:
      "La ligne du métro 8 qui parcourt Paris d’est en ouest est la plus longue de Paris ",
    reponse: true,
  },

  {
    location: "nord",
    question: "L’altitude du point culminant de Montmartre est de près de 130m",
    reponse: true,
  },

  {
    location: "south",
    question: "La hauteur de la Tour Montparnasse est de 800m",
    reponse: false,
  },

  {
    location: "south",
    question: "La Tour Montparnasse est aussi surnommée la Veuve Noire",
    reponse: true,
  },

  {
    location: "east",
    question:
      "Le parc des Buutes-Chaumont est le plus grand parc parisien intra-muros",
    reponse: true,
  },

  {
    location: "west",
    question: "La Tour Eiffel mesure 330m de haut",
    reponse: true,
  },
];
console.log(questions);

//Test. Objectif : filtrer les réponses et score en fonction de la localisation - idée non retenue.
// Filtrer les questions par localisation
// 1°) map through the array of questions and get all the locations into one array as a final result

function getAllLocations(questionsArray) {
  const locations = questionsArray.map(function (question) {
    return question.location;
  });
  return locations;
}

//2°) filter the array to get a new array containing only west locations

function filterWestLocations(questionsArray) {
  const westLocation = questionsArray.filter(function (el) {
    return el.location === "west";
  });
  console.log(westLocation);
}

//3°) filter the array to get a new array containing only east locations

function filterEastLocations(questionsArray) {
  const eastLocation = questionsArray.filter(function (el) {
    return el.location === "east";
  });
  console.log(eastLocation);
}

//4°) filter the array to get a new array containing only south locations

function filterSouthLocations(questionsArray) {
  const southLocation = questionsArray.filter(function (el) {
    return el.location === "south";
  });
  console.log(southLocation);
}

function filterNorthLocations(questionsArray) {
  const northLocation = questionsArray.filter(function (el) {
    return el.location === "north";
  });
  console.log(northLocation);
}

/******Début de jeu******/

// Sélection des éléments HTML et stockage dans des variables
//démarrage du jeu
window.onload = function () {
  const StartGame = document.getElementById("start-game");
  const ReStartQuizz = document.getElementById("start-again");
  const NumberofQuestions = document.getElementById("leftDiv");
  const QuizzScore = document.getElementById("scoreDiv");
  const Quizzcontainer = document.getElementsByClassName("quizz");
  const Answercontainer = document.getElementsByClassName("more");
  const Quizzresults = document.getElementsByClassName("answer");
  const TrueAnswer1 = document.querySelector("#question1 .true");
  const FalseAnswer1 = document.querySelector("#question1 .false");

  const TrueAnswer2 = document.querySelector("#question2 .true");
  const FalseAnswer2 = document.querySelector("#question2 .false");
  const TrueAnswer3 = document.querySelector("#question3 .true");
  const FalseAnswer3 = document.querySelector("#question3 .false");
  const TrueAnswer4 = document.querySelector("#question4 .true");
  const FalseAnswer4 = document.querySelector("#question4 .false");
  const TrueAnswer5 = document.querySelector("#question5 .true");
  const FalseAnswer5 = document.querySelector("#question5 .false");
  const MoreQuestion1 = document.querySelector("#question1 .more");
  const StartScreen = document.getElementById("start-screen");
  const GameScreen = document.getElementById("game-screen");
  const ShowQuestion1 = document.getElementById("question1");
  const ShowQuestion2 = document.getElementById("question2");
  const ShowQuestion3 = document.getElementById("question3");
  const ShowQuestion4 = document.getElementById("question4");
  const ShowQuestion5 = document.getElementById("question5");
  const ShowEndGame = document.getElementById("end-game");

  let score = 0;
  let count = 0;
  //let currentQuestionIndex = 0;

  // Fonction SCORE
  function AddScore(questionId) {
    score += 1;
    document.getElementById("scoreDiv").innerHTML = score;
    document.getElementById(`question${questionId}`).style.display = "none";
    document.getElementById(`question${questionId + 1}`).style.display =
      "block";
    CountQuestion();
  }
  function Next(questionId) {
    document.getElementById(`question${questionId}`).style.display = "none";
    document.getElementById(`question${questionId + 1}`).style.display =
      "block";
    CountQuestion();
  }

  function LastAddscore(questionId) {
    score += 1;
    document.getElementById("scoreDiv").innerHTML = score;
    document.getElementById(`question${questionId}`).style.display = "none";
    document.getElementById("end-game").style.display = "block";
    ShowResults();
  }

  function LastNext(questionId) {
    CountQuestion();
    document.getElementById(`question${questionId}`).style.display = "none";
    document.getElementById("end-game").style.display = "block";
    ShowResults();
  }

  // Fonction décompte des questions
  function CountQuestion() {
    count++;
    document.getElementById("leftDiv").innerHTML = count;
  }

  // Fonction pour afficher le score final
  function ShowResults() {
    document.getElementById("score-final").innerHTML = score;
  }

  // Fonction pour afficher la réponse si non trouvée
  function KnowMore() {
    document.getElementsByClassName("more").innerHTML = more;
  }

  // Ajout des events sur les boutons

  StartGame.addEventListener("click", (event) => {
    console.log(event);
    StartScreen.style.display = "none";
    GameScreen.style.display = "block";
    ShowQuestion1.style.display = "block";
  });

  ShowEndGame.addEventListener("click", (event) => {
    console.log(event);
    StartScreen.style.display = "block";
    GameScreen.style.display = "none";
    ShowEndGame.style.display = "none";
  });

  ReStartQuizz.addEventListener("click", (event) => {
    console.log(event);
    score = 0;
    count = 0;
    document.getElementById("scoreDiv").innerHTML = score;
    document.getElementById("leftDiv").innerHTML = count;
    location.reload();
  });

  /*TrueAnswer1.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion1.style.display = "none";
    ShowQuestion2.style.display = "block";
    CountQuestion();
  });

  FalseAnswer1.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion1.style.display = "none";
    ShowQuestion2.style.display = "block";
    AddScore();
    CountQuestion();
  });

  /*MoreQuestion1.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion1.style.display = "none";
    ShowQuestion2.style.display = "none";
    KnowMore();
  });*/

  /*TrueAnswer2.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion2.style.display = "none";
    ShowQuestion3.style.display = "block";
    CountQuestion();
    AddScore();
  });

  FalseAnswer2.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion2.style.display = "none";
    ShowQuestion3.style.display = "block";
    CountQuestion();
  });

  TrueAnswer3.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion3.style.display = "none";
    ShowQuestion4.style.display = "block";
    CountQuestion();
  });

  FalseAnswer3.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion3.style.display = "none";
    ShowQuestion4.style.display = "block";
    AddScore();
    CountQuestion();
  });

  TrueAnswer4.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion4.style.display = "none";
    ShowQuestion5.style.display = "block";
    AddScore();
    CountQuestion();
  });

  FalseAnswer4.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion4.style.display = "none";
    ShowQuestion5.style.display = "block";
    CountQuestion();
  });

  TrueAnswer5.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion5.style.display = "none";
    ShowEndGame.style.display = "block";
    AddScore();
    CountQuestion();
    ShowResults();
  });

  FalseAnswer5.addEventListener("click", (event) => {
    console.log(event);
    ShowQuestion5.style.display = "none";
    ShowEndGame.style.display = "block";
    CountQuestion();
    ShowResults();
    ReStartQuizz();
  });/*

  /*Test : function showblock() {
  if (nextQuestion(question2).display != "none") {
    question2.style.display = "none";
  } else {
    question2.style.display = "block";
  }
}*/

  // Méthode qui permet d'automatiser l'itération questions + score + décompte questions (sans question random)
  // Loop sur l'array de questions pour faire sortir 5 questions
  let QuestionNumber = 1;
  let AnswerNumber = 1;
  for (let index = 1; index <= 5; index++) {
    //Variabilisation des questions
    const element = questions[index];
    console.log(element);
    console.log(document.querySelector(`#question${index} .quizz`));

    const Question = document.querySelector(`#question${index} .quizz`);

    // Récupère la question pour les boutons
    Question.innerHTML = element.question;
    const AnswerTrue = document.querySelector(
      `#question${index} .answer .true`
    );
    const AnswerFalse = document.querySelector(
      `#question${index} .answer .false`
    );
    console.log(element.reponse);

    if (element.reponse === true) {
      if (index === 5) {
        AnswerTrue.onclick = function () {
          LastAddscore(index);
        };
        AnswerFalse.onclick = function () {
          LastNext(index);
        };
      } else {
        AnswerTrue.onclick = function () {
          AddScore(index);
        };
        AnswerFalse.onclick = function () {
          Next(index);
        };
      }
    } else {
      if (index === 5) {
        AnswerTrue.onclick = function () {
          LastNext(index);
        };
        AnswerFalse.onclick = function () {
          LastAddscore(index);
        };
      } else {
        AnswerTrue.onclick = function () {
          Next(index);
        };
        AnswerFalse.onclick = function () {
          AddScore(index);
        };
      }
    }

    /*AnswerTrue.setAttribute("onclick", function OnClickTrue() {
      console.log("click true");

      document.getElementById(`question${QuestionNumber}`).style.display =
        "none";
      document.getElementById(`question${QuestionNumber + 1}`).style.display =
        "block";
      // variabilise l'affichage des questions
      CountQuestion();

      if (element.reponse === true) {
        AddScore();
      }
    });

    AnswerFalse.setAttribute("onclick", function OnClickFalse() {
      console.log("click false");
      document.getElementById(`question${QuestionNumber}`).style.display =
        "none";
      document.getElementById(`question${QuestionNumber + 1}`).style.display =
        "block";
      CountQuestion();
      if (element.reponse === false) {
        AddScore();
      }
    });

    if (element.reponse === true) {
      AddScore();
    } else QuestionNumber++;*/

    //QuestionNumber++;
    //}

    //let game;

    //restartButton.addEventListener("click", function () {
    // Call the restartGame function when the button is clicked
    //restartGame();
    //});
    //};
    // Déclaration des fonctions pour les étapes du quizz

    //function NextQuestion() {}

    // itération 1 : affiche la question dans la barre de quizz

    // itération 2 : clic sur Vrai ou Faux => affiche la réponse

    // itération 3 : compte + 1 au décompte de questions

    // itération 4 : si la réponse est correcte
    //if (userAnswer === currentQuestion.correctAnswer) {
    // ajouter + 1 au score
    //scoreDiv++;
    //} else {
    //void 0;
    //}
    // itération 5 : ajoute le score dans la section correspondante

    // itération 6 : affiche la question suivante en cliquant sur Next

    // itération 7 : end Game après 12 questions (set time out ?)

    //function showResults() {
    // itération 8 : sélectionne la catégorie avec le résultat maximal
    // itération 9 : affiche la phrase de réponse en fonction du score obtenu
    // loop through the array :
    // retourne une phrase en fonction du nombre de réponses :
    //};

    /* Autre TEST : affichage du score seulement à la fin

  displayQuestion();
}

// Fonction pour afficher la question actuelle
function displayQuestion() {
  const questionElement = document.getElementById("question");
  const reponseElement = document.getElementById("reponse");

  if (currentQuestionIndex < questions.length) {
    questionElement.textContent = questions[currentQuestionIndex].question;
    reponseElement.innerHTML = "";

    questions[currentQuestionIndex].reponse.forEach((reponse) => {
      const answerButton = document.createElement("button");
      answerButton.textContent = reponse;
      answerButton.addEventListener("click", () => checkAnswer(reponse));
      answersElement.appendChild(answerButton);
    });
  } else {
    // Le quiz est terminé, affichez le score final ou un message de fin.
    questionElement.textContent = "Quiz terminé ! Score final : " + score;
    answersElement.innerHTML = "";
  }
}

// Fonction pour vérifier la réponse et mettre à jour le score
function checkAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (selectedAnswer === correctAnswer) {
    score++;
  }
  currentQuestionIndex++;
  displayQuestion();
}

const restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", restartQuiz);*/
  }
};
