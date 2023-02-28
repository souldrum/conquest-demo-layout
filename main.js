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

//pagination
const pageNumber = document.querySelector(".page-counter");
const pageDec = document.querySelector(".arrow-page_back");
const pageInc = document.querySelector(".arrow-page_forward");

const addZero = (value) => {
    const numWithZero = `0${value}`;

    if (value === 0 || value < 10) {
        return numWithZero;
    }
    return value;
};

const initialPage = addZero(1);
const lastPage = addZero(10); //например в альбоме 10 страниц

pageNumber.innerText = initialPage;

let pageCounter = pageNumber.textContent;

pageDec.addEventListener("click", () => {
    pageCounter--;
    if (pageCounter < 1) {
        pageCounter = +lastPage;
    }
    pageNumber.innerText = addZero(pageCounter);
});

pageInc.addEventListener("click", () => {
    pageCounter++;
    if (pageCounter > 10) {
        pageCounter = +initialPage;
    }
    pageNumber.innerText = addZero(pageCounter);
});
