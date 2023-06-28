/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomCards());
  document.querySelector(".card").innerHTML = generateRandomValue();
};

let generateRandomValue = () => {
  let value = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let randomValue = Math.floor(Math.random() * value.length);

  return value[randomValue];
};

let generateRandomCards = () => {
  let cards = ["heart", "spade", "club", "diamond"];
  let randomCard = Math.floor(Math.random() * cards.length);

  return cards[randomCard];
};
