const questions = [
  {
    location: "nord",
    question:
      "Le Musée-Placard présente la plus grande collection de placards au monde",
    reponse: false,
  },

  {
    location: "nord",
    question:
      "Le Fabuleux destin d’Amélie Poulin a été tourné à Montmartre en 2001",
    reponse: true,
  },

  {
    location: "nord",
    question:
      " La grosse cloche de la basilique du Sacré cœur s’appelle la Parisienne ",
    reponse: false,
  },

  {
    location: "nord",
    question: "L’origine de la Villette est « petit village » ",
    reponse: true,
  },

  {
    location: "nord",
    question: "Le Musée Nissim de Camondo donne sur le parc ",
    reponse: true,
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
      "Le meilleur restaurant basque de tout Paris se trouve à la Butte aux Cailles",
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

// A faire : Filtrer les questions par localisation
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

const StartGame = document.getElementById("start-game");
const NumberofQuestions = document.getElementById("leftDiv");
const QuizzScore = document.getElementById("scoreDiv");
const Quizzcontainer = document.getElementById("quizz");
const Quizzresults = document.getElementsByClassName("answer");
const TrueAnswer1 = document.querySelector("#question1 .true");
const FalseAnswer1 = document.querySelector("#question1 .false");
const SubjectiveAnswer1 = document.querySelector("#question1 .subjective");
const TrueAnswer2 = document.querySelector("#question2 .true");
const FalseAnswer2 = document.querySelector("#question2 .false");
const SubjectiveAnswer2 = document.querySelector("#question2 .subjective");
const TrueAnswer3 = document.querySelector("#question3 .true");
const FalseAnswer3 = document.querySelector("#question3 .false");
const SubjectiveAnswer3 = document.querySelector("#question3 .subjective");
const TrueAnswer4 = document.querySelector("#question4 .true");
const FalseAnswer4 = document.querySelector("#question4 .false");
const SubjectiveAnswer4 = document.querySelector("#question4 .subjective");
const TrueAnswer5 = document.querySelector("#question5 .true");
const FalseAnswer5 = document.querySelector("#question5 .false");
const SubjectiveAnswer5 = document.querySelector("#question5 .subjective");

const StartScreen = document.getElementById("start-screen");
const GameScreen = document.getElementById("game-screen");
const ShowQuestion1 = document.getElementById("question1");
const ShowQuestion2 = document.getElementById("question2");
const ShowQuestion3 = document.getElementById("question3");
const ShowQuestion4 = document.getElementById("question4");
const ShowQuestion5 = document.getElementById("question5");
let score = 0;
let count = 0;

// Ajout des events sur les boutons

// Fonction SCORE

function AddScore() {
  score += 1;
  document.getElementById("scoreDiv").innerHTML = score;
}

function CountQuestion() {
  count++;
  document.getElementById("leftDiv").innerHTML = count;
}

function SumGoodAnswers() {
  sum(score);
}

function showblock() {
  if (nextQuestion(question2).display != "none") {
    question2.style.display = "none";
  } else {
    question2.style.display = "block";
  }
}

StartGame.addEventListener("click", (event) => {
  console.log(event);
  StartScreen.style.display = "none";

  GameScreen.style.display = "block";
  ShowQuestion1.style.display = "block";
});

TrueAnswer1.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion1.style.display = "none";
  ShowQuestion2.style.display = "block";
});

FalseAnswer1.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion1.style.display = "none";
  ShowQuestion2.style.display = "block";
  score += 1;
});

SubjectiveAnswer1.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion1.style.display = "none";
  ShowQuestion2.style.display = "block";
});

TrueAnswer2.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion2.style.display = "none";
  ShowQuestion3.style.display = "block";
});

FalseAnswer2.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion2.style.display = "none";
  ShowQuestion3.style.display = "block";
});

SubjectiveAnswer2.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion2.style.display = "none";
  ShowQuestion3.style.display = "block";
  score += 1;
});

TrueAnswer3.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion2.style.display = "none";
  ShowQuestion3.style.display = "block";
});

FalseAnswer3.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion3.style.display = "none";
  ShowQuestion4.style.display = "block";
  score += 1;
});

SubjectiveAnswer3.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion3.style.display = "none";
  ShowQuestion4.style.display = "block";
});

TrueAnswer4.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion4.style.display = "none";
  ShowQuestion5.style.display = "block";
});

FalseAnswer4.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion4.style.display = "none";
  ShowQuestion5.style.display = "block";
  score += 1;
});

SubjectiveAnswer4.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion4.style.display = "none";
  ShowQuestion5.style.display = "block";
});

TrueAnswer5.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion5.style.display = "none";
  ShowQuestion6.style.display = "block";
});

FalseAnswer5.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion5.style.display = "none";
  ShowQuestion6.style.display = "block";
  score += 1;
});

SubjectiveAnswer5.addEventListener("click", (event) => {
  console.log(event);
  ShowQuestion5.style.display = "none";
  ShowQuestion6.style.display = "block";
});

//const restartButton = document.getElementById("restart-game"); // créer le bouton Restart CSS endgame
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
if (userAnswer === currentQuestion.correctAnswer) {
  // ajouter + 1 au score
  scoreDiv++;
} else {
  void 0;
}
// itération 5 : ajoute le score dans la section correspondante

// itération 6 : affiche la question suivante en cliquant sur Next

// itération 7 : end Game après 12 questions (set time out ?)

function showResults() {
  // itération 8 : sélectionne la catégorie avec le résultat maximal
  // itération 9 : affiche la phrase de réponse en fonction du score obtenu
  // loop through the array :
  // retourne une phrase en fonction du nombre de réponses :
}

//submitButton.addEventListener(cliquez, showResults);
