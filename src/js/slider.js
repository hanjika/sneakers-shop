import { SNEAKER } from './data'

export function imageToLeft() {
    const current = document.querySelector('.main-image');
    const classNumber = current.classList[1];
    const number = parseInt(classNumber);
}

export function imageToRight() {
    const current = document.querySelector('.main-image');
    const number = current.classList[1];

    current.classList.remove(classNumber);
    number++;
    console.log(number);
}

export function displayLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'flex';
}

export function changeImage(e) {
    const selected = e.target;

    if (!selected.classList.contains('active')) {
        selected.classList.toggle('active');
        deactivateSiblingImages(selected);

        const photo = document.querySelector('.main-photo');

        const num = selected.classList[1];
        if (num === 'one') {
            photo.setAttribute('src', SNEAKER[0].enlarged);
        } else if (num === 'two') {
            photo.setAttribute('src', SNEAKER[1].enlarged);
        }  else if (num === 'three') {
            photo.setAttribute('src', SNEAKER[2].enlarged);
        }  else if (num === 'four') {
            photo.setAttribute('src', SNEAKER[3].enlarged);
        }
    }
}

function displayImage(image) {
    const img = document.querySelector('#enlarged-img');
    img.setAttribute('src', image);

    document.querySelector('#popup-frame').style.display = 'flex';
}

function deactivateSiblingImages(selected) {
    const allImages = Array.from(document.querySelectorAll('.thumbnail'));
    const imageNumber = selected.classList[1];
    const unselectedImages = removeTypeFromArray(allImages, imageNumber);

    for (const image of unselectedImages) {
        if (image.classList.contains('active')) {
            image.classList.remove('active');   
        }
    }
}

function removeTypeFromArray(arr, type) {
    const arrWithoutType = arr.slice();

    for (let i = 0; i < arrWithoutType.length; i++) {
        const classNumber = arrWithoutType[i].classList[1];
        if (classNumber === type) {
        arrWithoutType.splice(i, 1);
        }
    }
    return arrWithoutType;
}