// getElementById() retrieves the HTML element based on the id id from index.html
const teamName = document.getElementById("team"); // returns element with the id attribute set to team
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");

// Information about the team assigned to myFavoriteFootballTeam
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Ricardo Bochini",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
    },
    {
      name: "José Luis Brown",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

// Object.freeze() prevents any changes to its properties
Object.freeze(myFavoriteFootballTeam); // previously defined is frozen
// Destructuring (allows to create variables directly from object) properties from myFavoriteFootballTeam
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

// DOM manipulation, .textContent returns the text content of an element
typeOfSport.textContent = sport; // assigns the value of sport variable (taken earlier) to the textContent property of an element with the ID typeOfSport eg. "football"
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

// Finish explain
const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

// Finish explain
playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";
  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
      default: setPlayerCards();
    }
});