import { SNEAKER } from './data';
import { imageToLeft, imageToRight } from './slider';

/* Slider buttons */

document.querySelector(".left-btn").addEventListener("click", () => {
    imageToLeft();
});

document.querySelector(".right-btn").addEventListener("click", () => {
    const current = document.querySelector(".main-image");
    const classNumber = current.classList[1];
    let number = parseInt(classNumber);

    number++;
    console.log(number);
    current.style.backgroundImage = 'url("' + SNEAKER[number].enlarged + '")';
});

function imageToLeft() {
    console.log("here")
    const current = document.querySelector(".main-image");
    const classNumber = current.classList[1];
    let number = parseInt(classNumber);
}

function imageToRight() {
    const image = document.querySelector(".main-image");
    const classNumber = image.classList[1];
    let number = parseInt(classNumber);

    number++;
    console.log(number);
    image.classList.add("hello");
    image.style.backgroundImage = 'url("' + SNEAKER[number].enlarged + '")';
}