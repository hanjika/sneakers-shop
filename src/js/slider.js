import { SNEAKER } from './data'

export function imageToLeft(e) {
    const selectedBtn = e.target;

    let currentPic = document.querySelector('.main-photo');
    if (selectedBtn.classList[0] === 'lightbox-left-btn') {
        currentPic = document.querySelector('.lightbox-main-photo');
    }
    const num = currentPic.classList[1];

    if (num === 'one') {
        currentPic.setAttribute('src', SNEAKER[0].gallery[3].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('four');
    } else if (num === 'two') {
        currentPic.setAttribute('src', SNEAKER[0].gallery[0].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('one');
    }  else if (num === 'three') {
        currentPic.setAttribute('src', SNEAKER[0].gallery[1].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('two');
    }  else if (num === 'four') {
        currentPic.setAttribute('src', SNEAKER[0].gallery[2].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('three');
    }
    
    if (selectedBtn.classList[0] === 'lightbox-left-btn') {
        activateThumbnails(currentPic);
    }
}

export function imageToRight(e) {
    const selectedBtn = e.target;

    let currentPic = document.querySelector('.main-photo');
    if (selectedBtn.classList[0] === 'lightbox-right-btn') {
        currentPic = document.querySelector('.lightbox-main-photo');
    }
    const num = currentPic.classList[1];

    if (num === 'one') {
        currentPic.setAttribute('src', SNEAKER[0].gallery[1].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('two');
    } else if (num === 'two') {
        currentPic.setAttribute('src', SNEAKER[0].gallery[2].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('three');
    }  else if (num === 'three') {
        currentPic.setAttribute('src', SNEAKER[0].gallery[3].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('four');
    }  else if (num === 'four') {
        currentPic.setAttribute('src', SNEAKER[0].gallery[0].enlarged);
        currentPic.classList.remove(num);
        currentPic.classList.add('one');
    }

    if (selectedBtn.classList[0] === 'lightbox-right-btn') {
        activateThumbnails(currentPic);
    }
}

export function displayLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'flex';
}

export function changeImage(e) {
    const selected = e.target;

    let photo = document.querySelector('.main-photo');
    if (selected.classList[0] === 'lightbox-thumbnail') {
        photo = document.querySelector('.lightbox-main-photo');
    }

    if (!selected.classList.contains('active')) {
        selected.classList.toggle('active');
        deactivateSiblingImages(selected);

        const num = selected.classList[1];
        if (num === 'one') {
            photo.setAttribute('src', SNEAKER[0].gallery[0].enlarged);
        } else if (num === 'two') {
            photo.setAttribute('src', SNEAKER[0].gallery[1].enlarged);
        }  else if (num === 'three') {
            photo.setAttribute('src', SNEAKER[0].gallery[2].enlarged);
        }  else if (num === 'four') {
            photo.setAttribute('src', SNEAKER[0].gallery[3].enlarged);
        }
    }
}

function activateThumbnails(currentPic) {
    const num = currentPic.classList[1];
    const allThumbnail = document.querySelectorAll('.lightbox-thumbnail');

    for (const tbnail of allThumbnail) {
        if (tbnail.classList[1] === num) {
            deactivateSiblingImages(tbnail);
            if (!tbnail.classList.contains('active')) {
                tbnail.classList.add('active');
            }
        }
    }
}

function deactivateSiblingImages(selected) {
    let allImages = Array.from(document.querySelectorAll('.thumbnail'));
    if (selected.classList[0] === 'lightbox-thumbnail') {
        allImages = Array.from(document.querySelectorAll('.lightbox-thumbnail'));
    }
    
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