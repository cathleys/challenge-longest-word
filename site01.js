const marvelHeroes = [
  "Ant-Man",
  "Black Panther",
  "Black Widow",
  "Captain America",
  "Doctor Strange",
  "Hawkeye",
  "Hulk",
  "Iron Man",
  "Luke Cage",
  "Moon Knight",
  "Ms. Marvel",
  "Scarlet Witch",
  "Spider-Man",
  "Thor",
  "Wasp"
];

function findHero() {
  let lword = findLongestString(marvelHeroes);
  document.getElementById("results").innerHTML = lword;
  document.getElementById("namelist").innerHTML = `Hero Names: ${marvelHeroes}`;
}

//takes an array of strings and returns the longest one.
function findLongestString(namesArry) {
  //declare a variable
  let longestString = "";
  for (const item of namesArry) {
    if (item.length > longestString.length) {
      longestString = item;
    }
  }
  return longestString;
}
