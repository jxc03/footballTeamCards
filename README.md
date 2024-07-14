<h1 align="center">
  footballTeamCards
</h1>

<p>
  Learnt how to work with  DOM manipulation, object destructuring, event handling, and data filtering. This project covered concepts like switch statements, default parameters, Object.freeze(), the map() method, and more.
</p>

## Preview
https://github.com/user-attachments/assets/0ff7f9d0-37f9-4abb-bfd9-328916096fc9

## Steps
**S1**<br>
In this project, you will build a set of football team cards and learn about nested objects, object destructuring, default parameters, event listeners, and switch statements. All of the HTML and CSS for this project has been provided for you.<br>

Start by accessing the `id` called `"team"` from the HTML document and storing it in a `const` variable called `teamName`. Remember, you can use the `getElementById` method for this.<br>

<i>NOTE</i>: The numbers for the team are organized alphabetically by last name. This differs from conventional numbering where the numbers correspond with what is on the player's jerseys.

```js
const teamName = document.getElementById("team");
```

**S2**<br>
Next, access the `id` called `"sport"` from the HTML document and store it in a `const` variable called `typeOfSport`. Below that variable, assign the `id` of `"year"` to a `const` variable called `worldCupYear`.

```js
const typeOfSport= document.getElementById("sport");
const worldCupYear= document.getElementById("year");
```

**S3**<br>
Next, access the `id` called `"head-coach"` from the HTML document and store it in a `const` variable called `headCoach`. Below that variable, assign the `id` of `"player-cards"` to a `const` variable called `playerCards`.

```js
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
```

**S4**<br>
Create one more `const` variable called `playersDropdownList` and assign it the `id` of `"players"` using the `getElementById` method.

```js
const playersDropdownList = document.getElementById("players");
```

**S5**<br>
Now it is time to build out the data structure that will hold all of the information for your football team.<br>

Below the variables you just created, create a new `const` variable called `myFavoriteFootballTeam` and assign it an empty object.

```js
const myFavoriteFootballTeam = {};
```

**S6**<br>
Inside the `myFavoriteFootballTeam` object, add a new property with a key named `team` and a string value of `"Argentina"`.

```js
const myFavoriteFootballTeam = {
  team: "Argentina"
};
```

**S7**<br>
Below the `team` property, add a new property with a key named `sport` and a string value of `"Football"`.

```js
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football"
};
```

**S8**<br>
Below the `sport` property, add a new property with a key named `year` and a number value of `1986`.

```js
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986
};
```

**S9**<br>
Below the `year` property, add a new property with a key named `isWorldCupWinner` and a boolean value set to `true`.

```js
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true
};
```

**S10**<br>
Below the `isWorldCupWinner` property, add a new key called `headCoach` with a value of an empty object. Inside that object, add a property with a key of `coachName` and a string value of `"Carlos Bilardo"`. Below that property, add another key called `matches` with a number value of `7`.

```js
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  }
```

**S11**<br>
Below the `headCoach` property, create a new property with a key named `players` with the value of an empty array.

```js
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: []
```

**S12**<br>
Inside that `players` array, create a new object with the following properties:
`Example Code`<br>
`name: "Sergio Almirón"`<br>
`position: "forward"`<br>
`number: 1`<br>
`isCaptain: false`<br>
`nickname: null`<br>
<i>NOTE</i>: The numbers for the team are organized alphabetically by last name. This differs from conventional numbering where the numbers correspond with what is on the player's jerseys.

```js
{
  name: "Sergio Almirón",
  position: "forward",
  number: 1,
  isCaptain: false,
  nickname: null,
}
```

**S13**<br>
Below that object, create a new object with the following properties:<br>
`Example Code`<br>
`name: "Sergio Batista"`<br>
`position: "midfielder"`<br>
`number: 2`<br>
`isCaptain: false`<br>
`nickname: null`   

```js
{
  name: "Sergio Batista",
  position: "midfielder",
  number: 2,
  isCaptain: false,
  nickname: null,
}
```

**S14**<br>
The rest of the data for the `myFavoriteFootballTeam.players` array has been filled out for you.<br>

The next step is to ensure that you can't modify this object by adding or removing any properties. We are going to use a method called `Object.freeze(obj)` which will freeze this object and prevent any changes being made to it.<br>

Use the `Object.freeze()` method to freeze the `myFavoriteFootballTeam` object.

```js
Object.freeze(myFavoriteFootballTeam);
```

**S15**<br>
The next step is to access the key called `sport` from the `myFavoriteFootballTeam` object and assign it to a new `const` variable called `sport`. Remember you can use dot notation for this.

```js
const sport = myFavoriteFootballTeam.sport;
```

**S16**<br>
Below the `sport` variable, access the key called `team` from the `myFavoriteFootballTeam` object and assign it to a new `const` variable called `team`.

```js
const team = myFavoriteFootballTeam.team;
```

**S17**<br>
In the last two steps, you have been accessing properties from the `myFavoriteFootballTeam` object using dot notation and assigning them to new `const` variables. But in JavaScript, there is an easier way to accomplish the same goal.<br>

The <i>object destructuring</i> syntax allows you to unpack values from arrays and objects:<br>
`Example Code`<br>
`const developerObj = {`<br>
  `name: "Jessica Wilkins",`<br>
  `isDeveloper: true`<br>
`};`<br>
`// Object destructuring`<br>
`const { name, isDeveloper } = developerObj;`<br>

Rewrite the two lines of code below using the new destructuring syntax. Your answer should be one line of code.

```js
const {sport, team } = myFavoriteFootballTeam;
```

**S18**<br>
Next, add the `year` and `players` to your destructuring assignment.

```js
const { sport, team, year, players } = myFavoriteFootballTeam;
```

**S19**<br>
Now you need to access the `coachName` value from the `myFavoriteFootballTeam.headCoach` object using the destructuring syntax.

```js
const { coachName } = myFavoriteFootballTeam.headCoach;
```

**S20**<br>
Now you need to start displaying the team's information on the screen.<br>

Below your destructuring assignments, assign the `sport` variable to `typeOfSport.textContent`.
Once you complete that task, you should see the result in the preview window.

```js
typeOfSport.textContent = sport;
```

**S21**<br>
Next, assign the `team` variable to `teamName.textContent`.

```js
teamName.textContent = team;
```

**S22**<br>
Assign the `year` variable to `worldCupYear.textContent`.<br>

Below that, assign the `coachName` variable to `headCoach.textContent`. You should now see all of that information displayed on the screen below `Team stats`.

```js
worldCupYear.textContent = year;
headCoach.textContent = coachName;
```

**S23**<br>
Now you will start building out the function that will show player cards based on the selections made by the user in the `Filter Teammates` dropdown menu.<br>

Start by creating an empty arrow function called `setPlayerCards`. You do not need to add a parameter because that will be taken care of in the next step.

```js
const setPlayerCards = () => {};
```

**S24**<br>
Function parameters can be initialized with default values. If a function is called without an argument, then the default value will be used:<br>
`Example Code`<br>
`const greeting = (name = "Anonymous") => {`<br>
  `return "Hello " + name;`<br>
`}`<br>
`console.log(greeting("John")); // Hello John`<br>
`console.log(greeting()); // Hello Anonymous`<br>

Add a new parameter to your `setPlayerCards` function called `arr` and assign it a default value of `players`. Remember that you destructured the players variable from the `myFavoriteFootballTeam` object on line `175`.

```js
const setPlayerCards = (arr = players) => {};
```

**S25**<br>
The next step is to create a new array that will be responsible for adding the player card information to the page.<br>

Inside the `setPlayerCards` function, start by adding the `map` method to `arr` that will take in an empty callback function. Then, use the addition assignment `+=` operator to assign the new array to `playerCards.innerHTML`. Remember that the `innerHTML` property gets, or in this case, sets the HTML markup for the `playerCards` element.

```js
playerCards.innerHTML += arr.map(() => {});
```

**S26**<br>
`arr` contains a series of objects that each contains a `name`, `position`, `number`, `isCaptain` and `nickname` property. In order to access each of those properties inside the callback function, you will need to use object destructuring to unpack them into variables.<br>

Here is an example:<br>
`Example Code`<br>
`function myExampleFunction({ name, age, job, city }) {}`<br>

Inside the parameter list in the callback function for the `map` method, unpack all 5 object properties from objects in `arr` using object destructuring. 

```js
playerCards.innerHTML += arr.map(({ name, position, number, isCaptain, nickname }) => {})
```

**S27**<br>
Inside the body of the callback function, you will need to add template literals `` which will contain the HTML content for the player cards.<br>

Inside the template literals, add an empty `div` with a class of `"player-card"`.

```js
playerCards.innerHTML += arr.map(
  ({ name, position, number, isCaptain, nickname }) => {
    `<div class="player-card"></div>`
  }
);
```

**S28**<br>
Inside the `div`, add an `h2` element which contains the `name` parameter. Since you are working with template literals, you will need to use an embedded expression for the `name` parameter:
`Example Code`<br>
`${expression goes here}`

```js
<h2>${name}</h2>
```

**S29**<br>
The next step would be to display the word `(Captain)` next to the player if they are listed as a captain for the team.<br>

Before the `${name}` expression, add a new embedded expression. Inside that expression, use a ternary operator to check if `isCaptain` is true. If so, return `"(Captain)"` otherwise return an empty string.

```js
<h2>${isCaptain ? "(Captain)" : ""} ${name}</h2>
```

**S30**<br>
Below the `h2` element, add a paragraph element with the text `Position:` and an embedded expression that contains the `position` parameter.

```js
<p>Position: ${position}</p>
```

**S31**<br>
Below the paragraph element, add another paragraph element with the text `Number:` and an embedded expression that contains the `number` parameter.

```js
<p>Number: ${number}</p>
```

**S32**<br>
Below your existing paragraph elements, add another paragraph element with the text `Nickname:`.

```js
<p>Nickname:</p>
```

**S33**<br>
Next to the `Nickname:` text, add an embedded expression that will show the player's nickname if they have one.<br>

Use a ternary operator to check if `nickname` is not `null`. If the player has a `nickname`, display `nickname` otherwise display `"N/A"`.

```js
${nickname !== null ? nickname : "N/A"}
```

**S34**<br>
The `.map()` method will return a new array of `player-card items` separated by commas.<br>

To remove the commas between each `player-card` so it does not show up on screen, chain the `.join()` method to the `.map()` method. Pass an empty string as the argument for the `.join()` method.

```js
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
    ).join("");
};
```

**S35**<br>
The next step is to create a function that will detect when a user makes a selection from the `playersDropdownList`.<br>

Use the `.addEventListener()` method on `playersDropdownList`. Inside the event listener, pass in a `"change"` event type and an empty callback function.

```js
playersDropdownList.addEventListener("change", () => {});
```

**S36**<br>
For the callback function, pass in `e` as a parameter.<br>

`e` represents an object which contains the information for that event.

```js
playersDropdownList.addEventListener("change", (e) => {});
```

**S37**<br>
Inside the callback function, add a `console.log` with the value of `e.target.value`.<bbr>

Open the console, and make a selection from the teammates dropdown menu. You should see the value of that selection in the console.<br>

`e.target.value` represents the `value` property from the `playersDropdownList` element. In future steps, you will use this value to show player cards based on the position they play.

```js
console.log(e.target.value)
```

**S38**<br>
Remove the `console.log` statement you created in the previous step.<br>

The next step would be to reset the content for the `playerCards` element.<br>

Inside the callback function, access the `innerHTML` property of the `playerCards` element and assign it a value of an empty string.

```js
playerCards.innerHTML = "";
```

**S39**<br>
The next step would be to add a `switch` statement which will check for the user's selection from the player dropdown menu and filter out cards based on the player's positions. <br>

Add a `switch` statement and use `e.target.value` for the expression.

```js
switch(e.target.value){}
```

**S40**<br>
If the user selects `Nicknames` from the dropdown menu you will want to filter out player cards that have a nickname.<br>

Start by adding a `case` clause for `"nickname"` inside your `switch` statement.

```js
switch (e.target.value) {
  case "nickname":
}
```

**S41**<br>
Call the `setPlayerCards` function with an argument of `players.filter()`.<br>

Inside the `filter` method, add a callback function with a parameter called `player` and implicitly return `player.nickname` is not `null`.

```js
setPlayerCards(players.filter((player) => player.nickname !== null));
```

**S42**<br>
Before you can move onto the next `case`, you will need to add a `break` statement.<br>

Below your `setPlayerCards` call, add a `break` statement.

```js
break;
```

**S43**<br>
Next, add a `case` clause for `"forward"`.<br>

Inside that `case`, call the `setPlayerCards` function with an argument of `players.filter()`.<br>

Inside the `filter()` method, add a callback function with a parameter of `player` that will check if `player.position` equals `"forward"`.<br>

Lastly, add a break statement below the setPlayerCards function call.

```js
case "forward":
  setPlayerCards(players.filter((player) => player.position === "forward"));
  break;
```

**S44**<br>
Add a new `case` for `"midfielder"` that checks if `player.position` equals `"midfielder"` following the same pattern from the previous step.

```js
case "midfielder":
  setPlayerCards(players.filter((player) => player.position === "midfielder"));
  break;

```

**S45**<br>
Add a new `case` for `"defender"` that checks if `player.position` equals `"defender"` following the same pattern as the previous step.

```js
case "defender":
  setPlayerCards(players.filter((player) => player.position === "defender"));
  break;
```

**S46**<br>
Add a new `case` for `"goalkeeper"` that checks if `player.position` equals `"goalkeeper"` following the same pattern as the previous step.

```js
case "goalkeeper":
  setPlayerCards(players.filter((player) => player.position === "goalkeeper"));
  break;
```

**S47**<br>
The final step is to add a `default` clause if none of the other `case` clauses match the user selection.<br>

For the default clause, call the setPlayerCards function without any arguments passed in.<br>
Test out your dropdown menu, and you should see the player cards be filtered out by position or nickname.<br>

Congratulations on completing the football team cards project!

```js
default: 
  setPlayerCards();
```
