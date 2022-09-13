console.log('JS OK!');


/*
creare un carousel di immagini
le immagini sono in un array (array di stringhe)
pulsanti avanti indietro
aggiungere le thumb (la thumb attiva sarà distinguibile dalle altre)
dopo 5 secondi la slide avanza automaticamente
*/

// settings
const NUM_IMAGES = 5;
const CHANGE_IMAGE_DELAY = 5;

//const imagesObject = createImageArray(NUM_IMAGES);


const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },

    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
];

console.log(images);


let direction = true;

let activeIndex = 0;
buildCarousel(images, activeIndex);

let idInterval = setInterval(moveImage, CHANGE_IMAGE_DELAY * 1000);

const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');
const changeDirectionButton = document.querySelector('.change-direction-btn button');


leftArrowButton.addEventListener('click', moveImagePrevious);
rightArrowButton.addEventListener('click', moveImageForward);
changeDirectionButton.addEventListener('click', changeDirection);


function moveImage() {
    if (direction) {
        moveImageForward();
    } else {
        moveImagePrevious();
    }
}


function changeDirection() {
    direction = !direction;
    manageTimeInterval();
}


function moveImageForward() {
    // se l'indice si trova in fondo allora lo riposizione all'inizio dell'array
    activeIndex = activeIndex < images.length - 1 ? activeIndex + 1 : 0;
    buildCarousel(images, activeIndex);
    manageTimeInterval()
}


function moveImagePrevious() {

    // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
    activeIndex = activeIndex > 0 ? activeIndex - 1 : images.length - 1;
    buildCarousel(images, activeIndex);
    manageTimeInterval()
}


function manageTimeInterval() {
    clearInterval(idInterval);
    idInterval = setInterval(moveImage, CHANGE_IMAGE_DELAY * 1000);
}


function buildCarousel(places, activeIndex) {
    const carouselImages = document.querySelector('.carousel-images');
    const carouselThumbs = document.querySelector('.carousel-thumbs');
    const activeImageTitleElement = document.querySelector('.active-image-title');
    let content = '';
    let activeTitle = '';

    places.forEach((place, i) => {
        let imageClass = 'carousel-img'
        if (i === activeIndex) {
            activeTitle = place.title;
            imageClass += ' active';
        }

        content += `<img class="${imageClass}" src="${place.url}" alt="${place.description}" />`;
    });

    console.log({ activeTitle });
    activeImageTitleElement.innerHTML = activeTitle
    carouselImages.innerHTML = content;
    carouselThumbs.innerHTML = content;
}


function createImageArray(numImages) {
    const images = [];
    for (let i = 1; i <= numImages; i++) {
        const fileName = i < 10 ? '0' + i : i;
        const url = 'img/' + fileName + '.jpg';
        images.push(url);
    }

    return images;
}