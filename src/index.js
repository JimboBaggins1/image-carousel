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
