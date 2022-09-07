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


const imagesObject1 = {
    url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
    "title": ['Svezia'],
    "description": ['Lorem ipsum, dolor sit amet consectetur adipisicing elit.']
};
console.log(imagesObject1.url, imagesObject1["title"], imagesObject1["description"]);


const imagesObject2 = {
    url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
    "title": ['Perù'],
    "description": ['Lorem ipsum, dolor sit amet consectetur adipisicing elit.']
};
console.log(imagesObject2.url, imagesObject2["title"], imagesObject2["description"]);


const imagesObject3 = {
    url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
    "title": ['Chile'],
    "description": ['Lorem ipsum, dolor sit amet consectetur adipisicing elit.']
};
console.log(imagesObject3.url, imagesObject3["title"], imagesObject3["description"]);


const imagesObject4 = {
    url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
    "title": ['Argentina'],
    "description": ['Lorem ipsum, dolor sit amet consectetur adipisicing elit.']
};
console.log(imagesObject4.url, imagesObject4["title"], imagesObject4["description"]);


const imagesObject5 = {
    url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
    "title": ['Colombia',],
    "description": ['Lorem ipsum, dolor sit amet consectetur adipisicing elit.']
};
console.log(imagesObject5.url, imagesObject5["title"], imagesObject5["description"]);


let activeIndex = 0;
buildCarousel(imagesObject1, activeIndex);

let idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);

const leftArrowButton = document.getElementById('left-arrow');
const rightArrowButton = document.getElementById('right-arrow');

leftArrowButton.addEventListener('click', moveCarouselPrevious);


rightArrowButton.addEventListener('click', moveCarouselForward);





function moveCarouselForward() {
    clearInterval(idInterval)
    // se l'indice si trova in fondo allora lo riposizione all'inizio dell'array
    activeIndex = activeIndex < imagesObject1.length - 1 ? activeIndex + 1 : 0;
    buildCarousel(imagesObject1, activeIndex);
    idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
}

function moveCarouselPrevious() {
    clearInterval(idInterval)
    // se l'indice è in prima posizione si valorizza all'ultima posizione dell'array
    activeIndex = activeIndex > 0 ? activeIndex - 1 : imagesObject.length - 1;
    buildCarousel(imagesObject, activeIndex);
    idInterval = setInterval(moveCarouselForward, CHANGE_IMAGE_DELAY * 1000);
}


function buildCarousel(urls, activeIndex) {
    const carouselImages = document.querySelector('.carousel-images');
    const carouselThumbs = document.querySelector('.carousel-thumbs');
    let content = '';
    for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        const imageClass = i === activeIndex ? 'carousel-img active' : 'carousel-img'
        content += `<img class="${imageClass}" src="${url}" alt="${url}" />`;
    }
    // console.log({content});
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