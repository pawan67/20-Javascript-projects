const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];
getRandomUser();
getRandomUser();
getRandomUser();
//Fetch random user and money

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };
  addData(newUser);
}
//double money
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
  console.log("Double clicked");
}
//sort users by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}
//filter only millionaires
function showMill() {
  data = data.filter((user) => user.money > 100000);
  updateDOM();
}
//calculate wealth
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  var wealthElement = document.createElement("div");
  wealthElement.innerHTML = `<h3> Total wealth</h3><strong>${formatMoney(
    wealth
  )}</strong>`;
  main.appendChild(wealthElement);
}
//Add new obj to data arr

function addData(obj) {
  data.push(obj);

  updateDOM();
}
//Update DOM
function updateDOM(provideData = data) {
  //clear the main div
  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";

  provideData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong> ${item.name}</strong> ${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

//format number as money

function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,"); // 12,345.67
}

//event listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionairesBtn.addEventListener("click", showMill);
calculateWealthBtn.addEventListener("click", calculateWealth);
