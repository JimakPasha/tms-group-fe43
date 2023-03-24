import { count } from "./modules/counTimer.js";

const countElements = {
  startCountButton: document.getElementsByClassName("count__start")[0],
  stopCountButton: document.getElementsByClassName("count__stop")[0],
  countTarget: document.getElementsByClassName("count__counter")[0],
  isStart: false,
  seconds: 1,
};

count(countElements);
