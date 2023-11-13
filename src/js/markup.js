import getRefs from './refs';
const refs = getRefs();

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
      ({ id, title, url }) => `
        <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${saveChildren}" alt="${title}" srcset="${saveChildren} 1x, ${saveChildrens} 2x" height="32">
            </a>
        </li>
                <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${hopeImage}" alt="${title}" srcset="${hopeImage} 1x, ${hopeImages} 2x" height="32">
            </a>
        </li>
                        <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${medicalCorp}" alt="${title}" srcset="${medicalCorp} 1x, ${medicalCorps} 2x" height="32">
            </a>
        </li>
                                <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${razomImage}" alt="${title}" srcset="${razomImage} 1x, ${razomImages} 2x" height="32">
            </a>
        </li>
                                        <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${againstHunger}" alt="${title}" srcset="${againstHunger} 1x, ${againstHungers} 2x" height="32">
            </a>
        </li>
                                                <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${prytulaImage}" alt="${title}" srcset="${prytulaImage} 1x, ${prytulaImages} 2x" height="32">
            </a>
        </li>
                                                        <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${sansFrontier}" alt="${title}" srcset="${sansFrontier} 1x, ${sansFrontiers} 2x" height="32">
            </a>
        </li>
                                                                <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${worldVision}" alt="${title}" srcset="${worldVision} 1x, ${worldVisions} 2x" height="32">
            </a>
        </li>
                                                                        <li class="support-items">
            <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer">
                <span>0${id}</span>
                <img class="support-img" src="${unitedImage}" alt="${title}" srcset="${unitedImage} 1x, ${unitedImages} 2x" height="32">
            </a>
        </li>
        `
    )
    .join('');
}

export default { insertCategoryBlocks };
