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
    reponse: subjective,
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
];

// A faire : Filtrer les questions par localisation ?

function getwestLocation(questions) {
  const location = questions.map(function () {
    return question.location;
  });
  return;
}

/******Début de jeu******/

// Sélection des éléments HTML et stockage dans des variables

const NumberofQuestions = getElementbyId("leftDiv");
const QuizzScore = getElementbyId("scoreDiv");
const Quizzcontainer = getElementbyId("quizz");
const Quizzresults = getElementbyClass("answer");

// Déclaration des fonctions pour les étapes du quizz

function buildQuizz() {}
function showResults() {}

submitButton.addEventListener(cliquez, showResults);

let nbBonnereponse = 0;
for (let i = 0; i < questions.length; i += 1) {
  let repUser = prompt(questions[i].question);
  if (repUser == question[i].reponse) {
    alert("Exact!");
    nbBonnereponse += 1;
  } else {
    alert("Eh non, raté");
  }
}
alert(`Vous avez $(nbBonnereponse) bonnes réponses`);

function checkAnswer() {
  turn++;
  if (news[randomIndex].trueorfalse === true) {
    score++;
    document.getElementbyId("scoreDiv").innerHTML = `SCORE:
        ${score}`;
  }
}
