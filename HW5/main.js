const userYear = prompt("Please input your year of birth");
const userCity = prompt("Please input your city");
const userSport = prompt("Please input your favourite sport");

const age = 2024 - parseInt(userYear);

const sportsChamps = {
  tennis: "Elina Svitolina",
  boxing: "Oleksandr Usyk",
  fencing: "Olga Kharlan",
};


if (userYear === null || userCity === null || userSport === null) {
  alert(
    "It is a pity that you did not want to enter yours " +
      (userYear === null ? "year of birth" : "") +
      (userCity === null ? (userYear === null ? " and" : "") + " city" : "") +
      (userSport === null
        ? (userYear === null || userCity === null ? " and" : "") +
          " favourite sport"
        : "") +
      "."
  );
} 

else {
  let message = `Your age is ${age}.`;

  if (
    userCity === "Kyiv" ||
    userCity === "Washington" ||
    userCity === "London"
  ) {
    let country;
    switch (userCity) {
      case "Kyiv":
        country = "Ukraine";
        break;
      case "Washington":
        country = "USA";
        break;
      case "London":
        country = "Great Britain";
        break;
    }
    message += `\nYou live in the capital of ${country}.`;
  } else {
    message += `\nYou live in the city of ${userCity}.`;
  }

  if (userSport.toLowerCase() in sportsChamps) {
    const champion = sportsChamps[userSport.toLowerCase()];
    message += `\nCool! Do you want to become like ${champion}?`;
  } else {
    message += `\nYour favorite sport is ${favoriteSport}.`;
  }

  alert(message);
}
