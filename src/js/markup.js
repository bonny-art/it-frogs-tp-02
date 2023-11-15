import getRefs from './refs';
const refs = getRefs();
import { supportItems } from './support.js';

import foundation11x from './../images/support/foundation-1@1x.png';
import foundation12x from './../images/support/foundation-1@2x.png';
import foundation21x from './../images/support/foundation-2@1x.png';
import foundation22x from './../images/support/foundation-2@2x.png';
import foundation31x from './../images/support/foundation-3@1x.png';
import foundation32x from './../images/support/foundation-3@2x.png';
import foundation41x from './../images/support/foundation-4@1x.png';
import foundation42x from './../images/support/foundation-4@2x.png';
import foundation51x from './../images/support/foundation-5@1x.png';
import foundation52x from './../images/support/foundation-5@2x.png';
import foundation61x from './../images/support/foundation-6@1x.png';
import foundation62x from './../images/support/foundation-6@2x.png';
import foundation71x from './../images/support/foundation-7@1x.png';
import foundation72x from './../images/support/foundation-7@2x.png';
import foundation81x from './../images/support/foundation-8@1x.png';
import foundation82x from './../images/support/foundation-8@2x.png';
import foundation91x from './../images/support/foundation-9@1x.png';
import foundation92x from './../images/support/foundation-9@2x.png';

const arrImg1x = [];
const arrImg2x = [];

arrImg1x.push(
  foundation11x,
  foundation21x,
  foundation31x,
  foundation41x,
  foundation51x,
  foundation61x,
  foundation71x,
  foundation81x,
  foundation91x
);

arrImg2x.push(
  foundation12x,
  foundation22x,
  foundation32x,
  foundation42x,
  foundation52x,
  foundation62x,
  foundation72x,
  foundation82x,
  foundation92x
);

const aaa = getImages(arrImg1x, arrImg2x, supportItems);

function getImages(arrImg1x, arrImg2x, supportItems) {
  for (let i = 0; i < arrImg1x.length; i += 1) {
    supportItems[i].id = i + 1;
    supportItems[i].img = arrImg1x[i];
    supportItems[i].img1x = arrImg1x[i];
    supportItems[i].img2x = arrImg2x[i];
  }

  return supportItems;
}

function insertCategoryBlocks(category) {
  return refs.bookCollectionWrapper.insertAdjacentHTML(
    'beforeend',
    markupCategoryBlock(category)
  );
}

// Support Ukraine
export function createMarkup(arr) {
  return arr
    .map(
      ({ id, img, img1x, img2x, title, url }) => `
        <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${img}" alt="${title}" srcset="${img1x} 1x, ${img2x} 2x" height="32">
            </a>
        </li>                
        `
    )
    .join('');
}

export default { insertCategoryBlocks };
