import { SNEAKER } from './data'

export function imageToLeft() {
    const current = document.querySelector(".main-image");
    const classNumber = current.classList[1];
    const number = parseInt(classNumber);
}

export function imageToRight() {
    const current = document.querySelector(".main-image");
    const number = current.classList[1];

    current.classList.remove(classNumber);
    number++;
    console.log(number);
}