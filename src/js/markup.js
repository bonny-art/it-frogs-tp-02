import getRefs from './refs';
const refs = getRefs();
import { supportItems } from './support.js';

import saveChildren from './../images/support/save-children@1x.png';
import saveChildrens from './../images/support/save-children@2x.png';
import hopeImage from './../images/support/hope@1x.png';
import hopeImages from './../images/support/hope@2x.png';
import medicalCorp from './../images/support/medical-corps@1x.png';
import medicalCorps from './../images/support/medical-corps@2x.png';
import razomImage from './../images/support/razom@1x.png';
import razomImages from './../images/support/razom@2x.png';
import againstHunger from './../images/support/against-hunger@1x.png';
import againstHungers from './../images/support/against-hunger@2x.png';
import prytulaImage from './../images/support/prytula@1x.png';
import prytulaImages from './../images/support/prytula@2x.png';
import sansFrontier from './../images/support/sans-frontiers@1x.png';
import sansFrontiers from './../images/support/sans-frontiers@2x.png';
import worldVision from './../images/support/world-vision@1x.png';
import worldVisions from './../images/support/world-vision@2x.png';
import unitedImage from './../images/support/united24@1x.png';
import unitedImages from './../images/support/united24@2x.png';

const arrImg1x = [];
const arrImg2x = [];

arrImg1x.push(
  saveChildren,
  hopeImage,
  medicalCorp,
  razomImage,
  againstHunger,
  prytulaImage,
  sansFrontier,
  worldVision,
  unitedImage
);

arrImg2x.push(
  saveChildrens,
  hopeImages,
  medicalCorps,
  razomImages,
  againstHungers,
  prytulaImages,
  sansFrontiers,
  worldVisions,
  unitedImages
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
