import './style.css';
import rArrow from './images/right-arrow.svg';
import lArrow from './images/left-arrow.svg';

// import all images in one
function importAll(r) {
    return r.keys().map(r);
  }
  
const imgArr = importAll(require.context('./images', false, /\.(png|jpe?g)$/));


const frame = document.querySelector('.frame');
const navDotsContainer = document.createElement('div');
navDotsContainer.classList.add('dots');

// define image height and width
const imgWidth = '600';
const imgHeight = imgWidth;


// loop through each image, set dimension and append to carousel element
imgArr.forEach((image, index) => {
    console.log(image);
    const img = new Image();
    img.src = image;
    img.height = imgHeight;
    img.width = imgWidth;
    img.classList.add('image');
    img.setAttribute("id", index);


    const navDot = document.createElement('div');
    navDot.classList.add('nav-dot');
    navDot.setAttribute("id", `dot-${index}`)
    navDot.setAttribute("data-id", index);
    // set first image as active
    if (index === 0) {
        img.classList.add('active');
        navDot.classList.add('active')
    }

    // append
    frame.appendChild(img);
    navDotsContainer.appendChild(navDot);
    frame.appendChild(navDotsContainer);
})

// navigation arrows
const rightArrow = new Image();
rightArrow.src = rArrow;
rightArrow.setAttribute("height", "24");
rightArrow.classList.add("next");

const leftArrow = new Image();
leftArrow.src = lArrow;
leftArrow.setAttribute("height", "24");
leftArrow.classList.add("prev")

frame.appendChild(rightArrow);
frame.appendChild(leftArrow);
