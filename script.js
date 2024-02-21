function TabClick(page) {
  window.location.href = page;
}

window.onload = loadData;

function loadData() {
  try {
      document.getElementById("players").value = sessionStorage.getItem("players");
  } catch (error) {}

  try {
      document.getElementById("player1Input").value = sessionStorage.getItem("player1Cut");
  } catch (error) {}

  try {
      document.getElementById("player2Input").value = sessionStorage.getItem("player2Cut");
  } catch (error) {}

  try {
      document.getElementById("player3Input").value = sessionStorage.getItem("player3Cut");
  } catch (error) {}

  try {
      document.getElementById("player4Input").value = sessionStorage.getItem("player4Cut");
  } catch (error) {}

  try {
      document.getElementById("hardMode").value = sessionStorage.getItem("hardMode");
  } catch (error) {}

  try {
      document.getElementById("72Hours").value = sessionStorage.getItem("withinHours");
  } catch (error) {}

  try {
      document.getElementById("eliteChallenge").value = sessionStorage.getItem("eliteChallenge");
  } catch (error) {}

  try {
      document.getElementById("primaryTargetSelect").value = sessionStorage.getItem("primaryTarget");
  } catch (error) {}

  try {
      document.getElementById("goldBars").value = sessionStorage.getItem("goldBars");
  } catch (error) {}

  try {
      document.getElementById("cash").value = sessionStorage.getItem("cash");
  } catch (error) {}

  try {
      document.getElementById("cocaine").value = sessionStorage.getItem("cocaine");
  } catch (error) {}

  try {
      document.getElementById("weed").value = sessionStorage.getItem("weed");
  } catch (error) {}

  try {
      document.getElementById("paintings").value = sessionStorage.getItem("paintings");
  } catch (error) {}

  calculate();
}

var totalEarnings = 0;
var primary = 0;
var secondary = 0;

function calculate() {
  players = sessionStorage.getItem("players");
  player1Part = sessionStorage.getItem("player1Cut");
  player2Part = sessionStorage.getItem("player2Cut");
  player3Part = sessionStorage.getItem("player3Cut");
  player4Part = sessionStorage.getItem("player4Cut");

  primaryTarget = sessionStorage.getItem("primaryTarget");
  goldBars = sessionStorage.getItem("goldBars");
  cash = sessionStorage.getItem("cash");
  cocaine = sessionStorage.getItem("cocaine");
  weed = sessionStorage.getItem("weed");
  paintings = sessionStorage.getItem("paintings");

  hardMode = sessionStorage.getItem("hardMode");
  WithinHours = sessionStorage.getItem("withinHours");
  eliteChallenge = sessionStorage.getItem("eliteChallenge");

  totalEarnings = 0;
  primary = 0;
  secondary = 0;
  const bagMax = players * 100;
  var bag = 0;
  var diference = 0;
  var bonus = WithinHours === "yes" ? 1.1 : 1;

  if (primaryTarget === "Tequila") {
      totalEarnings = 630000;
      primary = 630000;
  } else if (primaryTarget === "Ruby Necklace") {
      totalEarnings = 700000;
      primary = 700000;
  } else if (primaryTarget === "Bearer Bonds") {
      totalEarnings = 770000;
      primary = 770000;
  } else if (primaryTarget === "Pink diamond") {
      totalEarnings = 1300000;
      primary = 1300000;
  }

  if (hardMode === "yes") {
      totalEarnings *= 1.1;
  }

  if (eliteChallenge === "yes") {
      totalEarnings += 100000;
  }

  for (var i = 0; i < goldBars; i++) {
      if (bag < bagMax - 66) {
          totalEarnings += 300000 * bonus;
          secondary += 300000 * bonus;
          bag += 66;
      } else {
          diference = bagMax - bag;
          bag = bagMax;
          totalEarnings += (300000 * bonus) * (diference / 66);
          secondary += (300000 * bonus) * (diference / 66);
          break;
      }
  }

  for (var i = 0; i < cocaine; i++) {
      if (bag < bagMax - 50) {
          totalEarnings += 200000 * bonus;
          secondary += 200000 * bonus;
          bag += 50;
      } else {
          diference = bagMax - bag;
          bag = bagMax;
          totalEarnings += (200000 * bonus) * (diference / 50);
          secondary += (200000 * bonus) * (diference / 50);
          break;
      }
  }

  for (var i = 0; i < paintings; i++) {
      if (bag < bagMax - 50) {
          totalEarnings += 160000 * bonus;
          secondary += 160000 * bonus;
          bag += 50;
      } else {
          diference = bagMax - bag;
          bag = bagMax;
          totalEarnings += (160000 * bonus) * (diference / 50);
          secondary += (160000 * bonus) * (diference / 50);
          break;
      }
  }

  for (var i = 0; i < cash; i++) {
      if (bag < bagMax - 25) {
          totalEarnings += 80000 * bonus;
          secondary += 80000 * bonus;
          bag += 25;
      } else {
          diference = bagMax - bag;
          bag = bagMax;
          totalEarnings += (80000 * bonus) * (diference / 25);
          secondary += (80000 * bonus) * (diference / 25);
          break;
      }
  }

  for (var i = 0; i < weed; i++) {
      if (bag < bagMax - 40) {
          totalEarnings += 120000 * bonus;
          secondary += 120000 * bonus;
          bag += 40;
      } else {
          diference = bagMax - bag;
          bag = bagMax;
          totalEarnings += (120000 * bonus) * (diference / 40);
          secondary += (120000 * bonus) * (diference / 40);
          break;
      }
  }

  totalEarnings *= 0.882;

  const player1Earnings = Math.round(totalEarnings * (player1Part / 100));
  const player2Earnings = Math.round(totalEarnings * (player2Part / 100));
  const player3Earnings = Math.round(totalEarnings * (player3Part / 100));
  const player4Earnings = Math.round(totalEarnings * (player4Part / 100));
  primary = Math.round(primary);
  secondary = Math.round(secondary);

  document.getElementById("player1Rewards").innerText = player1Earnings.toLocaleString('en-US') + '$';
  document.getElementById("player2Rewards").innerText = player2Earnings.toLocaleString('en-US') + '$';
  document.getElementById("player3Rewards").innerText = player3Earnings.toLocaleString('en-US') + '$';
  document.getElementById("player4Rewards").innerText = player4Earnings.toLocaleString('en-US') + '$';
  document.getElementById("primaryValue").innerText = primary.toLocaleString('en-US') + '$';
  document.getElementById("secondaryValue").innerText = secondary.toLocaleString('en-US') + '$';
}

function fetchInput() {
  var trimmedURL = window.location.href.trim();

  if (trimmedURL.endsWith("/Players/")) {
      sessionStorage.setItem("players", document.getElementById("players").value);
      sessionStorage.setItem("player1Cut", document.getElementById("player1Input").value);
      sessionStorage.setItem("player2Cut", document.getElementById("player2Input").value);
      sessionStorage.setItem("player3Cut", document.getElementById("player3Input").value);
      sessionStorage.setItem("player4Cut", document.getElementById("player4Input").value);
  } else if (trimmedURL.endsWith("/Targets/")) {
      sessionStorage.setItem("primaryTarget", document.getElementById("primaryTargetSelect").value);
      sessionStorage.setItem("goldBars", document.getElementById("goldBars").value);
      sessionStorage.setItem("cash", document.getElementById("cash").value);
      sessionStorage.setItem("cocaine", document.getElementById("cocaine").value);
      sessionStorage.setItem("weed", document.getElementById("weed").value);
      sessionStorage.setItem("paintings", document.getElementById("paintings").value);
  } else if (trimmedURL.endsWith("/")) {
      sessionStorage.setItem("hardMode", document.getElementById("hardMode").value);
      sessionStorage.setItem("withinHours", document.getElementById("72Hours").value);
      sessionStorage.setItem("eliteChallenge", document.getElementById("eliteChallenge").value);
  }

  calculate();
}

document.addEventListener("input", fetchInput);

function updateMaxValues() {
  const numberNums = parseFloat(document.getElementById('players').value) || 4;
  const num1 = parseFloat(document.getElementById('player1Input').value) || 0;
  const num2 = parseFloat(document.getElementById('player2Input').value) || 0;
  const num3 = parseFloat(document.getElementById('player3Input').value) || 0;
  const num4 = parseFloat(document.getElementById('player4Input').value) || 0;

  var remainingSum = 100 - num1;

  if (players == 2) {
      remainingSum = 100 - (num1 + num2);
  } else if (players == 3) {
      remainingSum = 100 - (num1 + num2 + num3);
  } else if (players == 4) {
      remainingSum = 100 - (num1 + num2 + num3 + num4);
  }

  document.getElementById('player1Input').max = remainingSum + num1;
  document.getElementById('player2Input').max = remainingSum + num2;
  document.getElementById('player3Input').max = remainingSum + num3;
  document.getElementById('player4Input').max = remainingSum + num4;
}
