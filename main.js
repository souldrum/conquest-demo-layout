"use strict";

//likeCounter

const like = document.querySelector(".header-icons__like");
const likeCounter = document.querySelector(".header-icons__like-counter");
let counter = +likeCounter.textContent;

const increaseCounter = () => {
    counter++;
    likeCounter.innerText = counter;
};

like.addEventListener("click", increaseCounter);
