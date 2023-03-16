/*=============animItems================*/

// const animItems = document.querySelectorAll('.amim-items');
// if (animItems.length > 0) {
//    window.addEventListener("scroll", animOnScroll);
//    function animOnScroll() {
//       for (let index = 0; index < animItems.length; index++) {
//          const animItem = animItems[index];
//          const animItemHeight = animItem.offsetHeight;
//          const animItemOffset = offset(animItem).top;
//          const animStart = 4;

//          let animItemPoint = window.innerHeight - animItemHeight / animStart;
//          //*console.log(animItemPoint);
//          if (animItemHeight > window.innerHeight) {
//             animItemPoint = window.innerHeight - window.innerHeight / animStart;
//          }
//          if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
//             animItem.classList.add('active');
//          }
//          else {
//             if (!animItem.classList.contains('anim-no'))
//                animItem.classList.remove('active');
//          }
//       }
//    }
//    function offset(el) {
//       const rect = el.getBoundingClientRect();
//       scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//          scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
//    }
//    setTimeout(() => {
//       animOnScroll()
//    }, 400);
// }

/*=============animItems================*/

/*====================hamb==========================*/

// const menu = document.querySelector('.menu__list');
// const hamb = document.querySelector('.header__hamb');
// const body = document.querySelector('body');
// const popup = document.querySelector('.header__popup');
// console.log(hamb, popup, menu);

// popup.append(menu.cloneNode(1));

// hamb.addEventListener('click', hamburger);

// function hamburger() {
//    hamb.classList.toggle('activ');
//    popup.classList.toggle('open');
//    body.classList.toggle('noscrol');
// };

/*====================hamb=======================*/

/*===============tab===================================*/

// function tabs(elements) {
//   for (let index = 0; index < elements.length; index++) {
//     const item = elements[index];

//     item.addEventListener("click", numbActiv);

//     function numbActiv() {
//       elements.forEach(element => {
//         element.classList.remove('active')
//       });
//       item.classList.add('active')
//     }
//   }
// }

// const fn = document.querySelectorAll('.fn');
// //tabs(fn)
/*===============tab===================================*/

/*===============popup=================================*/
//const body = document.body
// const popup = document.querySelector('.popup')
// const settingsBtn = document.querySelector('.settings')
// const settingsCloseBtn = document.querySelector('.settings__bott')

// settingsBtn.addEventListener('click', openPopup)

// function openPopup() {
//   popup.classList.add('active')
//   body.classList.add('scroll')
// }

// settingsCloseBtn.addEventListener('click', closePopup)

// function closePopup() {
//   popup.classList.remove('active')
//   body.classList.remove('scroll')
// }

// window.addEventListener('click', closePopupWin)

// function closePopupWin(event) {
//   if (event.target == popup) {
//     popup.classList.remove('active')
//     body.classList.remove('scroll')
//   }
// }

/*===============popup=================================*/

const input = document.querySelector('.hero__input')
const searchBtn = document.querySelector('.hero__button')
//const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
const soundBtn = document.querySelector('.results__sound')
const wordTitle = document.querySelector('.results__world')


let state = {
   word: "",
   meanings: [],
   phonetics: [],
 };

async function APIword(word) {
try {
   const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
   const data = await response.json()
   console.log(data);
   if(response.ok && data.length) {
      const item = data[0]
      state = {
         ...state,
         meanings: item.meanings,
         phonetics: item.phonetics,
       };
      showResult(item)
   }
   
} catch (error) {
   console.log(error);
}
}
function Result(e) {
   e.preventDefault()
   word = input.value;
   console.log(word);
   APIword(word)
}

function createResultHTML(item) {
   function definitions(item) {
   item.definitions.map(el => {
      el.definition
     
      //return `<div class="results__definition">${el.definition}</div>`
   })
   console.log(item)
   }
   return `
                     <div class="results__item">
								<div class="results__part">${item.partOfSpeech}</div>
								<div class="results__definitions">
                        ${definitions(item)}
								</div>
							</div>`
}


function showResult(item) {
   //createResultHTML(item)
   const resulstEl = document.querySelector('.results')
   resulstEl.style.display = "block"
   wordTitle.innerText = word
   const list = document.querySelector('.results__list')
   state.meanings.forEach(element => {
      console.log(element);
      list.innerHTML += createResultHTML(element)
   });
}

searchBtn.addEventListener('click', Result)

